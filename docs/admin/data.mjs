// Read-only, server-paginated admin queries. Authorization stays in database RLS/RPCs.
// Empty embeds make related-field searches filter parent rows without trimming the
// displayed joins: https://docs.postgrest.org/en/stable/references/api/resource_embedding.html#or-filtering-across-embedded-resources

export const ACCOUNT_SECTIONS = Object.freeze(['businesses', 'bookings', 'merchant_bookings', 'payments', 'wallets', 'loyalty', 'birthdays', 'crm', 'reviews', 'complaints', 'favourites', 'conversations', 'notifications']);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const BUSINESS_FIELDS = 'id,owner_id,name,category,description,address,phone,country,currency,timezone,is_active,is_listed,web_booking_enabled,images,logo_url,latitude,longitude,subscription_plan,created_at,updated_at';
const SERVICE_FIELDS = 'id,business_id,name,description,duration_minutes,price,price_max,price_on_request,booking_type,location_type,max_capacity,max_party_size,buffer_minutes,requires_confirmation,cancellation_note,images,is_active,created_at';
const BOOKING_FIELDS = 'id,customer_id,business_id,service_id,start_time,end_time,status,payment_status,notes,source,party_size,price_snapshot,currency_snapshot,guest_name,guest_phone,created_at,updated_at';
const COMPLAINT_FIELDS = 'id,complainant_id,complainant_role,against_business_id,against_user_id,booking_id,against_review_id,against_message_id,reason,description,status,evidence_urls,created_at,updated_at';
const REVIEW_FIELDS = 'id,business_id,customer_id,booking_id,rating,comment,author_name,is_hidden,hidden_reason,hidden_at,created_at';
const joins = {
  business: 'business:businesses!bookings_business_id_fkey(id,name)',
  service: 'service:services!bookings_service_id_fkey(id,name)',
  customer: 'customer:profiles!bookings_customer_id_fkey(id,full_name,phone)',
};

function failure(code, message) { return Object.assign(new Error(message), { code }); }
function invalid(message) { throw failure('ADMIN_INVALID_ARGUMENT', message); }
function record(value) { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function id(value, name = 'id') {
  if (typeof value !== 'string' || !UUID.test(value)) invalid(`Invalid ${name}`);
  return value;
}
function choice(value, allowed, name) {
  if (!allowed.includes(value)) invalid(`Invalid ${name}`);
  return value;
}
function paging({ page = 1, pageSize = 25 } = {}) {
  if (!Number.isSafeInteger(page) || page < 1) invalid('page must be a positive integer');
  if (!Number.isSafeInteger(pageSize) || pageSize < 1 || pageSize > 50) invalid('pageSize must be between 1 and 50');
  const offset = (page - 1) * pageSize;
  if (!Number.isSafeInteger(offset + pageSize)) invalid('Page offset is too large');
  return { page, pageSize, offset };
}
function searchText(value = '') {
  if (typeof value !== 'string' || value.length > 200 || /[\u0000-\u001f\u007f]/.test(value)) invalid('Invalid search text');
  return value.trim();
}
function countryCode(value = '') {
  if (typeof value !== 'string') invalid('Invalid country');
  const result = value.trim().toUpperCase();
  if (result && !/^[A-Z]{2}$/.test(result)) invalid('Invalid country');
  return result;
}
function timestamp(value, name) {
  if (!value) return null;
  // Callers convert calendar dates in their chosen time zone into ISO instants.
  // A bare YYYY-MM-DD is deliberately rejected, rather than silently using UTC.
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})$/.test(value) || !Number.isFinite(Date.parse(value))) invalid(`Invalid ${name} timestamp`);
  return value;
}
function withSignal(query, options) {
  const signal = options.signal ?? options.abortSignal;
  if (signal) {
    if (typeof signal.addEventListener !== 'function' || typeof signal.aborted !== 'boolean') invalid('Invalid abort signal');
    if (signal.aborted) throw signal.reason ?? new DOMException('Aborted', 'AbortError');
    query = query.abortSignal(signal);
  }
  return query;
}
function validateRow(row) {
  if (!record(row) || typeof row.id !== 'string' || !row.id) throw failure('ADMIN_RESPONSE_INVALID', 'Invalid record response');
  for (const key of ['business', 'service', 'customer', 'owner', 'complainant', 'against_user']) {
    if (key in row && row[key] !== null && !record(row[key])) throw failure('ADMIN_RESPONSE_INVALID', `Invalid ${key} relationship`);
  }
  return row;
}
function pageResult(items, total, pagination, extra = {}) {
  if (!Array.isArray(items) || !Number.isSafeInteger(total) || total < 0 || items.length > pagination.pageSize || items.length > total) throw failure('ADMIN_RESPONSE_INVALID', 'Invalid paginated response');
  items.forEach(validateRow);
  return { items, total, page: pagination.page, pageSize: pagination.pageSize, ...extra };
}
async function tablePage(query, options, order = [['created_at', false], ['id', false]]) {
  const pagination = paging(options);
  for (const [column, ascending] of order) query = query.order(column, { ascending });
  query = query.range(pagination.offset, pagination.offset + pagination.pageSize - 1);
  const { data, error, count } = await withSignal(query, options);
  if (error) throw error;
  return pageResult(data, count, pagination);
}
async function single(query, options = {}) {
  const { data, error } = await withSignal(query.single(), options);
  if (error) throw error;
  if (data === null) throw failure('ADMIN_NOT_FOUND', 'Record not found');
  return validateRow(data);
}

// imatch is used instead of ilike: PostgREST treats * as a LIKE wildcard alias.
// Escaping regex metacharacters gives literal, case-insensitive substring search,
// including literal %, _, *, quotes, parentheses, commas and backslashes.
function literalPattern(text) {
  return JSON.stringify(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
}
function conditions(fields, text) {
  const pattern = literalPattern(text);
  return fields.map(field => `${field}.imatch.${pattern}`);
}
function searchable(sb, table, select, fields, relations, options) {
  const text = searchText(options.search);
  const embeds = text ? relations.map(r => `${r.alias}:${r.table}!${r.fk}()`) : [];
  let query = sb.from(table).select([select, ...embeds].join(','), { count: 'exact' });
  if (text) {
    for (const r of relations) query = query.or(conditions(r.fields, text).join(','), { referencedTable: r.alias });
    const clauses = [...conditions(fields, text), ...relations.map(r => `${r.alias}.not.is.null`)];
    if (UUID.test(text)) clauses.push(`id.eq.${JSON.stringify(text)}`);
    query = query.or(clauses.join(','));
  }
  return query;
}
const relation = (alias, table, fk, fields) => ({ alias, table, fk, fields });

export function createAdminData(sb) {
  if (!sb || typeof sb.from !== 'function' || typeof sb.rpc !== 'function') invalid('A Supabase client is required');
  return {
    businesses(options = {}) {
      const status = choice(options.status ?? 'all', ['all', 'active', 'inactive', 'listed', 'unlisted'], 'business status');
      const country = countryCode(options.country);
      let query = searchable(sb, 'businesses', BUSINESS_FIELDS + ',owner:profiles!businesses_owner_id_fkey(id,full_name,phone)',
        ['name', 'category', 'description', 'address', 'phone', 'country'],
        [relation('match_owner', 'profiles', 'businesses_owner_id_fkey', ['full_name', 'phone'])], options);
      if (status === 'active' || status === 'inactive') query = query.eq('is_active', status === 'active');
      if (status === 'listed' || status === 'unlisted') query = query.eq('is_listed', status === 'listed');
      if (country) query = query.eq('country', country);
      return tablePage(query, options);
    },
    business(value, options = {}) {
      return single(sb.from('businesses').select(BUSINESS_FIELDS + ',owner:profiles!businesses_owner_id_fkey(id,full_name,phone)').eq('id', id(value)), options);
    },
    services(options = {}) {
      let query = searchable(sb, 'services', SERVICE_FIELDS + ',business:businesses!services_business_id_fkey(id,name)', ['name', 'description'],
        [relation('match_business', 'businesses', 'services_business_id_fkey', ['name'])], options);
      if (options.businessId) query = query.eq('business_id', id(options.businessId, 'businessId'));
      return tablePage(query, options);
    },
    availability(options = {}) {
      const query = sb.from('availability').select('id,business_id,day_of_week,start_time,end_time,requires_confirmation', { count: 'exact' })
        .eq('business_id', id(options.businessId, 'businessId'));
      return tablePage(query, options, [['day_of_week', true], ['start_time', true], ['id', true]]);
    },
    bookings(options = {}) {
      const status = choice(options.status ?? 'all', ['all', 'pending', 'confirmed', 'completed', 'cancelled'], 'booking status');
      const from = timestamp(options.from, 'from'), to = timestamp(options.to, 'to');
      if (from && to && Date.parse(from) >= Date.parse(to)) invalid('from must be before to');
      let query = searchable(sb, 'bookings', [BOOKING_FIELDS, joins.business, joins.service, joins.customer].join(','), ['guest_name', 'guest_phone', 'notes', 'source'], [
        relation('match_business', 'businesses', 'bookings_business_id_fkey', ['name', 'phone']),
        relation('match_service', 'services', 'bookings_service_id_fkey', ['name']),
        relation('match_customer', 'profiles', 'bookings_customer_id_fkey', ['full_name', 'phone']),
      ], options);
      if (status !== 'all') query = query.eq('status', status);
      if (options.businessId) query = query.eq('business_id', id(options.businessId, 'businessId'));
      if (from) query = query.gte('start_time', from);
      if (to) query = query.lt('start_time', to);
      return tablePage(query, options);
    },
    complaints(options = {}) {
      const status = choice(options.status ?? 'all', ['all', 'unresolved', 'open', 'reviewing', 'resolved', 'dismissed'], 'complaint status');
      let query = searchable(sb, 'complaints', COMPLAINT_FIELDS + ',business:businesses!complaints_against_business_id_fkey(id,name),complainant:profiles!complaints_complainant_id_fkey(id,full_name,phone),against_user:profiles!complaints_against_user_id_fkey(id,full_name,phone)', ['reason', 'description'], [
        relation('match_business', 'businesses', 'complaints_against_business_id_fkey', ['name']),
        relation('match_complainant', 'profiles', 'complaints_complainant_id_fkey', ['full_name', 'phone']),
        relation('match_against_user', 'profiles', 'complaints_against_user_id_fkey', ['full_name', 'phone']),
      ], options);
      if (status === 'unresolved') query = query.in('status', ['open', 'reviewing']);
      else if (status !== 'all') query = query.eq('status', status);
      return tablePage(query, options);
    },
    reviews(options = {}) {
      let query = searchable(sb, 'reviews', REVIEW_FIELDS + ',business:businesses!reviews_business_id_fkey(id,name),customer:profiles!reviews_customer_id_fkey(id,full_name,phone)', ['comment', 'author_name', 'hidden_reason'], [
        relation('match_business', 'businesses', 'reviews_business_id_fkey', ['name']),
        relation('match_customer', 'profiles', 'reviews_customer_id_fkey', ['full_name', 'phone']),
      ], options);
      if (options.businessId) query = query.eq('business_id', id(options.businessId, 'businessId'));
      return tablePage(query, options);
    },
    async accounts(options = {}) {
      const pagination = paging(options);
      const query = sb.rpc('admin_accounts_page', {
        p_search: searchText(options.search),
        p_role: choice(options.role ?? 'all', ['all', 'customer', 'merchant', 'admin'], 'account role'),
        p_status: choice(options.status ?? 'all', ['all', 'active', 'suspended', 'unverified', 'missing_profile'], 'account status'),
        p_country: countryCode(options.country), p_offset: pagination.offset, p_limit: pagination.pageSize,
      });
      const { data, error } = await withSignal(query, options);
      if (error) throw error;
      if (!record(data)) throw failure('ADMIN_RESPONSE_INVALID', 'Invalid account page');
      return pageResult(data.items, data.total, pagination);
    },
    async account(value, options = {}) {
      const { data, error } = await withSignal(sb.rpc('admin_account_detail', { p_user: id(value) }), options);
      if (error) throw error;
      if (data === null) throw failure('ADMIN_NOT_FOUND', 'Account not found');
      return validateRow(data);
    },
    async accountRecords(options = {}) {
      const pagination = paging(options);
      const query = sb.rpc('admin_account_records', {
        p_user: id(options.id), p_section: choice(options.section, ACCOUNT_SECTIONS, 'account section'),
        p_offset: pagination.offset, p_limit: pagination.pageSize,
      });
      const { data, error } = await withSignal(query, options);
      if (error) throw error;
      if (!record(data) || typeof data.available !== 'boolean' || (!data.available && (data.total !== 0 || !Array.isArray(data.items) || data.items.length !== 0))) throw failure('ADMIN_RESPONSE_INVALID', 'Invalid account records page');
      return pageResult(data.items, data.total, pagination, { available: data.available });
    },
  };
}

function nonBlank(...values) {
  for (const value of values) if (typeof value === 'string' && value.trim()) return value.trim();
  return '—';
}
export function customerName(booking) { return nonBlank(booking?.customer?.full_name, booking?.guest_name); }
export function customerPhone(booking) { return nonBlank(booking?.customer?.phone, booking?.guest_phone); }
export function historicalAmount(booking) {
  const raw = booking?.price_snapshot;
  const amount = typeof raw === 'number' ? raw : typeof raw === 'string' && /^-?\d+(?:\.\d+)?$/.test(raw.trim()) ? Number(raw) : NaN;
  const currency = typeof booking?.currency_snapshot === 'string' && /^[a-z]{3}$/i.test(booking.currency_snapshot.trim()) ? booking.currency_snapshot.trim().toUpperCase() : '';
  if (!Number.isFinite(amount)) return currency ? `${currency} 金額未知` : '金額／幣別未知';
  return `${currency || '幣別未知'} ${new Intl.NumberFormat('zh-HK', { maximumFractionDigits: 2 }).format(amount)}`;
}
