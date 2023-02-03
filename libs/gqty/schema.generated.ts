/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bytea: any;
  citext: string;
  jsonb: object;
  timestamptz: any;
  uuid: string;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
}

export interface apps_aggregate_bool_exp {
  count?: InputMaybe<apps_aggregate_bool_exp_count>;
}

export interface apps_aggregate_bool_exp_count {
  arguments?: InputMaybe<Array<apps_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<apps_bool_exp>;
  predicate: Int_comparison_exp;
}

/** order by aggregate values of table "apps" */
export interface apps_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<apps_max_order_by>;
  min?: InputMaybe<apps_min_order_by>;
}

/** input type for inserting array relation for remote table "apps" */
export interface apps_arr_rel_insert_input {
  data: Array<apps_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<apps_on_conflict>;
}

/** Boolean expression to filter rows from the table "apps". All fields are combined with a logical 'AND'. */
export interface apps_bool_exp {
  _and?: InputMaybe<Array<apps_bool_exp>>;
  _not?: InputMaybe<apps_bool_exp>;
  _or?: InputMaybe<Array<apps_bool_exp>>;
  contact?: InputMaybe<contacts_bool_exp>;
  contact_id?: InputMaybe<uuid_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "apps" */
export enum apps_constraint {
  /** unique or primary key constraint on columns "id" */
  apps_pkey = "apps_pkey",
}

/** input type for inserting data into table "apps" */
export interface apps_insert_input {
  contact?: InputMaybe<contacts_obj_rel_insert_input>;
  contact_id?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
}

/** order by max() on columns of table "apps" */
export interface apps_max_order_by {
  contact_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
}

/** order by min() on columns of table "apps" */
export interface apps_min_order_by {
  contact_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
}

/** on_conflict condition type for table "apps" */
export interface apps_on_conflict {
  constraint: apps_constraint;
  update_columns?: Array<apps_update_column>;
  where?: InputMaybe<apps_bool_exp>;
}

/** Ordering options when selecting data from "apps". */
export interface apps_order_by {
  contact?: InputMaybe<contacts_order_by>;
  contact_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
}

/** primary key columns input for table: apps */
export interface apps_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "apps" */
export enum apps_select_column {
  /** column name */
  contact_id = "contact_id",
  /** column name */
  id = "id",
  /** column name */
  name = "name",
}

/** input type for updating data in table "apps" */
export interface apps_set_input {
  contact_id?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
}

/** Streaming cursor of the table "apps" */
export interface apps_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: apps_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface apps_stream_cursor_value_input {
  contact_id?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
}

/** update columns of table "apps" */
export enum apps_update_column {
  /** column name */
  contact_id = "contact_id",
  /** column name */
  id = "id",
  /** column name */
  name = "name",
}

export interface apps_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<apps_set_input>;
  where: apps_bool_exp;
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface authProviderRequests_append_input {
  options?: InputMaybe<Scalars["jsonb"]>;
}

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export interface authProviderRequests_bool_exp {
  _and?: InputMaybe<Array<authProviderRequests_bool_exp>>;
  _not?: InputMaybe<authProviderRequests_bool_exp>;
  _or?: InputMaybe<Array<authProviderRequests_bool_exp>>;
  id?: InputMaybe<uuid_comparison_exp>;
  options?: InputMaybe<jsonb_comparison_exp>;
}

/** unique or primary key constraints on table "auth.provider_requests" */
export enum authProviderRequests_constraint {
  /** unique or primary key constraint on columns "id" */
  provider_requests_pkey = "provider_requests_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface authProviderRequests_delete_at_path_input {
  options?: InputMaybe<Array<Scalars["String"]>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface authProviderRequests_delete_elem_input {
  options?: InputMaybe<Scalars["Int"]>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface authProviderRequests_delete_key_input {
  options?: InputMaybe<Scalars["String"]>;
}

/** input type for inserting data into table "auth.provider_requests" */
export interface authProviderRequests_insert_input {
  id?: InputMaybe<Scalars["uuid"]>;
  options?: InputMaybe<Scalars["jsonb"]>;
}

/** on_conflict condition type for table "auth.provider_requests" */
export interface authProviderRequests_on_conflict {
  constraint: authProviderRequests_constraint;
  update_columns?: Array<authProviderRequests_update_column>;
  where?: InputMaybe<authProviderRequests_bool_exp>;
}

/** Ordering options when selecting data from "auth.provider_requests". */
export interface authProviderRequests_order_by {
  id?: InputMaybe<order_by>;
  options?: InputMaybe<order_by>;
}

/** primary key columns input for table: auth.provider_requests */
export interface authProviderRequests_pk_columns_input {
  id: Scalars["uuid"];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface authProviderRequests_prepend_input {
  options?: InputMaybe<Scalars["jsonb"]>;
}

/** select columns of table "auth.provider_requests" */
export enum authProviderRequests_select_column {
  /** column name */
  id = "id",
  /** column name */
  options = "options",
}

/** input type for updating data in table "auth.provider_requests" */
export interface authProviderRequests_set_input {
  id?: InputMaybe<Scalars["uuid"]>;
  options?: InputMaybe<Scalars["jsonb"]>;
}

/** Streaming cursor of the table "authProviderRequests" */
export interface authProviderRequests_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: authProviderRequests_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface authProviderRequests_stream_cursor_value_input {
  id?: InputMaybe<Scalars["uuid"]>;
  options?: InputMaybe<Scalars["jsonb"]>;
}

/** update columns of table "auth.provider_requests" */
export enum authProviderRequests_update_column {
  /** column name */
  id = "id",
  /** column name */
  options = "options",
}

export interface authProviderRequests_updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<authProviderRequests_append_input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<authProviderRequests_delete_at_path_input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<authProviderRequests_delete_elem_input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<authProviderRequests_delete_key_input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<authProviderRequests_prepend_input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<authProviderRequests_set_input>;
  where: authProviderRequests_bool_exp;
}

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export interface authProviders_bool_exp {
  _and?: InputMaybe<Array<authProviders_bool_exp>>;
  _not?: InputMaybe<authProviders_bool_exp>;
  _or?: InputMaybe<Array<authProviders_bool_exp>>;
  id?: InputMaybe<String_comparison_exp>;
  userProviders?: InputMaybe<authUserProviders_bool_exp>;
  userProviders_aggregate?: InputMaybe<authUserProviders_aggregate_bool_exp>;
}

/** unique or primary key constraints on table "auth.providers" */
export enum authProviders_constraint {
  /** unique or primary key constraint on columns "id" */
  providers_pkey = "providers_pkey",
}

/** input type for inserting data into table "auth.providers" */
export interface authProviders_insert_input {
  id?: InputMaybe<Scalars["String"]>;
  userProviders?: InputMaybe<authUserProviders_arr_rel_insert_input>;
}

/** input type for inserting object relation for remote table "auth.providers" */
export interface authProviders_obj_rel_insert_input {
  data: authProviders_insert_input;
  /** upsert condition */
  on_conflict?: InputMaybe<authProviders_on_conflict>;
}

/** on_conflict condition type for table "auth.providers" */
export interface authProviders_on_conflict {
  constraint: authProviders_constraint;
  update_columns?: Array<authProviders_update_column>;
  where?: InputMaybe<authProviders_bool_exp>;
}

/** Ordering options when selecting data from "auth.providers". */
export interface authProviders_order_by {
  id?: InputMaybe<order_by>;
  userProviders_aggregate?: InputMaybe<authUserProviders_aggregate_order_by>;
}

/** primary key columns input for table: auth.providers */
export interface authProviders_pk_columns_input {
  id: Scalars["String"];
}

/** select columns of table "auth.providers" */
export enum authProviders_select_column {
  /** column name */
  id = "id",
}

/** input type for updating data in table "auth.providers" */
export interface authProviders_set_input {
  id?: InputMaybe<Scalars["String"]>;
}

/** Streaming cursor of the table "authProviders" */
export interface authProviders_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: authProviders_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface authProviders_stream_cursor_value_input {
  id?: InputMaybe<Scalars["String"]>;
}

/** update columns of table "auth.providers" */
export enum authProviders_update_column {
  /** column name */
  id = "id",
}

export interface authProviders_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<authProviders_set_input>;
  where: authProviders_bool_exp;
}

export interface authRefreshTokens_aggregate_bool_exp {
  count?: InputMaybe<authRefreshTokens_aggregate_bool_exp_count>;
}

export interface authRefreshTokens_aggregate_bool_exp_count {
  arguments?: InputMaybe<Array<authRefreshTokens_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<authRefreshTokens_bool_exp>;
  predicate: Int_comparison_exp;
}

/** order by aggregate values of table "auth.refresh_tokens" */
export interface authRefreshTokens_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<authRefreshTokens_max_order_by>;
  min?: InputMaybe<authRefreshTokens_min_order_by>;
}

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export interface authRefreshTokens_arr_rel_insert_input {
  data: Array<authRefreshTokens_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<authRefreshTokens_on_conflict>;
}

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export interface authRefreshTokens_bool_exp {
  _and?: InputMaybe<Array<authRefreshTokens_bool_exp>>;
  _not?: InputMaybe<authRefreshTokens_bool_exp>;
  _or?: InputMaybe<Array<authRefreshTokens_bool_exp>>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  expiresAt?: InputMaybe<timestamptz_comparison_exp>;
  refreshToken?: InputMaybe<uuid_comparison_exp>;
  user?: InputMaybe<users_bool_exp>;
  userId?: InputMaybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum authRefreshTokens_constraint {
  /** unique or primary key constraint on columns "refresh_token" */
  refresh_tokens_pkey = "refresh_tokens_pkey",
}

/** input type for inserting data into table "auth.refresh_tokens" */
export interface authRefreshTokens_insert_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]>;
  refreshToken?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<users_obj_rel_insert_input>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** order by max() on columns of table "auth.refresh_tokens" */
export interface authRefreshTokens_max_order_by {
  createdAt?: InputMaybe<order_by>;
  expiresAt?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** order by min() on columns of table "auth.refresh_tokens" */
export interface authRefreshTokens_min_order_by {
  createdAt?: InputMaybe<order_by>;
  expiresAt?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** on_conflict condition type for table "auth.refresh_tokens" */
export interface authRefreshTokens_on_conflict {
  constraint: authRefreshTokens_constraint;
  update_columns?: Array<authRefreshTokens_update_column>;
  where?: InputMaybe<authRefreshTokens_bool_exp>;
}

/** Ordering options when selecting data from "auth.refresh_tokens". */
export interface authRefreshTokens_order_by {
  createdAt?: InputMaybe<order_by>;
  expiresAt?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  user?: InputMaybe<users_order_by>;
  userId?: InputMaybe<order_by>;
}

/** primary key columns input for table: auth.refresh_tokens */
export interface authRefreshTokens_pk_columns_input {
  refreshToken: Scalars["uuid"];
}

/** select columns of table "auth.refresh_tokens" */
export enum authRefreshTokens_select_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  expiresAt = "expiresAt",
  /** column name */
  refreshToken = "refreshToken",
  /** column name */
  userId = "userId",
}

/** input type for updating data in table "auth.refresh_tokens" */
export interface authRefreshTokens_set_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]>;
  refreshToken?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** Streaming cursor of the table "authRefreshTokens" */
export interface authRefreshTokens_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: authRefreshTokens_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface authRefreshTokens_stream_cursor_value_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]>;
  refreshToken?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** update columns of table "auth.refresh_tokens" */
export enum authRefreshTokens_update_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  expiresAt = "expiresAt",
  /** column name */
  refreshToken = "refreshToken",
  /** column name */
  userId = "userId",
}

export interface authRefreshTokens_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<authRefreshTokens_set_input>;
  where: authRefreshTokens_bool_exp;
}

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export interface authRoles_bool_exp {
  _and?: InputMaybe<Array<authRoles_bool_exp>>;
  _not?: InputMaybe<authRoles_bool_exp>;
  _or?: InputMaybe<Array<authRoles_bool_exp>>;
  role?: InputMaybe<String_comparison_exp>;
  userRoles?: InputMaybe<authUserRoles_bool_exp>;
  userRoles_aggregate?: InputMaybe<authUserRoles_aggregate_bool_exp>;
  usersByDefaultRole?: InputMaybe<users_bool_exp>;
  usersByDefaultRole_aggregate?: InputMaybe<users_aggregate_bool_exp>;
}

/** unique or primary key constraints on table "auth.roles" */
export enum authRoles_constraint {
  /** unique or primary key constraint on columns "role" */
  roles_pkey = "roles_pkey",
}

/** input type for inserting data into table "auth.roles" */
export interface authRoles_insert_input {
  role?: InputMaybe<Scalars["String"]>;
  userRoles?: InputMaybe<authUserRoles_arr_rel_insert_input>;
  usersByDefaultRole?: InputMaybe<users_arr_rel_insert_input>;
}

/** input type for inserting object relation for remote table "auth.roles" */
export interface authRoles_obj_rel_insert_input {
  data: authRoles_insert_input;
  /** upsert condition */
  on_conflict?: InputMaybe<authRoles_on_conflict>;
}

/** on_conflict condition type for table "auth.roles" */
export interface authRoles_on_conflict {
  constraint: authRoles_constraint;
  update_columns?: Array<authRoles_update_column>;
  where?: InputMaybe<authRoles_bool_exp>;
}

/** Ordering options when selecting data from "auth.roles". */
export interface authRoles_order_by {
  role?: InputMaybe<order_by>;
  userRoles_aggregate?: InputMaybe<authUserRoles_aggregate_order_by>;
  usersByDefaultRole_aggregate?: InputMaybe<users_aggregate_order_by>;
}

/** primary key columns input for table: auth.roles */
export interface authRoles_pk_columns_input {
  role: Scalars["String"];
}

/** select columns of table "auth.roles" */
export enum authRoles_select_column {
  /** column name */
  role = "role",
}

/** input type for updating data in table "auth.roles" */
export interface authRoles_set_input {
  role?: InputMaybe<Scalars["String"]>;
}

/** Streaming cursor of the table "authRoles" */
export interface authRoles_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: authRoles_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface authRoles_stream_cursor_value_input {
  role?: InputMaybe<Scalars["String"]>;
}

/** update columns of table "auth.roles" */
export enum authRoles_update_column {
  /** column name */
  role = "role",
}

export interface authRoles_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<authRoles_set_input>;
  where: authRoles_bool_exp;
}

export interface authUserProviders_aggregate_bool_exp {
  count?: InputMaybe<authUserProviders_aggregate_bool_exp_count>;
}

export interface authUserProviders_aggregate_bool_exp_count {
  arguments?: InputMaybe<Array<authUserProviders_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<authUserProviders_bool_exp>;
  predicate: Int_comparison_exp;
}

/** order by aggregate values of table "auth.user_providers" */
export interface authUserProviders_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<authUserProviders_max_order_by>;
  min?: InputMaybe<authUserProviders_min_order_by>;
}

/** input type for inserting array relation for remote table "auth.user_providers" */
export interface authUserProviders_arr_rel_insert_input {
  data: Array<authUserProviders_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<authUserProviders_on_conflict>;
}

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export interface authUserProviders_bool_exp {
  _and?: InputMaybe<Array<authUserProviders_bool_exp>>;
  _not?: InputMaybe<authUserProviders_bool_exp>;
  _or?: InputMaybe<Array<authUserProviders_bool_exp>>;
  accessToken?: InputMaybe<String_comparison_exp>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  provider?: InputMaybe<authProviders_bool_exp>;
  providerId?: InputMaybe<String_comparison_exp>;
  providerUserId?: InputMaybe<String_comparison_exp>;
  refreshToken?: InputMaybe<String_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
  user?: InputMaybe<users_bool_exp>;
  userId?: InputMaybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "auth.user_providers" */
export enum authUserProviders_constraint {
  /** unique or primary key constraint on columns "id" */
  user_providers_pkey = "user_providers_pkey",
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  user_providers_provider_id_provider_user_id_key = "user_providers_provider_id_provider_user_id_key",
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  user_providers_user_id_provider_id_key = "user_providers_user_id_provider_id_key",
}

/** input type for inserting data into table "auth.user_providers" */
export interface authUserProviders_insert_input {
  accessToken?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  provider?: InputMaybe<authProviders_obj_rel_insert_input>;
  providerId?: InputMaybe<Scalars["String"]>;
  providerUserId?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  user?: InputMaybe<users_obj_rel_insert_input>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** order by max() on columns of table "auth.user_providers" */
export interface authUserProviders_max_order_by {
  accessToken?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  providerId?: InputMaybe<order_by>;
  providerUserId?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** order by min() on columns of table "auth.user_providers" */
export interface authUserProviders_min_order_by {
  accessToken?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  providerId?: InputMaybe<order_by>;
  providerUserId?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** on_conflict condition type for table "auth.user_providers" */
export interface authUserProviders_on_conflict {
  constraint: authUserProviders_constraint;
  update_columns?: Array<authUserProviders_update_column>;
  where?: InputMaybe<authUserProviders_bool_exp>;
}

/** Ordering options when selecting data from "auth.user_providers". */
export interface authUserProviders_order_by {
  accessToken?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  provider?: InputMaybe<authProviders_order_by>;
  providerId?: InputMaybe<order_by>;
  providerUserId?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  user?: InputMaybe<users_order_by>;
  userId?: InputMaybe<order_by>;
}

/** primary key columns input for table: auth.user_providers */
export interface authUserProviders_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "auth.user_providers" */
export enum authUserProviders_select_column {
  /** column name */
  accessToken = "accessToken",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  id = "id",
  /** column name */
  providerId = "providerId",
  /** column name */
  providerUserId = "providerUserId",
  /** column name */
  refreshToken = "refreshToken",
  /** column name */
  updatedAt = "updatedAt",
  /** column name */
  userId = "userId",
}

/** input type for updating data in table "auth.user_providers" */
export interface authUserProviders_set_input {
  accessToken?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  providerId?: InputMaybe<Scalars["String"]>;
  providerUserId?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** Streaming cursor of the table "authUserProviders" */
export interface authUserProviders_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: authUserProviders_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface authUserProviders_stream_cursor_value_input {
  accessToken?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  providerId?: InputMaybe<Scalars["String"]>;
  providerUserId?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** update columns of table "auth.user_providers" */
export enum authUserProviders_update_column {
  /** column name */
  accessToken = "accessToken",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  id = "id",
  /** column name */
  providerId = "providerId",
  /** column name */
  providerUserId = "providerUserId",
  /** column name */
  refreshToken = "refreshToken",
  /** column name */
  updatedAt = "updatedAt",
  /** column name */
  userId = "userId",
}

export interface authUserProviders_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<authUserProviders_set_input>;
  where: authUserProviders_bool_exp;
}

export interface authUserRoles_aggregate_bool_exp {
  count?: InputMaybe<authUserRoles_aggregate_bool_exp_count>;
}

export interface authUserRoles_aggregate_bool_exp_count {
  arguments?: InputMaybe<Array<authUserRoles_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<authUserRoles_bool_exp>;
  predicate: Int_comparison_exp;
}

/** order by aggregate values of table "auth.user_roles" */
export interface authUserRoles_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<authUserRoles_max_order_by>;
  min?: InputMaybe<authUserRoles_min_order_by>;
}

/** input type for inserting array relation for remote table "auth.user_roles" */
export interface authUserRoles_arr_rel_insert_input {
  data: Array<authUserRoles_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<authUserRoles_on_conflict>;
}

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export interface authUserRoles_bool_exp {
  _and?: InputMaybe<Array<authUserRoles_bool_exp>>;
  _not?: InputMaybe<authUserRoles_bool_exp>;
  _or?: InputMaybe<Array<authUserRoles_bool_exp>>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  role?: InputMaybe<String_comparison_exp>;
  roleByRole?: InputMaybe<authRoles_bool_exp>;
  user?: InputMaybe<users_bool_exp>;
  userId?: InputMaybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "auth.user_roles" */
export enum authUserRoles_constraint {
  /** unique or primary key constraint on columns "id" */
  user_roles_pkey = "user_roles_pkey",
  /** unique or primary key constraint on columns "user_id", "role" */
  user_roles_user_id_role_key = "user_roles_user_id_role_key",
}

/** input type for inserting data into table "auth.user_roles" */
export interface authUserRoles_insert_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  role?: InputMaybe<Scalars["String"]>;
  roleByRole?: InputMaybe<authRoles_obj_rel_insert_input>;
  user?: InputMaybe<users_obj_rel_insert_input>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** order by max() on columns of table "auth.user_roles" */
export interface authUserRoles_max_order_by {
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  role?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** order by min() on columns of table "auth.user_roles" */
export interface authUserRoles_min_order_by {
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  role?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** on_conflict condition type for table "auth.user_roles" */
export interface authUserRoles_on_conflict {
  constraint: authUserRoles_constraint;
  update_columns?: Array<authUserRoles_update_column>;
  where?: InputMaybe<authUserRoles_bool_exp>;
}

/** Ordering options when selecting data from "auth.user_roles". */
export interface authUserRoles_order_by {
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  role?: InputMaybe<order_by>;
  roleByRole?: InputMaybe<authRoles_order_by>;
  user?: InputMaybe<users_order_by>;
  userId?: InputMaybe<order_by>;
}

/** primary key columns input for table: auth.user_roles */
export interface authUserRoles_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "auth.user_roles" */
export enum authUserRoles_select_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  id = "id",
  /** column name */
  role = "role",
  /** column name */
  userId = "userId",
}

/** input type for updating data in table "auth.user_roles" */
export interface authUserRoles_set_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  role?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** Streaming cursor of the table "authUserRoles" */
export interface authUserRoles_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: authUserRoles_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface authUserRoles_stream_cursor_value_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  role?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** update columns of table "auth.user_roles" */
export enum authUserRoles_update_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  id = "id",
  /** column name */
  role = "role",
  /** column name */
  userId = "userId",
}

export interface authUserRoles_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<authUserRoles_set_input>;
  where: authUserRoles_bool_exp;
}

export interface authUserSecurityKeys_aggregate_bool_exp {
  count?: InputMaybe<authUserSecurityKeys_aggregate_bool_exp_count>;
}

export interface authUserSecurityKeys_aggregate_bool_exp_count {
  arguments?: InputMaybe<Array<authUserSecurityKeys_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<authUserSecurityKeys_bool_exp>;
  predicate: Int_comparison_exp;
}

/** order by aggregate values of table "auth.user_security_keys" */
export interface authUserSecurityKeys_aggregate_order_by {
  avg?: InputMaybe<authUserSecurityKeys_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<authUserSecurityKeys_max_order_by>;
  min?: InputMaybe<authUserSecurityKeys_min_order_by>;
  stddev?: InputMaybe<authUserSecurityKeys_stddev_order_by>;
  stddev_pop?: InputMaybe<authUserSecurityKeys_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<authUserSecurityKeys_stddev_samp_order_by>;
  sum?: InputMaybe<authUserSecurityKeys_sum_order_by>;
  var_pop?: InputMaybe<authUserSecurityKeys_var_pop_order_by>;
  var_samp?: InputMaybe<authUserSecurityKeys_var_samp_order_by>;
  variance?: InputMaybe<authUserSecurityKeys_variance_order_by>;
}

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export interface authUserSecurityKeys_arr_rel_insert_input {
  data: Array<authUserSecurityKeys_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<authUserSecurityKeys_on_conflict>;
}

/** order by avg() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_avg_order_by {
  counter?: InputMaybe<order_by>;
}

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export interface authUserSecurityKeys_bool_exp {
  _and?: InputMaybe<Array<authUserSecurityKeys_bool_exp>>;
  _not?: InputMaybe<authUserSecurityKeys_bool_exp>;
  _or?: InputMaybe<Array<authUserSecurityKeys_bool_exp>>;
  counter?: InputMaybe<bigint_comparison_exp>;
  credentialId?: InputMaybe<String_comparison_exp>;
  credentialPublicKey?: InputMaybe<bytea_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  nickname?: InputMaybe<String_comparison_exp>;
  transports?: InputMaybe<String_comparison_exp>;
  user?: InputMaybe<users_bool_exp>;
  userId?: InputMaybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum authUserSecurityKeys_constraint {
  /** unique or primary key constraint on columns "credential_id" */
  user_security_key_credential_id_key = "user_security_key_credential_id_key",
  /** unique or primary key constraint on columns "id" */
  user_security_keys_pkey = "user_security_keys_pkey",
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export interface authUserSecurityKeys_inc_input {
  counter?: InputMaybe<Scalars["bigint"]>;
}

/** input type for inserting data into table "auth.user_security_keys" */
export interface authUserSecurityKeys_insert_input {
  counter?: InputMaybe<Scalars["bigint"]>;
  credentialId?: InputMaybe<Scalars["String"]>;
  credentialPublicKey?: InputMaybe<Scalars["bytea"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  transports?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<users_obj_rel_insert_input>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** order by max() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_max_order_by {
  counter?: InputMaybe<order_by>;
  credentialId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  nickname?: InputMaybe<order_by>;
  transports?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** order by min() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_min_order_by {
  counter?: InputMaybe<order_by>;
  credentialId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  nickname?: InputMaybe<order_by>;
  transports?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** on_conflict condition type for table "auth.user_security_keys" */
export interface authUserSecurityKeys_on_conflict {
  constraint: authUserSecurityKeys_constraint;
  update_columns?: Array<authUserSecurityKeys_update_column>;
  where?: InputMaybe<authUserSecurityKeys_bool_exp>;
}

/** Ordering options when selecting data from "auth.user_security_keys". */
export interface authUserSecurityKeys_order_by {
  counter?: InputMaybe<order_by>;
  credentialId?: InputMaybe<order_by>;
  credentialPublicKey?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  nickname?: InputMaybe<order_by>;
  transports?: InputMaybe<order_by>;
  user?: InputMaybe<users_order_by>;
  userId?: InputMaybe<order_by>;
}

/** primary key columns input for table: auth.user_security_keys */
export interface authUserSecurityKeys_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "auth.user_security_keys" */
export enum authUserSecurityKeys_select_column {
  /** column name */
  counter = "counter",
  /** column name */
  credentialId = "credentialId",
  /** column name */
  credentialPublicKey = "credentialPublicKey",
  /** column name */
  id = "id",
  /** column name */
  nickname = "nickname",
  /** column name */
  transports = "transports",
  /** column name */
  userId = "userId",
}

/** input type for updating data in table "auth.user_security_keys" */
export interface authUserSecurityKeys_set_input {
  counter?: InputMaybe<Scalars["bigint"]>;
  credentialId?: InputMaybe<Scalars["String"]>;
  credentialPublicKey?: InputMaybe<Scalars["bytea"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  transports?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** order by stddev() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_stddev_order_by {
  counter?: InputMaybe<order_by>;
}

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_stddev_pop_order_by {
  counter?: InputMaybe<order_by>;
}

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_stddev_samp_order_by {
  counter?: InputMaybe<order_by>;
}

/** Streaming cursor of the table "authUserSecurityKeys" */
export interface authUserSecurityKeys_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: authUserSecurityKeys_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface authUserSecurityKeys_stream_cursor_value_input {
  counter?: InputMaybe<Scalars["bigint"]>;
  credentialId?: InputMaybe<Scalars["String"]>;
  credentialPublicKey?: InputMaybe<Scalars["bytea"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  transports?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** order by sum() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_sum_order_by {
  counter?: InputMaybe<order_by>;
}

/** update columns of table "auth.user_security_keys" */
export enum authUserSecurityKeys_update_column {
  /** column name */
  counter = "counter",
  /** column name */
  credentialId = "credentialId",
  /** column name */
  credentialPublicKey = "credentialPublicKey",
  /** column name */
  id = "id",
  /** column name */
  nickname = "nickname",
  /** column name */
  transports = "transports",
  /** column name */
  userId = "userId",
}

export interface authUserSecurityKeys_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<authUserSecurityKeys_inc_input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<authUserSecurityKeys_set_input>;
  where: authUserSecurityKeys_bool_exp;
}

/** order by var_pop() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_var_pop_order_by {
  counter?: InputMaybe<order_by>;
}

/** order by var_samp() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_var_samp_order_by {
  counter?: InputMaybe<order_by>;
}

/** order by variance() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_variance_order_by {
  counter?: InputMaybe<order_by>;
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {
  _eq?: InputMaybe<Scalars["bigint"]>;
  _gt?: InputMaybe<Scalars["bigint"]>;
  _gte?: InputMaybe<Scalars["bigint"]>;
  _in?: InputMaybe<Array<Scalars["bigint"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["bigint"]>;
  _lte?: InputMaybe<Scalars["bigint"]>;
  _neq?: InputMaybe<Scalars["bigint"]>;
  _nin?: InputMaybe<Array<Scalars["bigint"]>>;
}

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export interface buckets_bool_exp {
  _and?: InputMaybe<Array<buckets_bool_exp>>;
  _not?: InputMaybe<buckets_bool_exp>;
  _or?: InputMaybe<Array<buckets_bool_exp>>;
  cacheControl?: InputMaybe<String_comparison_exp>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  downloadExpiration?: InputMaybe<Int_comparison_exp>;
  files?: InputMaybe<files_bool_exp>;
  files_aggregate?: InputMaybe<files_aggregate_bool_exp>;
  id?: InputMaybe<String_comparison_exp>;
  maxUploadFileSize?: InputMaybe<Int_comparison_exp>;
  minUploadFileSize?: InputMaybe<Int_comparison_exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
}

/** unique or primary key constraints on table "storage.buckets" */
export enum buckets_constraint {
  /** unique or primary key constraint on columns "id" */
  buckets_pkey = "buckets_pkey",
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export interface buckets_inc_input {
  downloadExpiration?: InputMaybe<Scalars["Int"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]>;
}

/** input type for inserting data into table "storage.buckets" */
export interface buckets_insert_input {
  cacheControl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  downloadExpiration?: InputMaybe<Scalars["Int"]>;
  files?: InputMaybe<files_arr_rel_insert_input>;
  id?: InputMaybe<Scalars["String"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]>;
  presignedUrlsEnabled?: InputMaybe<Scalars["Boolean"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** input type for inserting object relation for remote table "storage.buckets" */
export interface buckets_obj_rel_insert_input {
  data: buckets_insert_input;
  /** upsert condition */
  on_conflict?: InputMaybe<buckets_on_conflict>;
}

/** on_conflict condition type for table "storage.buckets" */
export interface buckets_on_conflict {
  constraint: buckets_constraint;
  update_columns?: Array<buckets_update_column>;
  where?: InputMaybe<buckets_bool_exp>;
}

/** Ordering options when selecting data from "storage.buckets". */
export interface buckets_order_by {
  cacheControl?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  downloadExpiration?: InputMaybe<order_by>;
  files_aggregate?: InputMaybe<files_aggregate_order_by>;
  id?: InputMaybe<order_by>;
  maxUploadFileSize?: InputMaybe<order_by>;
  minUploadFileSize?: InputMaybe<order_by>;
  presignedUrlsEnabled?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** primary key columns input for table: storage.buckets */
export interface buckets_pk_columns_input {
  id: Scalars["String"];
}

/** select columns of table "storage.buckets" */
export enum buckets_select_column {
  /** column name */
  cacheControl = "cacheControl",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  downloadExpiration = "downloadExpiration",
  /** column name */
  id = "id",
  /** column name */
  maxUploadFileSize = "maxUploadFileSize",
  /** column name */
  minUploadFileSize = "minUploadFileSize",
  /** column name */
  presignedUrlsEnabled = "presignedUrlsEnabled",
  /** column name */
  updatedAt = "updatedAt",
}

/** input type for updating data in table "storage.buckets" */
export interface buckets_set_input {
  cacheControl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  downloadExpiration?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]>;
  presignedUrlsEnabled?: InputMaybe<Scalars["Boolean"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** Streaming cursor of the table "buckets" */
export interface buckets_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: buckets_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface buckets_stream_cursor_value_input {
  cacheControl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  downloadExpiration?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]>;
  presignedUrlsEnabled?: InputMaybe<Scalars["Boolean"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** update columns of table "storage.buckets" */
export enum buckets_update_column {
  /** column name */
  cacheControl = "cacheControl",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  downloadExpiration = "downloadExpiration",
  /** column name */
  id = "id",
  /** column name */
  maxUploadFileSize = "maxUploadFileSize",
  /** column name */
  minUploadFileSize = "minUploadFileSize",
  /** column name */
  presignedUrlsEnabled = "presignedUrlsEnabled",
  /** column name */
  updatedAt = "updatedAt",
}

export interface buckets_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<buckets_inc_input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<buckets_set_input>;
  where: buckets_bool_exp;
}

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export interface bytea_comparison_exp {
  _eq?: InputMaybe<Scalars["bytea"]>;
  _gt?: InputMaybe<Scalars["bytea"]>;
  _gte?: InputMaybe<Scalars["bytea"]>;
  _in?: InputMaybe<Array<Scalars["bytea"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["bytea"]>;
  _lte?: InputMaybe<Scalars["bytea"]>;
  _neq?: InputMaybe<Scalars["bytea"]>;
  _nin?: InputMaybe<Array<Scalars["bytea"]>>;
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export interface citext_comparison_exp {
  _eq?: InputMaybe<Scalars["citext"]>;
  _gt?: InputMaybe<Scalars["citext"]>;
  _gte?: InputMaybe<Scalars["citext"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["citext"]>;
  _in?: InputMaybe<Array<Scalars["citext"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["citext"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["citext"]>;
  _lt?: InputMaybe<Scalars["citext"]>;
  _lte?: InputMaybe<Scalars["citext"]>;
  _neq?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["citext"]>;
  _nin?: InputMaybe<Array<Scalars["citext"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["citext"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["citext"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["citext"]>;
}

/** Boolean expression to filter rows from the table "contacts". All fields are combined with a logical 'AND'. */
export interface contacts_bool_exp {
  _and?: InputMaybe<Array<contacts_bool_exp>>;
  _not?: InputMaybe<contacts_bool_exp>;
  _or?: InputMaybe<Array<contacts_bool_exp>>;
  apps?: InputMaybe<apps_bool_exp>;
  apps_aggregate?: InputMaybe<apps_aggregate_bool_exp>;
  firstName?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  lastName?: InputMaybe<String_comparison_exp>;
  todos?: InputMaybe<todos_bool_exp>;
  todos_aggregate?: InputMaybe<todos_aggregate_bool_exp>;
}

/** unique or primary key constraints on table "contacts" */
export enum contacts_constraint {
  /** unique or primary key constraint on columns "id" */
  contacts_pkey = "contacts_pkey",
}

/** input type for inserting data into table "contacts" */
export interface contacts_insert_input {
  apps?: InputMaybe<apps_arr_rel_insert_input>;
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  todos?: InputMaybe<todos_arr_rel_insert_input>;
}

/** input type for inserting object relation for remote table "contacts" */
export interface contacts_obj_rel_insert_input {
  data: contacts_insert_input;
  /** upsert condition */
  on_conflict?: InputMaybe<contacts_on_conflict>;
}

/** on_conflict condition type for table "contacts" */
export interface contacts_on_conflict {
  constraint: contacts_constraint;
  update_columns?: Array<contacts_update_column>;
  where?: InputMaybe<contacts_bool_exp>;
}

/** Ordering options when selecting data from "contacts". */
export interface contacts_order_by {
  apps_aggregate?: InputMaybe<apps_aggregate_order_by>;
  firstName?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  lastName?: InputMaybe<order_by>;
  todos_aggregate?: InputMaybe<todos_aggregate_order_by>;
}

/** primary key columns input for table: contacts */
export interface contacts_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "contacts" */
export enum contacts_select_column {
  /** column name */
  firstName = "firstName",
  /** column name */
  id = "id",
  /** column name */
  lastName = "lastName",
}

/** input type for updating data in table "contacts" */
export interface contacts_set_input {
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  lastName?: InputMaybe<Scalars["String"]>;
}

/** Streaming cursor of the table "contacts" */
export interface contacts_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: contacts_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface contacts_stream_cursor_value_input {
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  lastName?: InputMaybe<Scalars["String"]>;
}

/** update columns of table "contacts" */
export enum contacts_update_column {
  /** column name */
  firstName = "firstName",
  /** column name */
  id = "id",
  /** column name */
  lastName = "lastName",
}

export interface contacts_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<contacts_set_input>;
  where: contacts_bool_exp;
}

/** ordering argument of a cursor */
export enum cursor_ordering {
  /** ascending ordering of the cursor */
  ASC = "ASC",
  /** descending ordering of the cursor */
  DESC = "DESC",
}

export interface files_aggregate_bool_exp {
  bool_and?: InputMaybe<files_aggregate_bool_exp_bool_and>;
  bool_or?: InputMaybe<files_aggregate_bool_exp_bool_or>;
  count?: InputMaybe<files_aggregate_bool_exp_count>;
}

export interface files_aggregate_bool_exp_bool_and {
  arguments: files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<files_bool_exp>;
  predicate: Boolean_comparison_exp;
}

export interface files_aggregate_bool_exp_bool_or {
  arguments: files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<files_bool_exp>;
  predicate: Boolean_comparison_exp;
}

export interface files_aggregate_bool_exp_count {
  arguments?: InputMaybe<Array<files_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<files_bool_exp>;
  predicate: Int_comparison_exp;
}

/** order by aggregate values of table "storage.files" */
export interface files_aggregate_order_by {
  avg?: InputMaybe<files_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<files_max_order_by>;
  min?: InputMaybe<files_min_order_by>;
  stddev?: InputMaybe<files_stddev_order_by>;
  stddev_pop?: InputMaybe<files_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<files_stddev_samp_order_by>;
  sum?: InputMaybe<files_sum_order_by>;
  var_pop?: InputMaybe<files_var_pop_order_by>;
  var_samp?: InputMaybe<files_var_samp_order_by>;
  variance?: InputMaybe<files_variance_order_by>;
}

/** input type for inserting array relation for remote table "storage.files" */
export interface files_arr_rel_insert_input {
  data: Array<files_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<files_on_conflict>;
}

/** order by avg() on columns of table "storage.files" */
export interface files_avg_order_by {
  size?: InputMaybe<order_by>;
}

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export interface files_bool_exp {
  _and?: InputMaybe<Array<files_bool_exp>>;
  _not?: InputMaybe<files_bool_exp>;
  _or?: InputMaybe<Array<files_bool_exp>>;
  bucket?: InputMaybe<buckets_bool_exp>;
  bucketId?: InputMaybe<String_comparison_exp>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  etag?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  isUploaded?: InputMaybe<Boolean_comparison_exp>;
  mimeType?: InputMaybe<String_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  size?: InputMaybe<Int_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
  uploadedByUserId?: InputMaybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "storage.files" */
export enum files_constraint {
  /** unique or primary key constraint on columns "id" */
  files_pkey = "files_pkey",
}

/** input type for incrementing numeric columns in table "storage.files" */
export interface files_inc_input {
  size?: InputMaybe<Scalars["Int"]>;
}

/** input type for inserting data into table "storage.files" */
export interface files_insert_input {
  bucket?: InputMaybe<buckets_obj_rel_insert_input>;
  bucketId?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  etag?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isUploaded?: InputMaybe<Scalars["Boolean"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  uploadedByUserId?: InputMaybe<Scalars["uuid"]>;
}

/** order by max() on columns of table "storage.files" */
export interface files_max_order_by {
  bucketId?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  etag?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mimeType?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  size?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  uploadedByUserId?: InputMaybe<order_by>;
}

/** order by min() on columns of table "storage.files" */
export interface files_min_order_by {
  bucketId?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  etag?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mimeType?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  size?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  uploadedByUserId?: InputMaybe<order_by>;
}

/** on_conflict condition type for table "storage.files" */
export interface files_on_conflict {
  constraint: files_constraint;
  update_columns?: Array<files_update_column>;
  where?: InputMaybe<files_bool_exp>;
}

/** Ordering options when selecting data from "storage.files". */
export interface files_order_by {
  bucket?: InputMaybe<buckets_order_by>;
  bucketId?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  etag?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isUploaded?: InputMaybe<order_by>;
  mimeType?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  size?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  uploadedByUserId?: InputMaybe<order_by>;
}

/** primary key columns input for table: storage.files */
export interface files_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "storage.files" */
export enum files_select_column {
  /** column name */
  bucketId = "bucketId",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  etag = "etag",
  /** column name */
  id = "id",
  /** column name */
  isUploaded = "isUploaded",
  /** column name */
  mimeType = "mimeType",
  /** column name */
  name = "name",
  /** column name */
  size = "size",
  /** column name */
  updatedAt = "updatedAt",
  /** column name */
  uploadedByUserId = "uploadedByUserId",
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns {
  /** column name */
  isUploaded = "isUploaded",
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns {
  /** column name */
  isUploaded = "isUploaded",
}

/** input type for updating data in table "storage.files" */
export interface files_set_input {
  bucketId?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  etag?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isUploaded?: InputMaybe<Scalars["Boolean"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  uploadedByUserId?: InputMaybe<Scalars["uuid"]>;
}

/** order by stddev() on columns of table "storage.files" */
export interface files_stddev_order_by {
  size?: InputMaybe<order_by>;
}

/** order by stddev_pop() on columns of table "storage.files" */
export interface files_stddev_pop_order_by {
  size?: InputMaybe<order_by>;
}

/** order by stddev_samp() on columns of table "storage.files" */
export interface files_stddev_samp_order_by {
  size?: InputMaybe<order_by>;
}

/** Streaming cursor of the table "files" */
export interface files_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: files_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface files_stream_cursor_value_input {
  bucketId?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  etag?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isUploaded?: InputMaybe<Scalars["Boolean"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  uploadedByUserId?: InputMaybe<Scalars["uuid"]>;
}

/** order by sum() on columns of table "storage.files" */
export interface files_sum_order_by {
  size?: InputMaybe<order_by>;
}

/** update columns of table "storage.files" */
export enum files_update_column {
  /** column name */
  bucketId = "bucketId",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  etag = "etag",
  /** column name */
  id = "id",
  /** column name */
  isUploaded = "isUploaded",
  /** column name */
  mimeType = "mimeType",
  /** column name */
  name = "name",
  /** column name */
  size = "size",
  /** column name */
  updatedAt = "updatedAt",
  /** column name */
  uploadedByUserId = "uploadedByUserId",
}

export interface files_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<files_inc_input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<files_set_input>;
  where: files_bool_exp;
}

/** order by var_pop() on columns of table "storage.files" */
export interface files_var_pop_order_by {
  size?: InputMaybe<order_by>;
}

/** order by var_samp() on columns of table "storage.files" */
export interface files_var_samp_order_by {
  size?: InputMaybe<order_by>;
}

/** order by variance() on columns of table "storage.files" */
export interface files_variance_order_by {
  size?: InputMaybe<order_by>;
}

export interface jsonb_cast_exp {
  String?: InputMaybe<String_comparison_exp>;
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {
  _cast?: InputMaybe<jsonb_cast_exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]>;
  _eq?: InputMaybe<Scalars["jsonb"]>;
  _gt?: InputMaybe<Scalars["jsonb"]>;
  _gte?: InputMaybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["jsonb"]>;
  _lte?: InputMaybe<Scalars["jsonb"]>;
  _neq?: InputMaybe<Scalars["jsonb"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]>>;
}

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = "asc",
  /** in ascending order, nulls first */
  asc_nulls_first = "asc_nulls_first",
  /** in ascending order, nulls last */
  asc_nulls_last = "asc_nulls_last",
  /** in descending order, nulls first */
  desc = "desc",
  /** in descending order, nulls first */
  desc_nulls_first = "desc_nulls_first",
  /** in descending order, nulls last */
  desc_nulls_last = "desc_nulls_last",
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
}

export interface todos_aggregate_bool_exp {
  bool_and?: InputMaybe<todos_aggregate_bool_exp_bool_and>;
  bool_or?: InputMaybe<todos_aggregate_bool_exp_bool_or>;
  count?: InputMaybe<todos_aggregate_bool_exp_count>;
}

export interface todos_aggregate_bool_exp_bool_and {
  arguments: todos_select_column_todos_aggregate_bool_exp_bool_and_arguments_columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<todos_bool_exp>;
  predicate: Boolean_comparison_exp;
}

export interface todos_aggregate_bool_exp_bool_or {
  arguments: todos_select_column_todos_aggregate_bool_exp_bool_or_arguments_columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<todos_bool_exp>;
  predicate: Boolean_comparison_exp;
}

export interface todos_aggregate_bool_exp_count {
  arguments?: InputMaybe<Array<todos_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<todos_bool_exp>;
  predicate: Int_comparison_exp;
}

/** order by aggregate values of table "todos" */
export interface todos_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<todos_max_order_by>;
  min?: InputMaybe<todos_min_order_by>;
}

/** input type for inserting array relation for remote table "todos" */
export interface todos_arr_rel_insert_input {
  data: Array<todos_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<todos_on_conflict>;
}

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export interface todos_bool_exp {
  _and?: InputMaybe<Array<todos_bool_exp>>;
  _not?: InputMaybe<todos_bool_exp>;
  _or?: InputMaybe<Array<todos_bool_exp>>;
  contact?: InputMaybe<contacts_bool_exp>;
  contact_id?: InputMaybe<uuid_comparison_exp>;
  content?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  is_complete?: InputMaybe<Boolean_comparison_exp>;
}

/** unique or primary key constraints on table "todos" */
export enum todos_constraint {
  /** unique or primary key constraint on columns "id" */
  todos_pkey = "todos_pkey",
}

/** input type for inserting data into table "todos" */
export interface todos_insert_input {
  contact?: InputMaybe<contacts_obj_rel_insert_input>;
  contact_id?: InputMaybe<Scalars["uuid"]>;
  content?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  is_complete?: InputMaybe<Scalars["Boolean"]>;
}

/** order by max() on columns of table "todos" */
export interface todos_max_order_by {
  contact_id?: InputMaybe<order_by>;
  content?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
}

/** order by min() on columns of table "todos" */
export interface todos_min_order_by {
  contact_id?: InputMaybe<order_by>;
  content?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
}

/** on_conflict condition type for table "todos" */
export interface todos_on_conflict {
  constraint: todos_constraint;
  update_columns?: Array<todos_update_column>;
  where?: InputMaybe<todos_bool_exp>;
}

/** Ordering options when selecting data from "todos". */
export interface todos_order_by {
  contact?: InputMaybe<contacts_order_by>;
  contact_id?: InputMaybe<order_by>;
  content?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  is_complete?: InputMaybe<order_by>;
}

/** primary key columns input for table: todos */
export interface todos_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "todos" */
export enum todos_select_column {
  /** column name */
  contact_id = "contact_id",
  /** column name */
  content = "content",
  /** column name */
  id = "id",
  /** column name */
  is_complete = "is_complete",
}

/** select "todos_aggregate_bool_exp_bool_and_arguments_columns" columns of table "todos" */
export enum todos_select_column_todos_aggregate_bool_exp_bool_and_arguments_columns {
  /** column name */
  is_complete = "is_complete",
}

/** select "todos_aggregate_bool_exp_bool_or_arguments_columns" columns of table "todos" */
export enum todos_select_column_todos_aggregate_bool_exp_bool_or_arguments_columns {
  /** column name */
  is_complete = "is_complete",
}

/** input type for updating data in table "todos" */
export interface todos_set_input {
  contact_id?: InputMaybe<Scalars["uuid"]>;
  content?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  is_complete?: InputMaybe<Scalars["Boolean"]>;
}

/** Streaming cursor of the table "todos" */
export interface todos_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: todos_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface todos_stream_cursor_value_input {
  contact_id?: InputMaybe<Scalars["uuid"]>;
  content?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  is_complete?: InputMaybe<Scalars["Boolean"]>;
}

/** update columns of table "todos" */
export enum todos_update_column {
  /** column name */
  contact_id = "contact_id",
  /** column name */
  content = "content",
  /** column name */
  id = "id",
  /** column name */
  is_complete = "is_complete",
}

export interface todos_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<todos_set_input>;
  where: todos_bool_exp;
}

export interface users_aggregate_bool_exp {
  bool_and?: InputMaybe<users_aggregate_bool_exp_bool_and>;
  bool_or?: InputMaybe<users_aggregate_bool_exp_bool_or>;
  count?: InputMaybe<users_aggregate_bool_exp_count>;
}

export interface users_aggregate_bool_exp_bool_and {
  arguments: users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<users_bool_exp>;
  predicate: Boolean_comparison_exp;
}

export interface users_aggregate_bool_exp_bool_or {
  arguments: users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<users_bool_exp>;
  predicate: Boolean_comparison_exp;
}

export interface users_aggregate_bool_exp_count {
  arguments?: InputMaybe<Array<users_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<users_bool_exp>;
  predicate: Int_comparison_exp;
}

/** order by aggregate values of table "auth.users" */
export interface users_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<users_max_order_by>;
  min?: InputMaybe<users_min_order_by>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface users_append_input {
  metadata?: InputMaybe<Scalars["jsonb"]>;
}

/** input type for inserting array relation for remote table "auth.users" */
export interface users_arr_rel_insert_input {
  data: Array<users_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<users_on_conflict>;
}

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {
  _and?: InputMaybe<Array<users_bool_exp>>;
  _not?: InputMaybe<users_bool_exp>;
  _or?: InputMaybe<Array<users_bool_exp>>;
  activeMfaType?: InputMaybe<String_comparison_exp>;
  avatarUrl?: InputMaybe<String_comparison_exp>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  currentChallenge?: InputMaybe<String_comparison_exp>;
  defaultRole?: InputMaybe<String_comparison_exp>;
  defaultRoleByRole?: InputMaybe<authRoles_bool_exp>;
  disabled?: InputMaybe<Boolean_comparison_exp>;
  displayName?: InputMaybe<String_comparison_exp>;
  email?: InputMaybe<citext_comparison_exp>;
  emailVerified?: InputMaybe<Boolean_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  isAnonymous?: InputMaybe<Boolean_comparison_exp>;
  lastSeen?: InputMaybe<timestamptz_comparison_exp>;
  locale?: InputMaybe<String_comparison_exp>;
  metadata?: InputMaybe<jsonb_comparison_exp>;
  newEmail?: InputMaybe<citext_comparison_exp>;
  otpHash?: InputMaybe<String_comparison_exp>;
  otpHashExpiresAt?: InputMaybe<timestamptz_comparison_exp>;
  otpMethodLastUsed?: InputMaybe<String_comparison_exp>;
  passwordHash?: InputMaybe<String_comparison_exp>;
  phoneNumber?: InputMaybe<String_comparison_exp>;
  phoneNumberVerified?: InputMaybe<Boolean_comparison_exp>;
  refreshTokens?: InputMaybe<authRefreshTokens_bool_exp>;
  refreshTokens_aggregate?: InputMaybe<authRefreshTokens_aggregate_bool_exp>;
  roles?: InputMaybe<authUserRoles_bool_exp>;
  roles_aggregate?: InputMaybe<authUserRoles_aggregate_bool_exp>;
  securityKeys?: InputMaybe<authUserSecurityKeys_bool_exp>;
  securityKeys_aggregate?: InputMaybe<authUserSecurityKeys_aggregate_bool_exp>;
  ticket?: InputMaybe<String_comparison_exp>;
  ticketExpiresAt?: InputMaybe<timestamptz_comparison_exp>;
  totpSecret?: InputMaybe<String_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
  userProviders?: InputMaybe<authUserProviders_bool_exp>;
  userProviders_aggregate?: InputMaybe<authUserProviders_aggregate_bool_exp>;
}

/** unique or primary key constraints on table "auth.users" */
export enum users_constraint {
  /** unique or primary key constraint on columns "email" */
  users_email_key = "users_email_key",
  /** unique or primary key constraint on columns "phone_number" */
  users_phone_number_key = "users_phone_number_key",
  /** unique or primary key constraint on columns "id" */
  users_pkey = "users_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface users_delete_at_path_input {
  metadata?: InputMaybe<Array<Scalars["String"]>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface users_delete_elem_input {
  metadata?: InputMaybe<Scalars["Int"]>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface users_delete_key_input {
  metadata?: InputMaybe<Scalars["String"]>;
}

/** input type for inserting data into table "auth.users" */
export interface users_insert_input {
  activeMfaType?: InputMaybe<Scalars["String"]>;
  avatarUrl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  currentChallenge?: InputMaybe<Scalars["String"]>;
  defaultRole?: InputMaybe<Scalars["String"]>;
  defaultRoleByRole?: InputMaybe<authRoles_obj_rel_insert_input>;
  disabled?: InputMaybe<Scalars["Boolean"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["citext"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isAnonymous?: InputMaybe<Scalars["Boolean"]>;
  lastSeen?: InputMaybe<Scalars["timestamptz"]>;
  locale?: InputMaybe<Scalars["String"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  newEmail?: InputMaybe<Scalars["citext"]>;
  otpHash?: InputMaybe<Scalars["String"]>;
  otpHashExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  otpMethodLastUsed?: InputMaybe<Scalars["String"]>;
  passwordHash?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  phoneNumberVerified?: InputMaybe<Scalars["Boolean"]>;
  refreshTokens?: InputMaybe<authRefreshTokens_arr_rel_insert_input>;
  roles?: InputMaybe<authUserRoles_arr_rel_insert_input>;
  securityKeys?: InputMaybe<authUserSecurityKeys_arr_rel_insert_input>;
  ticket?: InputMaybe<Scalars["String"]>;
  ticketExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  totpSecret?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  userProviders?: InputMaybe<authUserProviders_arr_rel_insert_input>;
}

/** order by max() on columns of table "auth.users" */
export interface users_max_order_by {
  activeMfaType?: InputMaybe<order_by>;
  avatarUrl?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  currentChallenge?: InputMaybe<order_by>;
  defaultRole?: InputMaybe<order_by>;
  displayName?: InputMaybe<order_by>;
  email?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  lastSeen?: InputMaybe<order_by>;
  locale?: InputMaybe<order_by>;
  newEmail?: InputMaybe<order_by>;
  otpHash?: InputMaybe<order_by>;
  otpHashExpiresAt?: InputMaybe<order_by>;
  otpMethodLastUsed?: InputMaybe<order_by>;
  passwordHash?: InputMaybe<order_by>;
  phoneNumber?: InputMaybe<order_by>;
  ticket?: InputMaybe<order_by>;
  ticketExpiresAt?: InputMaybe<order_by>;
  totpSecret?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** order by min() on columns of table "auth.users" */
export interface users_min_order_by {
  activeMfaType?: InputMaybe<order_by>;
  avatarUrl?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  currentChallenge?: InputMaybe<order_by>;
  defaultRole?: InputMaybe<order_by>;
  displayName?: InputMaybe<order_by>;
  email?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  lastSeen?: InputMaybe<order_by>;
  locale?: InputMaybe<order_by>;
  newEmail?: InputMaybe<order_by>;
  otpHash?: InputMaybe<order_by>;
  otpHashExpiresAt?: InputMaybe<order_by>;
  otpMethodLastUsed?: InputMaybe<order_by>;
  passwordHash?: InputMaybe<order_by>;
  phoneNumber?: InputMaybe<order_by>;
  ticket?: InputMaybe<order_by>;
  ticketExpiresAt?: InputMaybe<order_by>;
  totpSecret?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** input type for inserting object relation for remote table "auth.users" */
export interface users_obj_rel_insert_input {
  data: users_insert_input;
  /** upsert condition */
  on_conflict?: InputMaybe<users_on_conflict>;
}

/** on_conflict condition type for table "auth.users" */
export interface users_on_conflict {
  constraint: users_constraint;
  update_columns?: Array<users_update_column>;
  where?: InputMaybe<users_bool_exp>;
}

/** Ordering options when selecting data from "auth.users". */
export interface users_order_by {
  activeMfaType?: InputMaybe<order_by>;
  avatarUrl?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  currentChallenge?: InputMaybe<order_by>;
  defaultRole?: InputMaybe<order_by>;
  defaultRoleByRole?: InputMaybe<authRoles_order_by>;
  disabled?: InputMaybe<order_by>;
  displayName?: InputMaybe<order_by>;
  email?: InputMaybe<order_by>;
  emailVerified?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isAnonymous?: InputMaybe<order_by>;
  lastSeen?: InputMaybe<order_by>;
  locale?: InputMaybe<order_by>;
  metadata?: InputMaybe<order_by>;
  newEmail?: InputMaybe<order_by>;
  otpHash?: InputMaybe<order_by>;
  otpHashExpiresAt?: InputMaybe<order_by>;
  otpMethodLastUsed?: InputMaybe<order_by>;
  passwordHash?: InputMaybe<order_by>;
  phoneNumber?: InputMaybe<order_by>;
  phoneNumberVerified?: InputMaybe<order_by>;
  refreshTokens_aggregate?: InputMaybe<authRefreshTokens_aggregate_order_by>;
  roles_aggregate?: InputMaybe<authUserRoles_aggregate_order_by>;
  securityKeys_aggregate?: InputMaybe<authUserSecurityKeys_aggregate_order_by>;
  ticket?: InputMaybe<order_by>;
  ticketExpiresAt?: InputMaybe<order_by>;
  totpSecret?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  userProviders_aggregate?: InputMaybe<authUserProviders_aggregate_order_by>;
}

/** primary key columns input for table: auth.users */
export interface users_pk_columns_input {
  id: Scalars["uuid"];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface users_prepend_input {
  metadata?: InputMaybe<Scalars["jsonb"]>;
}

/** select columns of table "auth.users" */
export enum users_select_column {
  /** column name */
  activeMfaType = "activeMfaType",
  /** column name */
  avatarUrl = "avatarUrl",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  currentChallenge = "currentChallenge",
  /** column name */
  defaultRole = "defaultRole",
  /** column name */
  disabled = "disabled",
  /** column name */
  displayName = "displayName",
  /** column name */
  email = "email",
  /** column name */
  emailVerified = "emailVerified",
  /** column name */
  id = "id",
  /** column name */
  isAnonymous = "isAnonymous",
  /** column name */
  lastSeen = "lastSeen",
  /** column name */
  locale = "locale",
  /** column name */
  metadata = "metadata",
  /** column name */
  newEmail = "newEmail",
  /** column name */
  otpHash = "otpHash",
  /** column name */
  otpHashExpiresAt = "otpHashExpiresAt",
  /** column name */
  otpMethodLastUsed = "otpMethodLastUsed",
  /** column name */
  passwordHash = "passwordHash",
  /** column name */
  phoneNumber = "phoneNumber",
  /** column name */
  phoneNumberVerified = "phoneNumberVerified",
  /** column name */
  ticket = "ticket",
  /** column name */
  ticketExpiresAt = "ticketExpiresAt",
  /** column name */
  totpSecret = "totpSecret",
  /** column name */
  updatedAt = "updatedAt",
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns {
  /** column name */
  disabled = "disabled",
  /** column name */
  emailVerified = "emailVerified",
  /** column name */
  isAnonymous = "isAnonymous",
  /** column name */
  phoneNumberVerified = "phoneNumberVerified",
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns {
  /** column name */
  disabled = "disabled",
  /** column name */
  emailVerified = "emailVerified",
  /** column name */
  isAnonymous = "isAnonymous",
  /** column name */
  phoneNumberVerified = "phoneNumberVerified",
}

/** input type for updating data in table "auth.users" */
export interface users_set_input {
  activeMfaType?: InputMaybe<Scalars["String"]>;
  avatarUrl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  currentChallenge?: InputMaybe<Scalars["String"]>;
  defaultRole?: InputMaybe<Scalars["String"]>;
  disabled?: InputMaybe<Scalars["Boolean"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["citext"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isAnonymous?: InputMaybe<Scalars["Boolean"]>;
  lastSeen?: InputMaybe<Scalars["timestamptz"]>;
  locale?: InputMaybe<Scalars["String"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  newEmail?: InputMaybe<Scalars["citext"]>;
  otpHash?: InputMaybe<Scalars["String"]>;
  otpHashExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  otpMethodLastUsed?: InputMaybe<Scalars["String"]>;
  passwordHash?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  phoneNumberVerified?: InputMaybe<Scalars["Boolean"]>;
  ticket?: InputMaybe<Scalars["String"]>;
  ticketExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  totpSecret?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** Streaming cursor of the table "users" */
export interface users_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: users_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface users_stream_cursor_value_input {
  activeMfaType?: InputMaybe<Scalars["String"]>;
  avatarUrl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  currentChallenge?: InputMaybe<Scalars["String"]>;
  defaultRole?: InputMaybe<Scalars["String"]>;
  disabled?: InputMaybe<Scalars["Boolean"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["citext"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isAnonymous?: InputMaybe<Scalars["Boolean"]>;
  lastSeen?: InputMaybe<Scalars["timestamptz"]>;
  locale?: InputMaybe<Scalars["String"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  newEmail?: InputMaybe<Scalars["citext"]>;
  otpHash?: InputMaybe<Scalars["String"]>;
  otpHashExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  otpMethodLastUsed?: InputMaybe<Scalars["String"]>;
  passwordHash?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  phoneNumberVerified?: InputMaybe<Scalars["Boolean"]>;
  ticket?: InputMaybe<Scalars["String"]>;
  ticketExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  totpSecret?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** update columns of table "auth.users" */
export enum users_update_column {
  /** column name */
  activeMfaType = "activeMfaType",
  /** column name */
  avatarUrl = "avatarUrl",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  currentChallenge = "currentChallenge",
  /** column name */
  defaultRole = "defaultRole",
  /** column name */
  disabled = "disabled",
  /** column name */
  displayName = "displayName",
  /** column name */
  email = "email",
  /** column name */
  emailVerified = "emailVerified",
  /** column name */
  id = "id",
  /** column name */
  isAnonymous = "isAnonymous",
  /** column name */
  lastSeen = "lastSeen",
  /** column name */
  locale = "locale",
  /** column name */
  metadata = "metadata",
  /** column name */
  newEmail = "newEmail",
  /** column name */
  otpHash = "otpHash",
  /** column name */
  otpHashExpiresAt = "otpHashExpiresAt",
  /** column name */
  otpMethodLastUsed = "otpMethodLastUsed",
  /** column name */
  passwordHash = "passwordHash",
  /** column name */
  phoneNumber = "phoneNumber",
  /** column name */
  phoneNumberVerified = "phoneNumberVerified",
  /** column name */
  ticket = "ticket",
  /** column name */
  ticketExpiresAt = "ticketExpiresAt",
  /** column name */
  totpSecret = "totpSecret",
  /** column name */
  updatedAt = "updatedAt",
}

export interface users_updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<users_append_input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<users_delete_at_path_input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<users_delete_elem_input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<users_delete_key_input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<users_prepend_input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<users_set_input>;
  where: users_bool_exp;
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Float: true,
  Int: true,
  String: true,
  apps_constraint: true,
  apps_select_column: true,
  apps_update_column: true,
  authProviderRequests_constraint: true,
  authProviderRequests_select_column: true,
  authProviderRequests_update_column: true,
  authProviders_constraint: true,
  authProviders_select_column: true,
  authProviders_update_column: true,
  authRefreshTokens_constraint: true,
  authRefreshTokens_select_column: true,
  authRefreshTokens_update_column: true,
  authRoles_constraint: true,
  authRoles_select_column: true,
  authRoles_update_column: true,
  authUserProviders_constraint: true,
  authUserProviders_select_column: true,
  authUserProviders_update_column: true,
  authUserRoles_constraint: true,
  authUserRoles_select_column: true,
  authUserRoles_update_column: true,
  authUserSecurityKeys_constraint: true,
  authUserSecurityKeys_select_column: true,
  authUserSecurityKeys_update_column: true,
  bigint: true,
  buckets_constraint: true,
  buckets_select_column: true,
  buckets_update_column: true,
  bytea: true,
  citext: true,
  contacts_constraint: true,
  contacts_select_column: true,
  contacts_update_column: true,
  cursor_ordering: true,
  files_constraint: true,
  files_select_column: true,
  files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns: true,
  files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns: true,
  files_update_column: true,
  jsonb: true,
  order_by: true,
  timestamptz: true,
  todos_constraint: true,
  todos_select_column: true,
  todos_select_column_todos_aggregate_bool_exp_bool_and_arguments_columns: true,
  todos_select_column_todos_aggregate_bool_exp_bool_or_arguments_columns: true,
  todos_update_column: true,
  users_constraint: true,
  users_select_column: true,
  users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns: true,
  users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns: true,
  users_update_column: true,
  uuid: true,
};
export const generatedSchema = {
  Boolean_comparison_exp: {
    _eq: { __type: "Boolean" },
    _gt: { __type: "Boolean" },
    _gte: { __type: "Boolean" },
    _in: { __type: "[Boolean!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "Boolean" },
    _lte: { __type: "Boolean" },
    _neq: { __type: "Boolean" },
    _nin: { __type: "[Boolean!]" },
  },
  Int_comparison_exp: {
    _eq: { __type: "Int" },
    _gt: { __type: "Int" },
    _gte: { __type: "Int" },
    _in: { __type: "[Int!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "Int" },
    _lte: { __type: "Int" },
    _neq: { __type: "Int" },
    _nin: { __type: "[Int!]" },
  },
  String_comparison_exp: {
    _eq: { __type: "String" },
    _gt: { __type: "String" },
    _gte: { __type: "String" },
    _ilike: { __type: "String" },
    _in: { __type: "[String!]" },
    _iregex: { __type: "String" },
    _is_null: { __type: "Boolean" },
    _like: { __type: "String" },
    _lt: { __type: "String" },
    _lte: { __type: "String" },
    _neq: { __type: "String" },
    _nilike: { __type: "String" },
    _nin: { __type: "[String!]" },
    _niregex: { __type: "String" },
    _nlike: { __type: "String" },
    _nregex: { __type: "String" },
    _nsimilar: { __type: "String" },
    _regex: { __type: "String" },
    _similar: { __type: "String" },
  },
  apps: {
    __typename: { __type: "String!" },
    contact: { __type: "contacts!" },
    contact_id: { __type: "uuid!" },
    id: { __type: "uuid!" },
    name: { __type: "String!" },
  },
  apps_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "apps_aggregate_fields" },
    nodes: { __type: "[apps!]!" },
  },
  apps_aggregate_bool_exp: {
    count: { __type: "apps_aggregate_bool_exp_count" },
  },
  apps_aggregate_bool_exp_count: {
    arguments: { __type: "[apps_select_column!]" },
    distinct: { __type: "Boolean" },
    filter: { __type: "apps_bool_exp" },
    predicate: { __type: "Int_comparison_exp!" },
  },
  apps_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[apps_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "apps_max_fields" },
    min: { __type: "apps_min_fields" },
  },
  apps_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "apps_max_order_by" },
    min: { __type: "apps_min_order_by" },
  },
  apps_arr_rel_insert_input: {
    data: { __type: "[apps_insert_input!]!" },
    on_conflict: { __type: "apps_on_conflict" },
  },
  apps_bool_exp: {
    _and: { __type: "[apps_bool_exp!]" },
    _not: { __type: "apps_bool_exp" },
    _or: { __type: "[apps_bool_exp!]" },
    contact: { __type: "contacts_bool_exp" },
    contact_id: { __type: "uuid_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    name: { __type: "String_comparison_exp" },
  },
  apps_insert_input: {
    contact: { __type: "contacts_obj_rel_insert_input" },
    contact_id: { __type: "uuid" },
    id: { __type: "uuid" },
    name: { __type: "String" },
  },
  apps_max_fields: {
    __typename: { __type: "String!" },
    contact_id: { __type: "uuid" },
    id: { __type: "uuid" },
    name: { __type: "String" },
  },
  apps_max_order_by: {
    contact_id: { __type: "order_by" },
    id: { __type: "order_by" },
    name: { __type: "order_by" },
  },
  apps_min_fields: {
    __typename: { __type: "String!" },
    contact_id: { __type: "uuid" },
    id: { __type: "uuid" },
    name: { __type: "String" },
  },
  apps_min_order_by: {
    contact_id: { __type: "order_by" },
    id: { __type: "order_by" },
    name: { __type: "order_by" },
  },
  apps_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[apps!]!" },
  },
  apps_on_conflict: {
    constraint: { __type: "apps_constraint!" },
    update_columns: { __type: "[apps_update_column!]!" },
    where: { __type: "apps_bool_exp" },
  },
  apps_order_by: {
    contact: { __type: "contacts_order_by" },
    contact_id: { __type: "order_by" },
    id: { __type: "order_by" },
    name: { __type: "order_by" },
  },
  apps_pk_columns_input: { id: { __type: "uuid!" } },
  apps_set_input: {
    contact_id: { __type: "uuid" },
    id: { __type: "uuid" },
    name: { __type: "String" },
  },
  apps_stream_cursor_input: {
    initial_value: { __type: "apps_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  apps_stream_cursor_value_input: {
    contact_id: { __type: "uuid" },
    id: { __type: "uuid" },
    name: { __type: "String" },
  },
  apps_updates: {
    _set: { __type: "apps_set_input" },
    where: { __type: "apps_bool_exp!" },
  },
  authProviderRequests: {
    __typename: { __type: "String!" },
    id: { __type: "uuid!" },
    options: { __type: "jsonb", __args: { path: "String" } },
  },
  authProviderRequests_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authProviderRequests_aggregate_fields" },
    nodes: { __type: "[authProviderRequests!]!" },
  },
  authProviderRequests_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authProviderRequests_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authProviderRequests_max_fields" },
    min: { __type: "authProviderRequests_min_fields" },
  },
  authProviderRequests_append_input: { options: { __type: "jsonb" } },
  authProviderRequests_bool_exp: {
    _and: { __type: "[authProviderRequests_bool_exp!]" },
    _not: { __type: "authProviderRequests_bool_exp" },
    _or: { __type: "[authProviderRequests_bool_exp!]" },
    id: { __type: "uuid_comparison_exp" },
    options: { __type: "jsonb_comparison_exp" },
  },
  authProviderRequests_delete_at_path_input: {
    options: { __type: "[String!]" },
  },
  authProviderRequests_delete_elem_input: { options: { __type: "Int" } },
  authProviderRequests_delete_key_input: { options: { __type: "String" } },
  authProviderRequests_insert_input: {
    id: { __type: "uuid" },
    options: { __type: "jsonb" },
  },
  authProviderRequests_max_fields: {
    __typename: { __type: "String!" },
    id: { __type: "uuid" },
  },
  authProviderRequests_min_fields: {
    __typename: { __type: "String!" },
    id: { __type: "uuid" },
  },
  authProviderRequests_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authProviderRequests!]!" },
  },
  authProviderRequests_on_conflict: {
    constraint: { __type: "authProviderRequests_constraint!" },
    update_columns: { __type: "[authProviderRequests_update_column!]!" },
    where: { __type: "authProviderRequests_bool_exp" },
  },
  authProviderRequests_order_by: {
    id: { __type: "order_by" },
    options: { __type: "order_by" },
  },
  authProviderRequests_pk_columns_input: { id: { __type: "uuid!" } },
  authProviderRequests_prepend_input: { options: { __type: "jsonb" } },
  authProviderRequests_set_input: {
    id: { __type: "uuid" },
    options: { __type: "jsonb" },
  },
  authProviderRequests_stream_cursor_input: {
    initial_value: {
      __type: "authProviderRequests_stream_cursor_value_input!",
    },
    ordering: { __type: "cursor_ordering" },
  },
  authProviderRequests_stream_cursor_value_input: {
    id: { __type: "uuid" },
    options: { __type: "jsonb" },
  },
  authProviderRequests_updates: {
    _append: { __type: "authProviderRequests_append_input" },
    _delete_at_path: { __type: "authProviderRequests_delete_at_path_input" },
    _delete_elem: { __type: "authProviderRequests_delete_elem_input" },
    _delete_key: { __type: "authProviderRequests_delete_key_input" },
    _prepend: { __type: "authProviderRequests_prepend_input" },
    _set: { __type: "authProviderRequests_set_input" },
    where: { __type: "authProviderRequests_bool_exp!" },
  },
  authProviders: {
    __typename: { __type: "String!" },
    id: { __type: "String!" },
    userProviders: {
      __type: "[authUserProviders!]!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    userProviders_aggregate: {
      __type: "authUserProviders_aggregate!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
  },
  authProviders_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authProviders_aggregate_fields" },
    nodes: { __type: "[authProviders!]!" },
  },
  authProviders_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authProviders_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authProviders_max_fields" },
    min: { __type: "authProviders_min_fields" },
  },
  authProviders_bool_exp: {
    _and: { __type: "[authProviders_bool_exp!]" },
    _not: { __type: "authProviders_bool_exp" },
    _or: { __type: "[authProviders_bool_exp!]" },
    id: { __type: "String_comparison_exp" },
    userProviders: { __type: "authUserProviders_bool_exp" },
    userProviders_aggregate: { __type: "authUserProviders_aggregate_bool_exp" },
  },
  authProviders_insert_input: {
    id: { __type: "String" },
    userProviders: { __type: "authUserProviders_arr_rel_insert_input" },
  },
  authProviders_max_fields: {
    __typename: { __type: "String!" },
    id: { __type: "String" },
  },
  authProviders_min_fields: {
    __typename: { __type: "String!" },
    id: { __type: "String" },
  },
  authProviders_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authProviders!]!" },
  },
  authProviders_obj_rel_insert_input: {
    data: { __type: "authProviders_insert_input!" },
    on_conflict: { __type: "authProviders_on_conflict" },
  },
  authProviders_on_conflict: {
    constraint: { __type: "authProviders_constraint!" },
    update_columns: { __type: "[authProviders_update_column!]!" },
    where: { __type: "authProviders_bool_exp" },
  },
  authProviders_order_by: {
    id: { __type: "order_by" },
    userProviders_aggregate: { __type: "authUserProviders_aggregate_order_by" },
  },
  authProviders_pk_columns_input: { id: { __type: "String!" } },
  authProviders_set_input: { id: { __type: "String" } },
  authProviders_stream_cursor_input: {
    initial_value: { __type: "authProviders_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  authProviders_stream_cursor_value_input: { id: { __type: "String" } },
  authProviders_updates: {
    _set: { __type: "authProviders_set_input" },
    where: { __type: "authProviders_bool_exp!" },
  },
  authRefreshTokens: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    expiresAt: { __type: "timestamptz!" },
    refreshToken: { __type: "uuid!" },
    user: { __type: "users!" },
    userId: { __type: "uuid!" },
  },
  authRefreshTokens_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authRefreshTokens_aggregate_fields" },
    nodes: { __type: "[authRefreshTokens!]!" },
  },
  authRefreshTokens_aggregate_bool_exp: {
    count: { __type: "authRefreshTokens_aggregate_bool_exp_count" },
  },
  authRefreshTokens_aggregate_bool_exp_count: {
    arguments: { __type: "[authRefreshTokens_select_column!]" },
    distinct: { __type: "Boolean" },
    filter: { __type: "authRefreshTokens_bool_exp" },
    predicate: { __type: "Int_comparison_exp!" },
  },
  authRefreshTokens_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authRefreshTokens_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authRefreshTokens_max_fields" },
    min: { __type: "authRefreshTokens_min_fields" },
  },
  authRefreshTokens_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "authRefreshTokens_max_order_by" },
    min: { __type: "authRefreshTokens_min_order_by" },
  },
  authRefreshTokens_arr_rel_insert_input: {
    data: { __type: "[authRefreshTokens_insert_input!]!" },
    on_conflict: { __type: "authRefreshTokens_on_conflict" },
  },
  authRefreshTokens_bool_exp: {
    _and: { __type: "[authRefreshTokens_bool_exp!]" },
    _not: { __type: "authRefreshTokens_bool_exp" },
    _or: { __type: "[authRefreshTokens_bool_exp!]" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    expiresAt: { __type: "timestamptz_comparison_exp" },
    refreshToken: { __type: "uuid_comparison_exp" },
    user: { __type: "users_bool_exp" },
    userId: { __type: "uuid_comparison_exp" },
  },
  authRefreshTokens_insert_input: {
    createdAt: { __type: "timestamptz" },
    expiresAt: { __type: "timestamptz" },
    refreshToken: { __type: "uuid" },
    user: { __type: "users_obj_rel_insert_input" },
    userId: { __type: "uuid" },
  },
  authRefreshTokens_max_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    expiresAt: { __type: "timestamptz" },
    refreshToken: { __type: "uuid" },
    userId: { __type: "uuid" },
  },
  authRefreshTokens_max_order_by: {
    createdAt: { __type: "order_by" },
    expiresAt: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authRefreshTokens_min_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    expiresAt: { __type: "timestamptz" },
    refreshToken: { __type: "uuid" },
    userId: { __type: "uuid" },
  },
  authRefreshTokens_min_order_by: {
    createdAt: { __type: "order_by" },
    expiresAt: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authRefreshTokens_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authRefreshTokens!]!" },
  },
  authRefreshTokens_on_conflict: {
    constraint: { __type: "authRefreshTokens_constraint!" },
    update_columns: { __type: "[authRefreshTokens_update_column!]!" },
    where: { __type: "authRefreshTokens_bool_exp" },
  },
  authRefreshTokens_order_by: {
    createdAt: { __type: "order_by" },
    expiresAt: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    user: { __type: "users_order_by" },
    userId: { __type: "order_by" },
  },
  authRefreshTokens_pk_columns_input: { refreshToken: { __type: "uuid!" } },
  authRefreshTokens_set_input: {
    createdAt: { __type: "timestamptz" },
    expiresAt: { __type: "timestamptz" },
    refreshToken: { __type: "uuid" },
    userId: { __type: "uuid" },
  },
  authRefreshTokens_stream_cursor_input: {
    initial_value: { __type: "authRefreshTokens_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  authRefreshTokens_stream_cursor_value_input: {
    createdAt: { __type: "timestamptz" },
    expiresAt: { __type: "timestamptz" },
    refreshToken: { __type: "uuid" },
    userId: { __type: "uuid" },
  },
  authRefreshTokens_updates: {
    _set: { __type: "authRefreshTokens_set_input" },
    where: { __type: "authRefreshTokens_bool_exp!" },
  },
  authRoles: {
    __typename: { __type: "String!" },
    role: { __type: "String!" },
    userRoles: {
      __type: "[authUserRoles!]!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    userRoles_aggregate: {
      __type: "authUserRoles_aggregate!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    usersByDefaultRole: {
      __type: "[users!]!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    usersByDefaultRole_aggregate: {
      __type: "users_aggregate!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
  },
  authRoles_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authRoles_aggregate_fields" },
    nodes: { __type: "[authRoles!]!" },
  },
  authRoles_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[authRoles_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "authRoles_max_fields" },
    min: { __type: "authRoles_min_fields" },
  },
  authRoles_bool_exp: {
    _and: { __type: "[authRoles_bool_exp!]" },
    _not: { __type: "authRoles_bool_exp" },
    _or: { __type: "[authRoles_bool_exp!]" },
    role: { __type: "String_comparison_exp" },
    userRoles: { __type: "authUserRoles_bool_exp" },
    userRoles_aggregate: { __type: "authUserRoles_aggregate_bool_exp" },
    usersByDefaultRole: { __type: "users_bool_exp" },
    usersByDefaultRole_aggregate: { __type: "users_aggregate_bool_exp" },
  },
  authRoles_insert_input: {
    role: { __type: "String" },
    userRoles: { __type: "authUserRoles_arr_rel_insert_input" },
    usersByDefaultRole: { __type: "users_arr_rel_insert_input" },
  },
  authRoles_max_fields: {
    __typename: { __type: "String!" },
    role: { __type: "String" },
  },
  authRoles_min_fields: {
    __typename: { __type: "String!" },
    role: { __type: "String" },
  },
  authRoles_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authRoles!]!" },
  },
  authRoles_obj_rel_insert_input: {
    data: { __type: "authRoles_insert_input!" },
    on_conflict: { __type: "authRoles_on_conflict" },
  },
  authRoles_on_conflict: {
    constraint: { __type: "authRoles_constraint!" },
    update_columns: { __type: "[authRoles_update_column!]!" },
    where: { __type: "authRoles_bool_exp" },
  },
  authRoles_order_by: {
    role: { __type: "order_by" },
    userRoles_aggregate: { __type: "authUserRoles_aggregate_order_by" },
    usersByDefaultRole_aggregate: { __type: "users_aggregate_order_by" },
  },
  authRoles_pk_columns_input: { role: { __type: "String!" } },
  authRoles_set_input: { role: { __type: "String" } },
  authRoles_stream_cursor_input: {
    initial_value: { __type: "authRoles_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  authRoles_stream_cursor_value_input: { role: { __type: "String" } },
  authRoles_updates: {
    _set: { __type: "authRoles_set_input" },
    where: { __type: "authRoles_bool_exp!" },
  },
  authUserProviders: {
    __typename: { __type: "String!" },
    accessToken: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    id: { __type: "uuid!" },
    provider: { __type: "authProviders!" },
    providerId: { __type: "String!" },
    providerUserId: { __type: "String!" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz!" },
    user: { __type: "users!" },
    userId: { __type: "uuid!" },
  },
  authUserProviders_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authUserProviders_aggregate_fields" },
    nodes: { __type: "[authUserProviders!]!" },
  },
  authUserProviders_aggregate_bool_exp: {
    count: { __type: "authUserProviders_aggregate_bool_exp_count" },
  },
  authUserProviders_aggregate_bool_exp_count: {
    arguments: { __type: "[authUserProviders_select_column!]" },
    distinct: { __type: "Boolean" },
    filter: { __type: "authUserProviders_bool_exp" },
    predicate: { __type: "Int_comparison_exp!" },
  },
  authUserProviders_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authUserProviders_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authUserProviders_max_fields" },
    min: { __type: "authUserProviders_min_fields" },
  },
  authUserProviders_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "authUserProviders_max_order_by" },
    min: { __type: "authUserProviders_min_order_by" },
  },
  authUserProviders_arr_rel_insert_input: {
    data: { __type: "[authUserProviders_insert_input!]!" },
    on_conflict: { __type: "authUserProviders_on_conflict" },
  },
  authUserProviders_bool_exp: {
    _and: { __type: "[authUserProviders_bool_exp!]" },
    _not: { __type: "authUserProviders_bool_exp" },
    _or: { __type: "[authUserProviders_bool_exp!]" },
    accessToken: { __type: "String_comparison_exp" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    provider: { __type: "authProviders_bool_exp" },
    providerId: { __type: "String_comparison_exp" },
    providerUserId: { __type: "String_comparison_exp" },
    refreshToken: { __type: "String_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
    user: { __type: "users_bool_exp" },
    userId: { __type: "uuid_comparison_exp" },
  },
  authUserProviders_insert_input: {
    accessToken: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    provider: { __type: "authProviders_obj_rel_insert_input" },
    providerId: { __type: "String" },
    providerUserId: { __type: "String" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    user: { __type: "users_obj_rel_insert_input" },
    userId: { __type: "uuid" },
  },
  authUserProviders_max_fields: {
    __typename: { __type: "String!" },
    accessToken: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    providerId: { __type: "String" },
    providerUserId: { __type: "String" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userId: { __type: "uuid" },
  },
  authUserProviders_max_order_by: {
    accessToken: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    providerId: { __type: "order_by" },
    providerUserId: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authUserProviders_min_fields: {
    __typename: { __type: "String!" },
    accessToken: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    providerId: { __type: "String" },
    providerUserId: { __type: "String" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userId: { __type: "uuid" },
  },
  authUserProviders_min_order_by: {
    accessToken: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    providerId: { __type: "order_by" },
    providerUserId: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authUserProviders_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authUserProviders!]!" },
  },
  authUserProviders_on_conflict: {
    constraint: { __type: "authUserProviders_constraint!" },
    update_columns: { __type: "[authUserProviders_update_column!]!" },
    where: { __type: "authUserProviders_bool_exp" },
  },
  authUserProviders_order_by: {
    accessToken: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    provider: { __type: "authProviders_order_by" },
    providerId: { __type: "order_by" },
    providerUserId: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    user: { __type: "users_order_by" },
    userId: { __type: "order_by" },
  },
  authUserProviders_pk_columns_input: { id: { __type: "uuid!" } },
  authUserProviders_set_input: {
    accessToken: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    providerId: { __type: "String" },
    providerUserId: { __type: "String" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userId: { __type: "uuid" },
  },
  authUserProviders_stream_cursor_input: {
    initial_value: { __type: "authUserProviders_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  authUserProviders_stream_cursor_value_input: {
    accessToken: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    providerId: { __type: "String" },
    providerUserId: { __type: "String" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userId: { __type: "uuid" },
  },
  authUserProviders_updates: {
    _set: { __type: "authUserProviders_set_input" },
    where: { __type: "authUserProviders_bool_exp!" },
  },
  authUserRoles: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    id: { __type: "uuid!" },
    role: { __type: "String!" },
    roleByRole: { __type: "authRoles!" },
    user: { __type: "users!" },
    userId: { __type: "uuid!" },
  },
  authUserRoles_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authUserRoles_aggregate_fields" },
    nodes: { __type: "[authUserRoles!]!" },
  },
  authUserRoles_aggregate_bool_exp: {
    count: { __type: "authUserRoles_aggregate_bool_exp_count" },
  },
  authUserRoles_aggregate_bool_exp_count: {
    arguments: { __type: "[authUserRoles_select_column!]" },
    distinct: { __type: "Boolean" },
    filter: { __type: "authUserRoles_bool_exp" },
    predicate: { __type: "Int_comparison_exp!" },
  },
  authUserRoles_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authUserRoles_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authUserRoles_max_fields" },
    min: { __type: "authUserRoles_min_fields" },
  },
  authUserRoles_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "authUserRoles_max_order_by" },
    min: { __type: "authUserRoles_min_order_by" },
  },
  authUserRoles_arr_rel_insert_input: {
    data: { __type: "[authUserRoles_insert_input!]!" },
    on_conflict: { __type: "authUserRoles_on_conflict" },
  },
  authUserRoles_bool_exp: {
    _and: { __type: "[authUserRoles_bool_exp!]" },
    _not: { __type: "authUserRoles_bool_exp" },
    _or: { __type: "[authUserRoles_bool_exp!]" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    role: { __type: "String_comparison_exp" },
    roleByRole: { __type: "authRoles_bool_exp" },
    user: { __type: "users_bool_exp" },
    userId: { __type: "uuid_comparison_exp" },
  },
  authUserRoles_insert_input: {
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    role: { __type: "String" },
    roleByRole: { __type: "authRoles_obj_rel_insert_input" },
    user: { __type: "users_obj_rel_insert_input" },
    userId: { __type: "uuid" },
  },
  authUserRoles_max_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    role: { __type: "String" },
    userId: { __type: "uuid" },
  },
  authUserRoles_max_order_by: {
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    role: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authUserRoles_min_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    role: { __type: "String" },
    userId: { __type: "uuid" },
  },
  authUserRoles_min_order_by: {
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    role: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authUserRoles_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authUserRoles!]!" },
  },
  authUserRoles_on_conflict: {
    constraint: { __type: "authUserRoles_constraint!" },
    update_columns: { __type: "[authUserRoles_update_column!]!" },
    where: { __type: "authUserRoles_bool_exp" },
  },
  authUserRoles_order_by: {
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    role: { __type: "order_by" },
    roleByRole: { __type: "authRoles_order_by" },
    user: { __type: "users_order_by" },
    userId: { __type: "order_by" },
  },
  authUserRoles_pk_columns_input: { id: { __type: "uuid!" } },
  authUserRoles_set_input: {
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    role: { __type: "String" },
    userId: { __type: "uuid" },
  },
  authUserRoles_stream_cursor_input: {
    initial_value: { __type: "authUserRoles_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  authUserRoles_stream_cursor_value_input: {
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    role: { __type: "String" },
    userId: { __type: "uuid" },
  },
  authUserRoles_updates: {
    _set: { __type: "authUserRoles_set_input" },
    where: { __type: "authUserRoles_bool_exp!" },
  },
  authUserSecurityKeys: {
    __typename: { __type: "String!" },
    counter: { __type: "bigint!" },
    credentialId: { __type: "String!" },
    credentialPublicKey: { __type: "bytea" },
    id: { __type: "uuid!" },
    nickname: { __type: "String" },
    transports: { __type: "String!" },
    user: { __type: "users!" },
    userId: { __type: "uuid!" },
  },
  authUserSecurityKeys_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authUserSecurityKeys_aggregate_fields" },
    nodes: { __type: "[authUserSecurityKeys!]!" },
  },
  authUserSecurityKeys_aggregate_bool_exp: {
    count: { __type: "authUserSecurityKeys_aggregate_bool_exp_count" },
  },
  authUserSecurityKeys_aggregate_bool_exp_count: {
    arguments: { __type: "[authUserSecurityKeys_select_column!]" },
    distinct: { __type: "Boolean" },
    filter: { __type: "authUserSecurityKeys_bool_exp" },
    predicate: { __type: "Int_comparison_exp!" },
  },
  authUserSecurityKeys_aggregate_fields: {
    __typename: { __type: "String!" },
    avg: { __type: "authUserSecurityKeys_avg_fields" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authUserSecurityKeys_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authUserSecurityKeys_max_fields" },
    min: { __type: "authUserSecurityKeys_min_fields" },
    stddev: { __type: "authUserSecurityKeys_stddev_fields" },
    stddev_pop: { __type: "authUserSecurityKeys_stddev_pop_fields" },
    stddev_samp: { __type: "authUserSecurityKeys_stddev_samp_fields" },
    sum: { __type: "authUserSecurityKeys_sum_fields" },
    var_pop: { __type: "authUserSecurityKeys_var_pop_fields" },
    var_samp: { __type: "authUserSecurityKeys_var_samp_fields" },
    variance: { __type: "authUserSecurityKeys_variance_fields" },
  },
  authUserSecurityKeys_aggregate_order_by: {
    avg: { __type: "authUserSecurityKeys_avg_order_by" },
    count: { __type: "order_by" },
    max: { __type: "authUserSecurityKeys_max_order_by" },
    min: { __type: "authUserSecurityKeys_min_order_by" },
    stddev: { __type: "authUserSecurityKeys_stddev_order_by" },
    stddev_pop: { __type: "authUserSecurityKeys_stddev_pop_order_by" },
    stddev_samp: { __type: "authUserSecurityKeys_stddev_samp_order_by" },
    sum: { __type: "authUserSecurityKeys_sum_order_by" },
    var_pop: { __type: "authUserSecurityKeys_var_pop_order_by" },
    var_samp: { __type: "authUserSecurityKeys_var_samp_order_by" },
    variance: { __type: "authUserSecurityKeys_variance_order_by" },
  },
  authUserSecurityKeys_arr_rel_insert_input: {
    data: { __type: "[authUserSecurityKeys_insert_input!]!" },
    on_conflict: { __type: "authUserSecurityKeys_on_conflict" },
  },
  authUserSecurityKeys_avg_fields: {
    __typename: { __type: "String!" },
    counter: { __type: "Float" },
  },
  authUserSecurityKeys_avg_order_by: { counter: { __type: "order_by" } },
  authUserSecurityKeys_bool_exp: {
    _and: { __type: "[authUserSecurityKeys_bool_exp!]" },
    _not: { __type: "authUserSecurityKeys_bool_exp" },
    _or: { __type: "[authUserSecurityKeys_bool_exp!]" },
    counter: { __type: "bigint_comparison_exp" },
    credentialId: { __type: "String_comparison_exp" },
    credentialPublicKey: { __type: "bytea_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    nickname: { __type: "String_comparison_exp" },
    transports: { __type: "String_comparison_exp" },
    user: { __type: "users_bool_exp" },
    userId: { __type: "uuid_comparison_exp" },
  },
  authUserSecurityKeys_inc_input: { counter: { __type: "bigint" } },
  authUserSecurityKeys_insert_input: {
    counter: { __type: "bigint" },
    credentialId: { __type: "String" },
    credentialPublicKey: { __type: "bytea" },
    id: { __type: "uuid" },
    nickname: { __type: "String" },
    transports: { __type: "String" },
    user: { __type: "users_obj_rel_insert_input" },
    userId: { __type: "uuid" },
  },
  authUserSecurityKeys_max_fields: {
    __typename: { __type: "String!" },
    counter: { __type: "bigint" },
    credentialId: { __type: "String" },
    id: { __type: "uuid" },
    nickname: { __type: "String" },
    transports: { __type: "String" },
    userId: { __type: "uuid" },
  },
  authUserSecurityKeys_max_order_by: {
    counter: { __type: "order_by" },
    credentialId: { __type: "order_by" },
    id: { __type: "order_by" },
    nickname: { __type: "order_by" },
    transports: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authUserSecurityKeys_min_fields: {
    __typename: { __type: "String!" },
    counter: { __type: "bigint" },
    credentialId: { __type: "String" },
    id: { __type: "uuid" },
    nickname: { __type: "String" },
    transports: { __type: "String" },
    userId: { __type: "uuid" },
  },
  authUserSecurityKeys_min_order_by: {
    counter: { __type: "order_by" },
    credentialId: { __type: "order_by" },
    id: { __type: "order_by" },
    nickname: { __type: "order_by" },
    transports: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authUserSecurityKeys_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authUserSecurityKeys!]!" },
  },
  authUserSecurityKeys_on_conflict: {
    constraint: { __type: "authUserSecurityKeys_constraint!" },
    update_columns: { __type: "[authUserSecurityKeys_update_column!]!" },
    where: { __type: "authUserSecurityKeys_bool_exp" },
  },
  authUserSecurityKeys_order_by: {
    counter: { __type: "order_by" },
    credentialId: { __type: "order_by" },
    credentialPublicKey: { __type: "order_by" },
    id: { __type: "order_by" },
    nickname: { __type: "order_by" },
    transports: { __type: "order_by" },
    user: { __type: "users_order_by" },
    userId: { __type: "order_by" },
  },
  authUserSecurityKeys_pk_columns_input: { id: { __type: "uuid!" } },
  authUserSecurityKeys_set_input: {
    counter: { __type: "bigint" },
    credentialId: { __type: "String" },
    credentialPublicKey: { __type: "bytea" },
    id: { __type: "uuid" },
    nickname: { __type: "String" },
    transports: { __type: "String" },
    userId: { __type: "uuid" },
  },
  authUserSecurityKeys_stddev_fields: {
    __typename: { __type: "String!" },
    counter: { __type: "Float" },
  },
  authUserSecurityKeys_stddev_order_by: { counter: { __type: "order_by" } },
  authUserSecurityKeys_stddev_pop_fields: {
    __typename: { __type: "String!" },
    counter: { __type: "Float" },
  },
  authUserSecurityKeys_stddev_pop_order_by: { counter: { __type: "order_by" } },
  authUserSecurityKeys_stddev_samp_fields: {
    __typename: { __type: "String!" },
    counter: { __type: "Float" },
  },
  authUserSecurityKeys_stddev_samp_order_by: {
    counter: { __type: "order_by" },
  },
  authUserSecurityKeys_stream_cursor_input: {
    initial_value: {
      __type: "authUserSecurityKeys_stream_cursor_value_input!",
    },
    ordering: { __type: "cursor_ordering" },
  },
  authUserSecurityKeys_stream_cursor_value_input: {
    counter: { __type: "bigint" },
    credentialId: { __type: "String" },
    credentialPublicKey: { __type: "bytea" },
    id: { __type: "uuid" },
    nickname: { __type: "String" },
    transports: { __type: "String" },
    userId: { __type: "uuid" },
  },
  authUserSecurityKeys_sum_fields: {
    __typename: { __type: "String!" },
    counter: { __type: "bigint" },
  },
  authUserSecurityKeys_sum_order_by: { counter: { __type: "order_by" } },
  authUserSecurityKeys_updates: {
    _inc: { __type: "authUserSecurityKeys_inc_input" },
    _set: { __type: "authUserSecurityKeys_set_input" },
    where: { __type: "authUserSecurityKeys_bool_exp!" },
  },
  authUserSecurityKeys_var_pop_fields: {
    __typename: { __type: "String!" },
    counter: { __type: "Float" },
  },
  authUserSecurityKeys_var_pop_order_by: { counter: { __type: "order_by" } },
  authUserSecurityKeys_var_samp_fields: {
    __typename: { __type: "String!" },
    counter: { __type: "Float" },
  },
  authUserSecurityKeys_var_samp_order_by: { counter: { __type: "order_by" } },
  authUserSecurityKeys_variance_fields: {
    __typename: { __type: "String!" },
    counter: { __type: "Float" },
  },
  authUserSecurityKeys_variance_order_by: { counter: { __type: "order_by" } },
  bigint_comparison_exp: {
    _eq: { __type: "bigint" },
    _gt: { __type: "bigint" },
    _gte: { __type: "bigint" },
    _in: { __type: "[bigint!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "bigint" },
    _lte: { __type: "bigint" },
    _neq: { __type: "bigint" },
    _nin: { __type: "[bigint!]" },
  },
  buckets: {
    __typename: { __type: "String!" },
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz!" },
    downloadExpiration: { __type: "Int!" },
    files: {
      __type: "[files!]!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    files_aggregate: {
      __type: "files_aggregate!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    id: { __type: "String!" },
    maxUploadFileSize: { __type: "Int!" },
    minUploadFileSize: { __type: "Int!" },
    presignedUrlsEnabled: { __type: "Boolean!" },
    updatedAt: { __type: "timestamptz!" },
  },
  buckets_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "buckets_aggregate_fields" },
    nodes: { __type: "[buckets!]!" },
  },
  buckets_aggregate_fields: {
    __typename: { __type: "String!" },
    avg: { __type: "buckets_avg_fields" },
    count: {
      __type: "Int!",
      __args: { columns: "[buckets_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "buckets_max_fields" },
    min: { __type: "buckets_min_fields" },
    stddev: { __type: "buckets_stddev_fields" },
    stddev_pop: { __type: "buckets_stddev_pop_fields" },
    stddev_samp: { __type: "buckets_stddev_samp_fields" },
    sum: { __type: "buckets_sum_fields" },
    var_pop: { __type: "buckets_var_pop_fields" },
    var_samp: { __type: "buckets_var_samp_fields" },
    variance: { __type: "buckets_variance_fields" },
  },
  buckets_avg_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_bool_exp: {
    _and: { __type: "[buckets_bool_exp!]" },
    _not: { __type: "buckets_bool_exp" },
    _or: { __type: "[buckets_bool_exp!]" },
    cacheControl: { __type: "String_comparison_exp" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    downloadExpiration: { __type: "Int_comparison_exp" },
    files: { __type: "files_bool_exp" },
    files_aggregate: { __type: "files_aggregate_bool_exp" },
    id: { __type: "String_comparison_exp" },
    maxUploadFileSize: { __type: "Int_comparison_exp" },
    minUploadFileSize: { __type: "Int_comparison_exp" },
    presignedUrlsEnabled: { __type: "Boolean_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
  },
  buckets_inc_input: {
    downloadExpiration: { __type: "Int" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
  },
  buckets_insert_input: {
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    downloadExpiration: { __type: "Int" },
    files: { __type: "files_arr_rel_insert_input" },
    id: { __type: "String" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
    presignedUrlsEnabled: { __type: "Boolean" },
    updatedAt: { __type: "timestamptz" },
  },
  buckets_max_fields: {
    __typename: { __type: "String!" },
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    downloadExpiration: { __type: "Int" },
    id: { __type: "String" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
  },
  buckets_min_fields: {
    __typename: { __type: "String!" },
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    downloadExpiration: { __type: "Int" },
    id: { __type: "String" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
  },
  buckets_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[buckets!]!" },
  },
  buckets_obj_rel_insert_input: {
    data: { __type: "buckets_insert_input!" },
    on_conflict: { __type: "buckets_on_conflict" },
  },
  buckets_on_conflict: {
    constraint: { __type: "buckets_constraint!" },
    update_columns: { __type: "[buckets_update_column!]!" },
    where: { __type: "buckets_bool_exp" },
  },
  buckets_order_by: {
    cacheControl: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    downloadExpiration: { __type: "order_by" },
    files_aggregate: { __type: "files_aggregate_order_by" },
    id: { __type: "order_by" },
    maxUploadFileSize: { __type: "order_by" },
    minUploadFileSize: { __type: "order_by" },
    presignedUrlsEnabled: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  buckets_pk_columns_input: { id: { __type: "String!" } },
  buckets_set_input: {
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    downloadExpiration: { __type: "Int" },
    id: { __type: "String" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
    presignedUrlsEnabled: { __type: "Boolean" },
    updatedAt: { __type: "timestamptz" },
  },
  buckets_stddev_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_stddev_pop_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_stddev_samp_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_stream_cursor_input: {
    initial_value: { __type: "buckets_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  buckets_stream_cursor_value_input: {
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    downloadExpiration: { __type: "Int" },
    id: { __type: "String" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
    presignedUrlsEnabled: { __type: "Boolean" },
    updatedAt: { __type: "timestamptz" },
  },
  buckets_sum_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Int" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
  },
  buckets_updates: {
    _inc: { __type: "buckets_inc_input" },
    _set: { __type: "buckets_set_input" },
    where: { __type: "buckets_bool_exp!" },
  },
  buckets_var_pop_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_var_samp_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_variance_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  bytea_comparison_exp: {
    _eq: { __type: "bytea" },
    _gt: { __type: "bytea" },
    _gte: { __type: "bytea" },
    _in: { __type: "[bytea!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "bytea" },
    _lte: { __type: "bytea" },
    _neq: { __type: "bytea" },
    _nin: { __type: "[bytea!]" },
  },
  citext_comparison_exp: {
    _eq: { __type: "citext" },
    _gt: { __type: "citext" },
    _gte: { __type: "citext" },
    _ilike: { __type: "citext" },
    _in: { __type: "[citext!]" },
    _iregex: { __type: "citext" },
    _is_null: { __type: "Boolean" },
    _like: { __type: "citext" },
    _lt: { __type: "citext" },
    _lte: { __type: "citext" },
    _neq: { __type: "citext" },
    _nilike: { __type: "citext" },
    _nin: { __type: "[citext!]" },
    _niregex: { __type: "citext" },
    _nlike: { __type: "citext" },
    _nregex: { __type: "citext" },
    _nsimilar: { __type: "citext" },
    _regex: { __type: "citext" },
    _similar: { __type: "citext" },
  },
  contacts: {
    __typename: { __type: "String!" },
    apps: {
      __type: "[apps!]!",
      __args: {
        distinct_on: "[apps_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[apps_order_by!]",
        where: "apps_bool_exp",
      },
    },
    apps_aggregate: {
      __type: "apps_aggregate!",
      __args: {
        distinct_on: "[apps_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[apps_order_by!]",
        where: "apps_bool_exp",
      },
    },
    firstName: { __type: "String!" },
    id: { __type: "uuid!" },
    lastName: { __type: "String!" },
    todos: {
      __type: "[todos!]!",
      __args: {
        distinct_on: "[todos_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[todos_order_by!]",
        where: "todos_bool_exp",
      },
    },
    todos_aggregate: {
      __type: "todos_aggregate!",
      __args: {
        distinct_on: "[todos_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[todos_order_by!]",
        where: "todos_bool_exp",
      },
    },
  },
  contacts_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "contacts_aggregate_fields" },
    nodes: { __type: "[contacts!]!" },
  },
  contacts_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[contacts_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "contacts_max_fields" },
    min: { __type: "contacts_min_fields" },
  },
  contacts_bool_exp: {
    _and: { __type: "[contacts_bool_exp!]" },
    _not: { __type: "contacts_bool_exp" },
    _or: { __type: "[contacts_bool_exp!]" },
    apps: { __type: "apps_bool_exp" },
    apps_aggregate: { __type: "apps_aggregate_bool_exp" },
    firstName: { __type: "String_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    lastName: { __type: "String_comparison_exp" },
    todos: { __type: "todos_bool_exp" },
    todos_aggregate: { __type: "todos_aggregate_bool_exp" },
  },
  contacts_insert_input: {
    apps: { __type: "apps_arr_rel_insert_input" },
    firstName: { __type: "String" },
    id: { __type: "uuid" },
    lastName: { __type: "String" },
    todos: { __type: "todos_arr_rel_insert_input" },
  },
  contacts_max_fields: {
    __typename: { __type: "String!" },
    firstName: { __type: "String" },
    id: { __type: "uuid" },
    lastName: { __type: "String" },
  },
  contacts_min_fields: {
    __typename: { __type: "String!" },
    firstName: { __type: "String" },
    id: { __type: "uuid" },
    lastName: { __type: "String" },
  },
  contacts_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[contacts!]!" },
  },
  contacts_obj_rel_insert_input: {
    data: { __type: "contacts_insert_input!" },
    on_conflict: { __type: "contacts_on_conflict" },
  },
  contacts_on_conflict: {
    constraint: { __type: "contacts_constraint!" },
    update_columns: { __type: "[contacts_update_column!]!" },
    where: { __type: "contacts_bool_exp" },
  },
  contacts_order_by: {
    apps_aggregate: { __type: "apps_aggregate_order_by" },
    firstName: { __type: "order_by" },
    id: { __type: "order_by" },
    lastName: { __type: "order_by" },
    todos_aggregate: { __type: "todos_aggregate_order_by" },
  },
  contacts_pk_columns_input: { id: { __type: "uuid!" } },
  contacts_set_input: {
    firstName: { __type: "String" },
    id: { __type: "uuid" },
    lastName: { __type: "String" },
  },
  contacts_stream_cursor_input: {
    initial_value: { __type: "contacts_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  contacts_stream_cursor_value_input: {
    firstName: { __type: "String" },
    id: { __type: "uuid" },
    lastName: { __type: "String" },
  },
  contacts_updates: {
    _set: { __type: "contacts_set_input" },
    where: { __type: "contacts_bool_exp!" },
  },
  files: {
    __typename: { __type: "String!" },
    bucket: { __type: "buckets!" },
    bucketId: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    etag: { __type: "String" },
    id: { __type: "uuid!" },
    isUploaded: { __type: "Boolean" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz!" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "files_aggregate_fields" },
    nodes: { __type: "[files!]!" },
  },
  files_aggregate_bool_exp: {
    bool_and: { __type: "files_aggregate_bool_exp_bool_and" },
    bool_or: { __type: "files_aggregate_bool_exp_bool_or" },
    count: { __type: "files_aggregate_bool_exp_count" },
  },
  files_aggregate_bool_exp_bool_and: {
    arguments: {
      __type:
        "files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns!",
    },
    distinct: { __type: "Boolean" },
    filter: { __type: "files_bool_exp" },
    predicate: { __type: "Boolean_comparison_exp!" },
  },
  files_aggregate_bool_exp_bool_or: {
    arguments: {
      __type:
        "files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns!",
    },
    distinct: { __type: "Boolean" },
    filter: { __type: "files_bool_exp" },
    predicate: { __type: "Boolean_comparison_exp!" },
  },
  files_aggregate_bool_exp_count: {
    arguments: { __type: "[files_select_column!]" },
    distinct: { __type: "Boolean" },
    filter: { __type: "files_bool_exp" },
    predicate: { __type: "Int_comparison_exp!" },
  },
  files_aggregate_fields: {
    __typename: { __type: "String!" },
    avg: { __type: "files_avg_fields" },
    count: {
      __type: "Int!",
      __args: { columns: "[files_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "files_max_fields" },
    min: { __type: "files_min_fields" },
    stddev: { __type: "files_stddev_fields" },
    stddev_pop: { __type: "files_stddev_pop_fields" },
    stddev_samp: { __type: "files_stddev_samp_fields" },
    sum: { __type: "files_sum_fields" },
    var_pop: { __type: "files_var_pop_fields" },
    var_samp: { __type: "files_var_samp_fields" },
    variance: { __type: "files_variance_fields" },
  },
  files_aggregate_order_by: {
    avg: { __type: "files_avg_order_by" },
    count: { __type: "order_by" },
    max: { __type: "files_max_order_by" },
    min: { __type: "files_min_order_by" },
    stddev: { __type: "files_stddev_order_by" },
    stddev_pop: { __type: "files_stddev_pop_order_by" },
    stddev_samp: { __type: "files_stddev_samp_order_by" },
    sum: { __type: "files_sum_order_by" },
    var_pop: { __type: "files_var_pop_order_by" },
    var_samp: { __type: "files_var_samp_order_by" },
    variance: { __type: "files_variance_order_by" },
  },
  files_arr_rel_insert_input: {
    data: { __type: "[files_insert_input!]!" },
    on_conflict: { __type: "files_on_conflict" },
  },
  files_avg_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_avg_order_by: { size: { __type: "order_by" } },
  files_bool_exp: {
    _and: { __type: "[files_bool_exp!]" },
    _not: { __type: "files_bool_exp" },
    _or: { __type: "[files_bool_exp!]" },
    bucket: { __type: "buckets_bool_exp" },
    bucketId: { __type: "String_comparison_exp" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    etag: { __type: "String_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    isUploaded: { __type: "Boolean_comparison_exp" },
    mimeType: { __type: "String_comparison_exp" },
    name: { __type: "String_comparison_exp" },
    size: { __type: "Int_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
    uploadedByUserId: { __type: "uuid_comparison_exp" },
  },
  files_inc_input: { size: { __type: "Int" } },
  files_insert_input: {
    bucket: { __type: "buckets_obj_rel_insert_input" },
    bucketId: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    etag: { __type: "String" },
    id: { __type: "uuid" },
    isUploaded: { __type: "Boolean" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_max_fields: {
    __typename: { __type: "String!" },
    bucketId: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    etag: { __type: "String" },
    id: { __type: "uuid" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_max_order_by: {
    bucketId: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    etag: { __type: "order_by" },
    id: { __type: "order_by" },
    mimeType: { __type: "order_by" },
    name: { __type: "order_by" },
    size: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    uploadedByUserId: { __type: "order_by" },
  },
  files_min_fields: {
    __typename: { __type: "String!" },
    bucketId: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    etag: { __type: "String" },
    id: { __type: "uuid" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_min_order_by: {
    bucketId: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    etag: { __type: "order_by" },
    id: { __type: "order_by" },
    mimeType: { __type: "order_by" },
    name: { __type: "order_by" },
    size: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    uploadedByUserId: { __type: "order_by" },
  },
  files_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[files!]!" },
  },
  files_on_conflict: {
    constraint: { __type: "files_constraint!" },
    update_columns: { __type: "[files_update_column!]!" },
    where: { __type: "files_bool_exp" },
  },
  files_order_by: {
    bucket: { __type: "buckets_order_by" },
    bucketId: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    etag: { __type: "order_by" },
    id: { __type: "order_by" },
    isUploaded: { __type: "order_by" },
    mimeType: { __type: "order_by" },
    name: { __type: "order_by" },
    size: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    uploadedByUserId: { __type: "order_by" },
  },
  files_pk_columns_input: { id: { __type: "uuid!" } },
  files_set_input: {
    bucketId: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    etag: { __type: "String" },
    id: { __type: "uuid" },
    isUploaded: { __type: "Boolean" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_stddev_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_stddev_order_by: { size: { __type: "order_by" } },
  files_stddev_pop_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_stddev_pop_order_by: { size: { __type: "order_by" } },
  files_stddev_samp_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_stddev_samp_order_by: { size: { __type: "order_by" } },
  files_stream_cursor_input: {
    initial_value: { __type: "files_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  files_stream_cursor_value_input: {
    bucketId: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    etag: { __type: "String" },
    id: { __type: "uuid" },
    isUploaded: { __type: "Boolean" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_sum_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Int" },
  },
  files_sum_order_by: { size: { __type: "order_by" } },
  files_updates: {
    _inc: { __type: "files_inc_input" },
    _set: { __type: "files_set_input" },
    where: { __type: "files_bool_exp!" },
  },
  files_var_pop_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_var_pop_order_by: { size: { __type: "order_by" } },
  files_var_samp_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_var_samp_order_by: { size: { __type: "order_by" } },
  files_variance_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_variance_order_by: { size: { __type: "order_by" } },
  jsonb_cast_exp: { String: { __type: "String_comparison_exp" } },
  jsonb_comparison_exp: {
    _cast: { __type: "jsonb_cast_exp" },
    _contained_in: { __type: "jsonb" },
    _contains: { __type: "jsonb" },
    _eq: { __type: "jsonb" },
    _gt: { __type: "jsonb" },
    _gte: { __type: "jsonb" },
    _has_key: { __type: "String" },
    _has_keys_all: { __type: "[String!]" },
    _has_keys_any: { __type: "[String!]" },
    _in: { __type: "[jsonb!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "jsonb" },
    _lte: { __type: "jsonb" },
    _neq: { __type: "jsonb" },
    _nin: { __type: "[jsonb!]" },
  },
  mutation: {
    __typename: { __type: "String!" },
    deleteAuthProvider: { __type: "authProviders", __args: { id: "String!" } },
    deleteAuthProviderRequest: {
      __type: "authProviderRequests",
      __args: { id: "uuid!" },
    },
    deleteAuthProviderRequests: {
      __type: "authProviderRequests_mutation_response",
      __args: { where: "authProviderRequests_bool_exp!" },
    },
    deleteAuthProviders: {
      __type: "authProviders_mutation_response",
      __args: { where: "authProviders_bool_exp!" },
    },
    deleteAuthRefreshToken: {
      __type: "authRefreshTokens",
      __args: { refreshToken: "uuid!" },
    },
    deleteAuthRefreshTokens: {
      __type: "authRefreshTokens_mutation_response",
      __args: { where: "authRefreshTokens_bool_exp!" },
    },
    deleteAuthRole: { __type: "authRoles", __args: { role: "String!" } },
    deleteAuthRoles: {
      __type: "authRoles_mutation_response",
      __args: { where: "authRoles_bool_exp!" },
    },
    deleteAuthUserProvider: {
      __type: "authUserProviders",
      __args: { id: "uuid!" },
    },
    deleteAuthUserProviders: {
      __type: "authUserProviders_mutation_response",
      __args: { where: "authUserProviders_bool_exp!" },
    },
    deleteAuthUserRole: { __type: "authUserRoles", __args: { id: "uuid!" } },
    deleteAuthUserRoles: {
      __type: "authUserRoles_mutation_response",
      __args: { where: "authUserRoles_bool_exp!" },
    },
    deleteAuthUserSecurityKey: {
      __type: "authUserSecurityKeys",
      __args: { id: "uuid!" },
    },
    deleteAuthUserSecurityKeys: {
      __type: "authUserSecurityKeys_mutation_response",
      __args: { where: "authUserSecurityKeys_bool_exp!" },
    },
    deleteBucket: { __type: "buckets", __args: { id: "String!" } },
    deleteBuckets: {
      __type: "buckets_mutation_response",
      __args: { where: "buckets_bool_exp!" },
    },
    deleteFile: { __type: "files", __args: { id: "uuid!" } },
    deleteFiles: {
      __type: "files_mutation_response",
      __args: { where: "files_bool_exp!" },
    },
    deleteUser: { __type: "users", __args: { id: "uuid!" } },
    deleteUsers: {
      __type: "users_mutation_response",
      __args: { where: "users_bool_exp!" },
    },
    delete_apps: {
      __type: "apps_mutation_response",
      __args: { where: "apps_bool_exp!" },
    },
    delete_apps_by_pk: { __type: "apps", __args: { id: "uuid!" } },
    delete_contacts: {
      __type: "contacts_mutation_response",
      __args: { where: "contacts_bool_exp!" },
    },
    delete_contacts_by_pk: { __type: "contacts", __args: { id: "uuid!" } },
    delete_todos: {
      __type: "todos_mutation_response",
      __args: { where: "todos_bool_exp!" },
    },
    delete_todos_by_pk: { __type: "todos", __args: { id: "uuid!" } },
    insertAuthProvider: {
      __type: "authProviders",
      __args: {
        object: "authProviders_insert_input!",
        on_conflict: "authProviders_on_conflict",
      },
    },
    insertAuthProviderRequest: {
      __type: "authProviderRequests",
      __args: {
        object: "authProviderRequests_insert_input!",
        on_conflict: "authProviderRequests_on_conflict",
      },
    },
    insertAuthProviderRequests: {
      __type: "authProviderRequests_mutation_response",
      __args: {
        objects: "[authProviderRequests_insert_input!]!",
        on_conflict: "authProviderRequests_on_conflict",
      },
    },
    insertAuthProviders: {
      __type: "authProviders_mutation_response",
      __args: {
        objects: "[authProviders_insert_input!]!",
        on_conflict: "authProviders_on_conflict",
      },
    },
    insertAuthRefreshToken: {
      __type: "authRefreshTokens",
      __args: {
        object: "authRefreshTokens_insert_input!",
        on_conflict: "authRefreshTokens_on_conflict",
      },
    },
    insertAuthRefreshTokens: {
      __type: "authRefreshTokens_mutation_response",
      __args: {
        objects: "[authRefreshTokens_insert_input!]!",
        on_conflict: "authRefreshTokens_on_conflict",
      },
    },
    insertAuthRole: {
      __type: "authRoles",
      __args: {
        object: "authRoles_insert_input!",
        on_conflict: "authRoles_on_conflict",
      },
    },
    insertAuthRoles: {
      __type: "authRoles_mutation_response",
      __args: {
        objects: "[authRoles_insert_input!]!",
        on_conflict: "authRoles_on_conflict",
      },
    },
    insertAuthUserProvider: {
      __type: "authUserProviders",
      __args: {
        object: "authUserProviders_insert_input!",
        on_conflict: "authUserProviders_on_conflict",
      },
    },
    insertAuthUserProviders: {
      __type: "authUserProviders_mutation_response",
      __args: {
        objects: "[authUserProviders_insert_input!]!",
        on_conflict: "authUserProviders_on_conflict",
      },
    },
    insertAuthUserRole: {
      __type: "authUserRoles",
      __args: {
        object: "authUserRoles_insert_input!",
        on_conflict: "authUserRoles_on_conflict",
      },
    },
    insertAuthUserRoles: {
      __type: "authUserRoles_mutation_response",
      __args: {
        objects: "[authUserRoles_insert_input!]!",
        on_conflict: "authUserRoles_on_conflict",
      },
    },
    insertAuthUserSecurityKey: {
      __type: "authUserSecurityKeys",
      __args: {
        object: "authUserSecurityKeys_insert_input!",
        on_conflict: "authUserSecurityKeys_on_conflict",
      },
    },
    insertAuthUserSecurityKeys: {
      __type: "authUserSecurityKeys_mutation_response",
      __args: {
        objects: "[authUserSecurityKeys_insert_input!]!",
        on_conflict: "authUserSecurityKeys_on_conflict",
      },
    },
    insertBucket: {
      __type: "buckets",
      __args: {
        object: "buckets_insert_input!",
        on_conflict: "buckets_on_conflict",
      },
    },
    insertBuckets: {
      __type: "buckets_mutation_response",
      __args: {
        objects: "[buckets_insert_input!]!",
        on_conflict: "buckets_on_conflict",
      },
    },
    insertFile: {
      __type: "files",
      __args: {
        object: "files_insert_input!",
        on_conflict: "files_on_conflict",
      },
    },
    insertFiles: {
      __type: "files_mutation_response",
      __args: {
        objects: "[files_insert_input!]!",
        on_conflict: "files_on_conflict",
      },
    },
    insertUser: {
      __type: "users",
      __args: {
        object: "users_insert_input!",
        on_conflict: "users_on_conflict",
      },
    },
    insertUsers: {
      __type: "users_mutation_response",
      __args: {
        objects: "[users_insert_input!]!",
        on_conflict: "users_on_conflict",
      },
    },
    insert_apps: {
      __type: "apps_mutation_response",
      __args: {
        objects: "[apps_insert_input!]!",
        on_conflict: "apps_on_conflict",
      },
    },
    insert_apps_one: {
      __type: "apps",
      __args: { object: "apps_insert_input!", on_conflict: "apps_on_conflict" },
    },
    insert_contacts: {
      __type: "contacts_mutation_response",
      __args: {
        objects: "[contacts_insert_input!]!",
        on_conflict: "contacts_on_conflict",
      },
    },
    insert_contacts_one: {
      __type: "contacts",
      __args: {
        object: "contacts_insert_input!",
        on_conflict: "contacts_on_conflict",
      },
    },
    insert_todos: {
      __type: "todos_mutation_response",
      __args: {
        objects: "[todos_insert_input!]!",
        on_conflict: "todos_on_conflict",
      },
    },
    insert_todos_one: {
      __type: "todos",
      __args: {
        object: "todos_insert_input!",
        on_conflict: "todos_on_conflict",
      },
    },
    updateAuthProvider: {
      __type: "authProviders",
      __args: {
        _set: "authProviders_set_input",
        pk_columns: "authProviders_pk_columns_input!",
      },
    },
    updateAuthProviderRequest: {
      __type: "authProviderRequests",
      __args: {
        _append: "authProviderRequests_append_input",
        _delete_at_path: "authProviderRequests_delete_at_path_input",
        _delete_elem: "authProviderRequests_delete_elem_input",
        _delete_key: "authProviderRequests_delete_key_input",
        _prepend: "authProviderRequests_prepend_input",
        _set: "authProviderRequests_set_input",
        pk_columns: "authProviderRequests_pk_columns_input!",
      },
    },
    updateAuthProviderRequests: {
      __type: "authProviderRequests_mutation_response",
      __args: {
        _append: "authProviderRequests_append_input",
        _delete_at_path: "authProviderRequests_delete_at_path_input",
        _delete_elem: "authProviderRequests_delete_elem_input",
        _delete_key: "authProviderRequests_delete_key_input",
        _prepend: "authProviderRequests_prepend_input",
        _set: "authProviderRequests_set_input",
        where: "authProviderRequests_bool_exp!",
      },
    },
    updateAuthProviders: {
      __type: "authProviders_mutation_response",
      __args: {
        _set: "authProviders_set_input",
        where: "authProviders_bool_exp!",
      },
    },
    updateAuthRefreshToken: {
      __type: "authRefreshTokens",
      __args: {
        _set: "authRefreshTokens_set_input",
        pk_columns: "authRefreshTokens_pk_columns_input!",
      },
    },
    updateAuthRefreshTokens: {
      __type: "authRefreshTokens_mutation_response",
      __args: {
        _set: "authRefreshTokens_set_input",
        where: "authRefreshTokens_bool_exp!",
      },
    },
    updateAuthRole: {
      __type: "authRoles",
      __args: {
        _set: "authRoles_set_input",
        pk_columns: "authRoles_pk_columns_input!",
      },
    },
    updateAuthRoles: {
      __type: "authRoles_mutation_response",
      __args: { _set: "authRoles_set_input", where: "authRoles_bool_exp!" },
    },
    updateAuthUserProvider: {
      __type: "authUserProviders",
      __args: {
        _set: "authUserProviders_set_input",
        pk_columns: "authUserProviders_pk_columns_input!",
      },
    },
    updateAuthUserProviders: {
      __type: "authUserProviders_mutation_response",
      __args: {
        _set: "authUserProviders_set_input",
        where: "authUserProviders_bool_exp!",
      },
    },
    updateAuthUserRole: {
      __type: "authUserRoles",
      __args: {
        _set: "authUserRoles_set_input",
        pk_columns: "authUserRoles_pk_columns_input!",
      },
    },
    updateAuthUserRoles: {
      __type: "authUserRoles_mutation_response",
      __args: {
        _set: "authUserRoles_set_input",
        where: "authUserRoles_bool_exp!",
      },
    },
    updateAuthUserSecurityKey: {
      __type: "authUserSecurityKeys",
      __args: {
        _inc: "authUserSecurityKeys_inc_input",
        _set: "authUserSecurityKeys_set_input",
        pk_columns: "authUserSecurityKeys_pk_columns_input!",
      },
    },
    updateAuthUserSecurityKeys: {
      __type: "authUserSecurityKeys_mutation_response",
      __args: {
        _inc: "authUserSecurityKeys_inc_input",
        _set: "authUserSecurityKeys_set_input",
        where: "authUserSecurityKeys_bool_exp!",
      },
    },
    updateBucket: {
      __type: "buckets",
      __args: {
        _inc: "buckets_inc_input",
        _set: "buckets_set_input",
        pk_columns: "buckets_pk_columns_input!",
      },
    },
    updateBuckets: {
      __type: "buckets_mutation_response",
      __args: {
        _inc: "buckets_inc_input",
        _set: "buckets_set_input",
        where: "buckets_bool_exp!",
      },
    },
    updateFile: {
      __type: "files",
      __args: {
        _inc: "files_inc_input",
        _set: "files_set_input",
        pk_columns: "files_pk_columns_input!",
      },
    },
    updateFiles: {
      __type: "files_mutation_response",
      __args: {
        _inc: "files_inc_input",
        _set: "files_set_input",
        where: "files_bool_exp!",
      },
    },
    updateUser: {
      __type: "users",
      __args: {
        _append: "users_append_input",
        _delete_at_path: "users_delete_at_path_input",
        _delete_elem: "users_delete_elem_input",
        _delete_key: "users_delete_key_input",
        _prepend: "users_prepend_input",
        _set: "users_set_input",
        pk_columns: "users_pk_columns_input!",
      },
    },
    updateUsers: {
      __type: "users_mutation_response",
      __args: {
        _append: "users_append_input",
        _delete_at_path: "users_delete_at_path_input",
        _delete_elem: "users_delete_elem_input",
        _delete_key: "users_delete_key_input",
        _prepend: "users_prepend_input",
        _set: "users_set_input",
        where: "users_bool_exp!",
      },
    },
    update_apps: {
      __type: "apps_mutation_response",
      __args: { _set: "apps_set_input", where: "apps_bool_exp!" },
    },
    update_apps_by_pk: {
      __type: "apps",
      __args: { _set: "apps_set_input", pk_columns: "apps_pk_columns_input!" },
    },
    update_apps_many: {
      __type: "[apps_mutation_response]",
      __args: { updates: "[apps_updates!]!" },
    },
    update_authProviderRequests_many: {
      __type: "[authProviderRequests_mutation_response]",
      __args: { updates: "[authProviderRequests_updates!]!" },
    },
    update_authProviders_many: {
      __type: "[authProviders_mutation_response]",
      __args: { updates: "[authProviders_updates!]!" },
    },
    update_authRefreshTokens_many: {
      __type: "[authRefreshTokens_mutation_response]",
      __args: { updates: "[authRefreshTokens_updates!]!" },
    },
    update_authRoles_many: {
      __type: "[authRoles_mutation_response]",
      __args: { updates: "[authRoles_updates!]!" },
    },
    update_authUserProviders_many: {
      __type: "[authUserProviders_mutation_response]",
      __args: { updates: "[authUserProviders_updates!]!" },
    },
    update_authUserRoles_many: {
      __type: "[authUserRoles_mutation_response]",
      __args: { updates: "[authUserRoles_updates!]!" },
    },
    update_authUserSecurityKeys_many: {
      __type: "[authUserSecurityKeys_mutation_response]",
      __args: { updates: "[authUserSecurityKeys_updates!]!" },
    },
    update_buckets_many: {
      __type: "[buckets_mutation_response]",
      __args: { updates: "[buckets_updates!]!" },
    },
    update_contacts: {
      __type: "contacts_mutation_response",
      __args: { _set: "contacts_set_input", where: "contacts_bool_exp!" },
    },
    update_contacts_by_pk: {
      __type: "contacts",
      __args: {
        _set: "contacts_set_input",
        pk_columns: "contacts_pk_columns_input!",
      },
    },
    update_contacts_many: {
      __type: "[contacts_mutation_response]",
      __args: { updates: "[contacts_updates!]!" },
    },
    update_files_many: {
      __type: "[files_mutation_response]",
      __args: { updates: "[files_updates!]!" },
    },
    update_todos: {
      __type: "todos_mutation_response",
      __args: { _set: "todos_set_input", where: "todos_bool_exp!" },
    },
    update_todos_by_pk: {
      __type: "todos",
      __args: {
        _set: "todos_set_input",
        pk_columns: "todos_pk_columns_input!",
      },
    },
    update_todos_many: {
      __type: "[todos_mutation_response]",
      __args: { updates: "[todos_updates!]!" },
    },
    update_users_many: {
      __type: "[users_mutation_response]",
      __args: { updates: "[users_updates!]!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    apps: {
      __type: "[apps!]!",
      __args: {
        distinct_on: "[apps_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[apps_order_by!]",
        where: "apps_bool_exp",
      },
    },
    apps_aggregate: {
      __type: "apps_aggregate!",
      __args: {
        distinct_on: "[apps_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[apps_order_by!]",
        where: "apps_bool_exp",
      },
    },
    apps_by_pk: { __type: "apps", __args: { id: "uuid!" } },
    authProvider: { __type: "authProviders", __args: { id: "String!" } },
    authProviderRequest: {
      __type: "authProviderRequests",
      __args: { id: "uuid!" },
    },
    authProviderRequests: {
      __type: "[authProviderRequests!]!",
      __args: {
        distinct_on: "[authProviderRequests_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviderRequests_order_by!]",
        where: "authProviderRequests_bool_exp",
      },
    },
    authProviderRequestsAggregate: {
      __type: "authProviderRequests_aggregate!",
      __args: {
        distinct_on: "[authProviderRequests_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviderRequests_order_by!]",
        where: "authProviderRequests_bool_exp",
      },
    },
    authProviders: {
      __type: "[authProviders!]!",
      __args: {
        distinct_on: "[authProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviders_order_by!]",
        where: "authProviders_bool_exp",
      },
    },
    authProvidersAggregate: {
      __type: "authProviders_aggregate!",
      __args: {
        distinct_on: "[authProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviders_order_by!]",
        where: "authProviders_bool_exp",
      },
    },
    authRefreshToken: {
      __type: "authRefreshTokens",
      __args: { refreshToken: "uuid!" },
    },
    authRefreshTokens: {
      __type: "[authRefreshTokens!]!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    authRefreshTokensAggregate: {
      __type: "authRefreshTokens_aggregate!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    authRole: { __type: "authRoles", __args: { role: "String!" } },
    authRoles: {
      __type: "[authRoles!]!",
      __args: {
        distinct_on: "[authRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRoles_order_by!]",
        where: "authRoles_bool_exp",
      },
    },
    authRolesAggregate: {
      __type: "authRoles_aggregate!",
      __args: {
        distinct_on: "[authRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRoles_order_by!]",
        where: "authRoles_bool_exp",
      },
    },
    authUserProvider: { __type: "authUserProviders", __args: { id: "uuid!" } },
    authUserProviders: {
      __type: "[authUserProviders!]!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    authUserProvidersAggregate: {
      __type: "authUserProviders_aggregate!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    authUserRole: { __type: "authUserRoles", __args: { id: "uuid!" } },
    authUserRoles: {
      __type: "[authUserRoles!]!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    authUserRolesAggregate: {
      __type: "authUserRoles_aggregate!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    authUserSecurityKey: {
      __type: "authUserSecurityKeys",
      __args: { id: "uuid!" },
    },
    authUserSecurityKeys: {
      __type: "[authUserSecurityKeys!]!",
      __args: {
        distinct_on: "[authUserSecurityKeys_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserSecurityKeys_order_by!]",
        where: "authUserSecurityKeys_bool_exp",
      },
    },
    authUserSecurityKeysAggregate: {
      __type: "authUserSecurityKeys_aggregate!",
      __args: {
        distinct_on: "[authUserSecurityKeys_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserSecurityKeys_order_by!]",
        where: "authUserSecurityKeys_bool_exp",
      },
    },
    bucket: { __type: "buckets", __args: { id: "String!" } },
    buckets: {
      __type: "[buckets!]!",
      __args: {
        distinct_on: "[buckets_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[buckets_order_by!]",
        where: "buckets_bool_exp",
      },
    },
    bucketsAggregate: {
      __type: "buckets_aggregate!",
      __args: {
        distinct_on: "[buckets_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[buckets_order_by!]",
        where: "buckets_bool_exp",
      },
    },
    contacts: {
      __type: "[contacts!]!",
      __args: {
        distinct_on: "[contacts_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[contacts_order_by!]",
        where: "contacts_bool_exp",
      },
    },
    contacts_aggregate: {
      __type: "contacts_aggregate!",
      __args: {
        distinct_on: "[contacts_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[contacts_order_by!]",
        where: "contacts_bool_exp",
      },
    },
    contacts_by_pk: { __type: "contacts", __args: { id: "uuid!" } },
    file: { __type: "files", __args: { id: "uuid!" } },
    files: {
      __type: "[files!]!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    filesAggregate: {
      __type: "files_aggregate!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    todos: {
      __type: "[todos!]!",
      __args: {
        distinct_on: "[todos_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[todos_order_by!]",
        where: "todos_bool_exp",
      },
    },
    todos_aggregate: {
      __type: "todos_aggregate!",
      __args: {
        distinct_on: "[todos_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[todos_order_by!]",
        where: "todos_bool_exp",
      },
    },
    todos_by_pk: { __type: "todos", __args: { id: "uuid!" } },
    user: { __type: "users", __args: { id: "uuid!" } },
    users: {
      __type: "[users!]!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    usersAggregate: {
      __type: "users_aggregate!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
  },
  subscription: {
    __typename: { __type: "String!" },
    apps: {
      __type: "[apps!]!",
      __args: {
        distinct_on: "[apps_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[apps_order_by!]",
        where: "apps_bool_exp",
      },
    },
    apps_aggregate: {
      __type: "apps_aggregate!",
      __args: {
        distinct_on: "[apps_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[apps_order_by!]",
        where: "apps_bool_exp",
      },
    },
    apps_by_pk: { __type: "apps", __args: { id: "uuid!" } },
    apps_stream: {
      __type: "[apps!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[apps_stream_cursor_input]!",
        where: "apps_bool_exp",
      },
    },
    authProvider: { __type: "authProviders", __args: { id: "String!" } },
    authProviderRequest: {
      __type: "authProviderRequests",
      __args: { id: "uuid!" },
    },
    authProviderRequests: {
      __type: "[authProviderRequests!]!",
      __args: {
        distinct_on: "[authProviderRequests_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviderRequests_order_by!]",
        where: "authProviderRequests_bool_exp",
      },
    },
    authProviderRequestsAggregate: {
      __type: "authProviderRequests_aggregate!",
      __args: {
        distinct_on: "[authProviderRequests_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviderRequests_order_by!]",
        where: "authProviderRequests_bool_exp",
      },
    },
    authProviderRequests_stream: {
      __type: "[authProviderRequests!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[authProviderRequests_stream_cursor_input]!",
        where: "authProviderRequests_bool_exp",
      },
    },
    authProviders: {
      __type: "[authProviders!]!",
      __args: {
        distinct_on: "[authProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviders_order_by!]",
        where: "authProviders_bool_exp",
      },
    },
    authProvidersAggregate: {
      __type: "authProviders_aggregate!",
      __args: {
        distinct_on: "[authProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviders_order_by!]",
        where: "authProviders_bool_exp",
      },
    },
    authProviders_stream: {
      __type: "[authProviders!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[authProviders_stream_cursor_input]!",
        where: "authProviders_bool_exp",
      },
    },
    authRefreshToken: {
      __type: "authRefreshTokens",
      __args: { refreshToken: "uuid!" },
    },
    authRefreshTokens: {
      __type: "[authRefreshTokens!]!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    authRefreshTokensAggregate: {
      __type: "authRefreshTokens_aggregate!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    authRefreshTokens_stream: {
      __type: "[authRefreshTokens!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[authRefreshTokens_stream_cursor_input]!",
        where: "authRefreshTokens_bool_exp",
      },
    },
    authRole: { __type: "authRoles", __args: { role: "String!" } },
    authRoles: {
      __type: "[authRoles!]!",
      __args: {
        distinct_on: "[authRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRoles_order_by!]",
        where: "authRoles_bool_exp",
      },
    },
    authRolesAggregate: {
      __type: "authRoles_aggregate!",
      __args: {
        distinct_on: "[authRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRoles_order_by!]",
        where: "authRoles_bool_exp",
      },
    },
    authRoles_stream: {
      __type: "[authRoles!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[authRoles_stream_cursor_input]!",
        where: "authRoles_bool_exp",
      },
    },
    authUserProvider: { __type: "authUserProviders", __args: { id: "uuid!" } },
    authUserProviders: {
      __type: "[authUserProviders!]!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    authUserProvidersAggregate: {
      __type: "authUserProviders_aggregate!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    authUserProviders_stream: {
      __type: "[authUserProviders!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[authUserProviders_stream_cursor_input]!",
        where: "authUserProviders_bool_exp",
      },
    },
    authUserRole: { __type: "authUserRoles", __args: { id: "uuid!" } },
    authUserRoles: {
      __type: "[authUserRoles!]!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    authUserRolesAggregate: {
      __type: "authUserRoles_aggregate!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    authUserRoles_stream: {
      __type: "[authUserRoles!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[authUserRoles_stream_cursor_input]!",
        where: "authUserRoles_bool_exp",
      },
    },
    authUserSecurityKey: {
      __type: "authUserSecurityKeys",
      __args: { id: "uuid!" },
    },
    authUserSecurityKeys: {
      __type: "[authUserSecurityKeys!]!",
      __args: {
        distinct_on: "[authUserSecurityKeys_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserSecurityKeys_order_by!]",
        where: "authUserSecurityKeys_bool_exp",
      },
    },
    authUserSecurityKeysAggregate: {
      __type: "authUserSecurityKeys_aggregate!",
      __args: {
        distinct_on: "[authUserSecurityKeys_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserSecurityKeys_order_by!]",
        where: "authUserSecurityKeys_bool_exp",
      },
    },
    authUserSecurityKeys_stream: {
      __type: "[authUserSecurityKeys!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[authUserSecurityKeys_stream_cursor_input]!",
        where: "authUserSecurityKeys_bool_exp",
      },
    },
    bucket: { __type: "buckets", __args: { id: "String!" } },
    buckets: {
      __type: "[buckets!]!",
      __args: {
        distinct_on: "[buckets_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[buckets_order_by!]",
        where: "buckets_bool_exp",
      },
    },
    bucketsAggregate: {
      __type: "buckets_aggregate!",
      __args: {
        distinct_on: "[buckets_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[buckets_order_by!]",
        where: "buckets_bool_exp",
      },
    },
    buckets_stream: {
      __type: "[buckets!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[buckets_stream_cursor_input]!",
        where: "buckets_bool_exp",
      },
    },
    contacts: {
      __type: "[contacts!]!",
      __args: {
        distinct_on: "[contacts_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[contacts_order_by!]",
        where: "contacts_bool_exp",
      },
    },
    contacts_aggregate: {
      __type: "contacts_aggregate!",
      __args: {
        distinct_on: "[contacts_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[contacts_order_by!]",
        where: "contacts_bool_exp",
      },
    },
    contacts_by_pk: { __type: "contacts", __args: { id: "uuid!" } },
    contacts_stream: {
      __type: "[contacts!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[contacts_stream_cursor_input]!",
        where: "contacts_bool_exp",
      },
    },
    file: { __type: "files", __args: { id: "uuid!" } },
    files: {
      __type: "[files!]!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    filesAggregate: {
      __type: "files_aggregate!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    files_stream: {
      __type: "[files!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[files_stream_cursor_input]!",
        where: "files_bool_exp",
      },
    },
    todos: {
      __type: "[todos!]!",
      __args: {
        distinct_on: "[todos_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[todos_order_by!]",
        where: "todos_bool_exp",
      },
    },
    todos_aggregate: {
      __type: "todos_aggregate!",
      __args: {
        distinct_on: "[todos_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[todos_order_by!]",
        where: "todos_bool_exp",
      },
    },
    todos_by_pk: { __type: "todos", __args: { id: "uuid!" } },
    todos_stream: {
      __type: "[todos!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[todos_stream_cursor_input]!",
        where: "todos_bool_exp",
      },
    },
    user: { __type: "users", __args: { id: "uuid!" } },
    users: {
      __type: "[users!]!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    usersAggregate: {
      __type: "users_aggregate!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    users_stream: {
      __type: "[users!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[users_stream_cursor_input]!",
        where: "users_bool_exp",
      },
    },
  },
  timestamptz_comparison_exp: {
    _eq: { __type: "timestamptz" },
    _gt: { __type: "timestamptz" },
    _gte: { __type: "timestamptz" },
    _in: { __type: "[timestamptz!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "timestamptz" },
    _lte: { __type: "timestamptz" },
    _neq: { __type: "timestamptz" },
    _nin: { __type: "[timestamptz!]" },
  },
  todos: {
    __typename: { __type: "String!" },
    contact: { __type: "contacts" },
    contact_id: { __type: "uuid" },
    content: { __type: "String!" },
    id: { __type: "uuid!" },
    is_complete: { __type: "Boolean!" },
  },
  todos_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "todos_aggregate_fields" },
    nodes: { __type: "[todos!]!" },
  },
  todos_aggregate_bool_exp: {
    bool_and: { __type: "todos_aggregate_bool_exp_bool_and" },
    bool_or: { __type: "todos_aggregate_bool_exp_bool_or" },
    count: { __type: "todos_aggregate_bool_exp_count" },
  },
  todos_aggregate_bool_exp_bool_and: {
    arguments: {
      __type:
        "todos_select_column_todos_aggregate_bool_exp_bool_and_arguments_columns!",
    },
    distinct: { __type: "Boolean" },
    filter: { __type: "todos_bool_exp" },
    predicate: { __type: "Boolean_comparison_exp!" },
  },
  todos_aggregate_bool_exp_bool_or: {
    arguments: {
      __type:
        "todos_select_column_todos_aggregate_bool_exp_bool_or_arguments_columns!",
    },
    distinct: { __type: "Boolean" },
    filter: { __type: "todos_bool_exp" },
    predicate: { __type: "Boolean_comparison_exp!" },
  },
  todos_aggregate_bool_exp_count: {
    arguments: { __type: "[todos_select_column!]" },
    distinct: { __type: "Boolean" },
    filter: { __type: "todos_bool_exp" },
    predicate: { __type: "Int_comparison_exp!" },
  },
  todos_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[todos_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "todos_max_fields" },
    min: { __type: "todos_min_fields" },
  },
  todos_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "todos_max_order_by" },
    min: { __type: "todos_min_order_by" },
  },
  todos_arr_rel_insert_input: {
    data: { __type: "[todos_insert_input!]!" },
    on_conflict: { __type: "todos_on_conflict" },
  },
  todos_bool_exp: {
    _and: { __type: "[todos_bool_exp!]" },
    _not: { __type: "todos_bool_exp" },
    _or: { __type: "[todos_bool_exp!]" },
    contact: { __type: "contacts_bool_exp" },
    contact_id: { __type: "uuid_comparison_exp" },
    content: { __type: "String_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    is_complete: { __type: "Boolean_comparison_exp" },
  },
  todos_insert_input: {
    contact: { __type: "contacts_obj_rel_insert_input" },
    contact_id: { __type: "uuid" },
    content: { __type: "String" },
    id: { __type: "uuid" },
    is_complete: { __type: "Boolean" },
  },
  todos_max_fields: {
    __typename: { __type: "String!" },
    contact_id: { __type: "uuid" },
    content: { __type: "String" },
    id: { __type: "uuid" },
  },
  todos_max_order_by: {
    contact_id: { __type: "order_by" },
    content: { __type: "order_by" },
    id: { __type: "order_by" },
  },
  todos_min_fields: {
    __typename: { __type: "String!" },
    contact_id: { __type: "uuid" },
    content: { __type: "String" },
    id: { __type: "uuid" },
  },
  todos_min_order_by: {
    contact_id: { __type: "order_by" },
    content: { __type: "order_by" },
    id: { __type: "order_by" },
  },
  todos_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[todos!]!" },
  },
  todos_on_conflict: {
    constraint: { __type: "todos_constraint!" },
    update_columns: { __type: "[todos_update_column!]!" },
    where: { __type: "todos_bool_exp" },
  },
  todos_order_by: {
    contact: { __type: "contacts_order_by" },
    contact_id: { __type: "order_by" },
    content: { __type: "order_by" },
    id: { __type: "order_by" },
    is_complete: { __type: "order_by" },
  },
  todos_pk_columns_input: { id: { __type: "uuid!" } },
  todos_set_input: {
    contact_id: { __type: "uuid" },
    content: { __type: "String" },
    id: { __type: "uuid" },
    is_complete: { __type: "Boolean" },
  },
  todos_stream_cursor_input: {
    initial_value: { __type: "todos_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  todos_stream_cursor_value_input: {
    contact_id: { __type: "uuid" },
    content: { __type: "String" },
    id: { __type: "uuid" },
    is_complete: { __type: "Boolean" },
  },
  todos_updates: {
    _set: { __type: "todos_set_input" },
    where: { __type: "todos_bool_exp!" },
  },
  users: {
    __typename: { __type: "String!" },
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    currentChallenge: { __type: "String" },
    defaultRole: { __type: "String!" },
    defaultRoleByRole: { __type: "authRoles!" },
    disabled: { __type: "Boolean!" },
    displayName: { __type: "String!" },
    email: { __type: "citext" },
    emailVerified: { __type: "Boolean!" },
    id: { __type: "uuid!" },
    isAnonymous: { __type: "Boolean!" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String!" },
    metadata: { __type: "jsonb", __args: { path: "String" } },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz!" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    phoneNumberVerified: { __type: "Boolean!" },
    refreshTokens: {
      __type: "[authRefreshTokens!]!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    refreshTokens_aggregate: {
      __type: "authRefreshTokens_aggregate!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    roles: {
      __type: "[authUserRoles!]!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    roles_aggregate: {
      __type: "authUserRoles_aggregate!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    securityKeys: {
      __type: "[authUserSecurityKeys!]!",
      __args: {
        distinct_on: "[authUserSecurityKeys_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserSecurityKeys_order_by!]",
        where: "authUserSecurityKeys_bool_exp",
      },
    },
    securityKeys_aggregate: {
      __type: "authUserSecurityKeys_aggregate!",
      __args: {
        distinct_on: "[authUserSecurityKeys_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserSecurityKeys_order_by!]",
        where: "authUserSecurityKeys_bool_exp",
      },
    },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz!" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz!" },
    userProviders: {
      __type: "[authUserProviders!]!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    userProviders_aggregate: {
      __type: "authUserProviders_aggregate!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
  },
  users_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "users_aggregate_fields" },
    nodes: { __type: "[users!]!" },
  },
  users_aggregate_bool_exp: {
    bool_and: { __type: "users_aggregate_bool_exp_bool_and" },
    bool_or: { __type: "users_aggregate_bool_exp_bool_or" },
    count: { __type: "users_aggregate_bool_exp_count" },
  },
  users_aggregate_bool_exp_bool_and: {
    arguments: {
      __type:
        "users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns!",
    },
    distinct: { __type: "Boolean" },
    filter: { __type: "users_bool_exp" },
    predicate: { __type: "Boolean_comparison_exp!" },
  },
  users_aggregate_bool_exp_bool_or: {
    arguments: {
      __type:
        "users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns!",
    },
    distinct: { __type: "Boolean" },
    filter: { __type: "users_bool_exp" },
    predicate: { __type: "Boolean_comparison_exp!" },
  },
  users_aggregate_bool_exp_count: {
    arguments: { __type: "[users_select_column!]" },
    distinct: { __type: "Boolean" },
    filter: { __type: "users_bool_exp" },
    predicate: { __type: "Int_comparison_exp!" },
  },
  users_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[users_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "users_max_fields" },
    min: { __type: "users_min_fields" },
  },
  users_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "users_max_order_by" },
    min: { __type: "users_min_order_by" },
  },
  users_append_input: { metadata: { __type: "jsonb" } },
  users_arr_rel_insert_input: {
    data: { __type: "[users_insert_input!]!" },
    on_conflict: { __type: "users_on_conflict" },
  },
  users_bool_exp: {
    _and: { __type: "[users_bool_exp!]" },
    _not: { __type: "users_bool_exp" },
    _or: { __type: "[users_bool_exp!]" },
    activeMfaType: { __type: "String_comparison_exp" },
    avatarUrl: { __type: "String_comparison_exp" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    currentChallenge: { __type: "String_comparison_exp" },
    defaultRole: { __type: "String_comparison_exp" },
    defaultRoleByRole: { __type: "authRoles_bool_exp" },
    disabled: { __type: "Boolean_comparison_exp" },
    displayName: { __type: "String_comparison_exp" },
    email: { __type: "citext_comparison_exp" },
    emailVerified: { __type: "Boolean_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    isAnonymous: { __type: "Boolean_comparison_exp" },
    lastSeen: { __type: "timestamptz_comparison_exp" },
    locale: { __type: "String_comparison_exp" },
    metadata: { __type: "jsonb_comparison_exp" },
    newEmail: { __type: "citext_comparison_exp" },
    otpHash: { __type: "String_comparison_exp" },
    otpHashExpiresAt: { __type: "timestamptz_comparison_exp" },
    otpMethodLastUsed: { __type: "String_comparison_exp" },
    passwordHash: { __type: "String_comparison_exp" },
    phoneNumber: { __type: "String_comparison_exp" },
    phoneNumberVerified: { __type: "Boolean_comparison_exp" },
    refreshTokens: { __type: "authRefreshTokens_bool_exp" },
    refreshTokens_aggregate: { __type: "authRefreshTokens_aggregate_bool_exp" },
    roles: { __type: "authUserRoles_bool_exp" },
    roles_aggregate: { __type: "authUserRoles_aggregate_bool_exp" },
    securityKeys: { __type: "authUserSecurityKeys_bool_exp" },
    securityKeys_aggregate: {
      __type: "authUserSecurityKeys_aggregate_bool_exp",
    },
    ticket: { __type: "String_comparison_exp" },
    ticketExpiresAt: { __type: "timestamptz_comparison_exp" },
    totpSecret: { __type: "String_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
    userProviders: { __type: "authUserProviders_bool_exp" },
    userProviders_aggregate: { __type: "authUserProviders_aggregate_bool_exp" },
  },
  users_delete_at_path_input: { metadata: { __type: "[String!]" } },
  users_delete_elem_input: { metadata: { __type: "Int" } },
  users_delete_key_input: { metadata: { __type: "String" } },
  users_insert_input: {
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    currentChallenge: { __type: "String" },
    defaultRole: { __type: "String" },
    defaultRoleByRole: { __type: "authRoles_obj_rel_insert_input" },
    disabled: { __type: "Boolean" },
    displayName: { __type: "String" },
    email: { __type: "citext" },
    emailVerified: { __type: "Boolean" },
    id: { __type: "uuid" },
    isAnonymous: { __type: "Boolean" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String" },
    metadata: { __type: "jsonb" },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    phoneNumberVerified: { __type: "Boolean" },
    refreshTokens: { __type: "authRefreshTokens_arr_rel_insert_input" },
    roles: { __type: "authUserRoles_arr_rel_insert_input" },
    securityKeys: { __type: "authUserSecurityKeys_arr_rel_insert_input" },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userProviders: { __type: "authUserProviders_arr_rel_insert_input" },
  },
  users_max_fields: {
    __typename: { __type: "String!" },
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    currentChallenge: { __type: "String" },
    defaultRole: { __type: "String" },
    displayName: { __type: "String" },
    email: { __type: "citext" },
    id: { __type: "uuid" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String" },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
  },
  users_max_order_by: {
    activeMfaType: { __type: "order_by" },
    avatarUrl: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    currentChallenge: { __type: "order_by" },
    defaultRole: { __type: "order_by" },
    displayName: { __type: "order_by" },
    email: { __type: "order_by" },
    id: { __type: "order_by" },
    lastSeen: { __type: "order_by" },
    locale: { __type: "order_by" },
    newEmail: { __type: "order_by" },
    otpHash: { __type: "order_by" },
    otpHashExpiresAt: { __type: "order_by" },
    otpMethodLastUsed: { __type: "order_by" },
    passwordHash: { __type: "order_by" },
    phoneNumber: { __type: "order_by" },
    ticket: { __type: "order_by" },
    ticketExpiresAt: { __type: "order_by" },
    totpSecret: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  users_min_fields: {
    __typename: { __type: "String!" },
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    currentChallenge: { __type: "String" },
    defaultRole: { __type: "String" },
    displayName: { __type: "String" },
    email: { __type: "citext" },
    id: { __type: "uuid" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String" },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
  },
  users_min_order_by: {
    activeMfaType: { __type: "order_by" },
    avatarUrl: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    currentChallenge: { __type: "order_by" },
    defaultRole: { __type: "order_by" },
    displayName: { __type: "order_by" },
    email: { __type: "order_by" },
    id: { __type: "order_by" },
    lastSeen: { __type: "order_by" },
    locale: { __type: "order_by" },
    newEmail: { __type: "order_by" },
    otpHash: { __type: "order_by" },
    otpHashExpiresAt: { __type: "order_by" },
    otpMethodLastUsed: { __type: "order_by" },
    passwordHash: { __type: "order_by" },
    phoneNumber: { __type: "order_by" },
    ticket: { __type: "order_by" },
    ticketExpiresAt: { __type: "order_by" },
    totpSecret: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  users_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[users!]!" },
  },
  users_obj_rel_insert_input: {
    data: { __type: "users_insert_input!" },
    on_conflict: { __type: "users_on_conflict" },
  },
  users_on_conflict: {
    constraint: { __type: "users_constraint!" },
    update_columns: { __type: "[users_update_column!]!" },
    where: { __type: "users_bool_exp" },
  },
  users_order_by: {
    activeMfaType: { __type: "order_by" },
    avatarUrl: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    currentChallenge: { __type: "order_by" },
    defaultRole: { __type: "order_by" },
    defaultRoleByRole: { __type: "authRoles_order_by" },
    disabled: { __type: "order_by" },
    displayName: { __type: "order_by" },
    email: { __type: "order_by" },
    emailVerified: { __type: "order_by" },
    id: { __type: "order_by" },
    isAnonymous: { __type: "order_by" },
    lastSeen: { __type: "order_by" },
    locale: { __type: "order_by" },
    metadata: { __type: "order_by" },
    newEmail: { __type: "order_by" },
    otpHash: { __type: "order_by" },
    otpHashExpiresAt: { __type: "order_by" },
    otpMethodLastUsed: { __type: "order_by" },
    passwordHash: { __type: "order_by" },
    phoneNumber: { __type: "order_by" },
    phoneNumberVerified: { __type: "order_by" },
    refreshTokens_aggregate: { __type: "authRefreshTokens_aggregate_order_by" },
    roles_aggregate: { __type: "authUserRoles_aggregate_order_by" },
    securityKeys_aggregate: {
      __type: "authUserSecurityKeys_aggregate_order_by",
    },
    ticket: { __type: "order_by" },
    ticketExpiresAt: { __type: "order_by" },
    totpSecret: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    userProviders_aggregate: { __type: "authUserProviders_aggregate_order_by" },
  },
  users_pk_columns_input: { id: { __type: "uuid!" } },
  users_prepend_input: { metadata: { __type: "jsonb" } },
  users_set_input: {
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    currentChallenge: { __type: "String" },
    defaultRole: { __type: "String" },
    disabled: { __type: "Boolean" },
    displayName: { __type: "String" },
    email: { __type: "citext" },
    emailVerified: { __type: "Boolean" },
    id: { __type: "uuid" },
    isAnonymous: { __type: "Boolean" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String" },
    metadata: { __type: "jsonb" },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    phoneNumberVerified: { __type: "Boolean" },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
  },
  users_stream_cursor_input: {
    initial_value: { __type: "users_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  users_stream_cursor_value_input: {
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    currentChallenge: { __type: "String" },
    defaultRole: { __type: "String" },
    disabled: { __type: "Boolean" },
    displayName: { __type: "String" },
    email: { __type: "citext" },
    emailVerified: { __type: "Boolean" },
    id: { __type: "uuid" },
    isAnonymous: { __type: "Boolean" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String" },
    metadata: { __type: "jsonb" },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    phoneNumberVerified: { __type: "Boolean" },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
  },
  users_updates: {
    _append: { __type: "users_append_input" },
    _delete_at_path: { __type: "users_delete_at_path_input" },
    _delete_elem: { __type: "users_delete_elem_input" },
    _delete_key: { __type: "users_delete_key_input" },
    _prepend: { __type: "users_prepend_input" },
    _set: { __type: "users_set_input" },
    where: { __type: "users_bool_exp!" },
  },
  uuid_comparison_exp: {
    _eq: { __type: "uuid" },
    _gt: { __type: "uuid" },
    _gte: { __type: "uuid" },
    _in: { __type: "[uuid!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "uuid" },
    _lte: { __type: "uuid" },
    _neq: { __type: "uuid" },
    _nin: { __type: "[uuid!]" },
  },
} as const;

/**
 * columns and relationships of "apps"
 */
export interface apps {
  __typename?: "apps";
  /**
   * An object relationship
   */
  contact: contacts;
  contact_id: ScalarsEnums["uuid"];
  id: ScalarsEnums["uuid"];
  name: ScalarsEnums["String"];
}

/**
 * aggregated selection of "apps"
 */
export interface apps_aggregate {
  __typename?: "apps_aggregate";
  aggregate?: Maybe<apps_aggregate_fields>;
  nodes: Array<apps>;
}

/**
 * aggregate fields of "apps"
 */
export interface apps_aggregate_fields {
  __typename?: "apps_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<apps_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<apps_max_fields>;
  min?: Maybe<apps_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface apps_max_fields {
  __typename?: "apps_max_fields";
  contact_id?: Maybe<ScalarsEnums["uuid"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregate min on columns
 */
export interface apps_min_fields {
  __typename?: "apps_min_fields";
  contact_id?: Maybe<ScalarsEnums["uuid"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

/**
 * response of any mutation on the table "apps"
 */
export interface apps_mutation_response {
  __typename?: "apps_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<apps>;
}

/**
 * Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly.
 */
export interface authProviderRequests {
  __typename?: "authProviderRequests";
  id: ScalarsEnums["uuid"];
  options: (args?: {
    /**
     * JSON select path
     */
    path?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["jsonb"]>;
}

/**
 * aggregated selection of "auth.provider_requests"
 */
export interface authProviderRequests_aggregate {
  __typename?: "authProviderRequests_aggregate";
  aggregate?: Maybe<authProviderRequests_aggregate_fields>;
  nodes: Array<authProviderRequests>;
}

/**
 * aggregate fields of "auth.provider_requests"
 */
export interface authProviderRequests_aggregate_fields {
  __typename?: "authProviderRequests_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authProviderRequests_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authProviderRequests_max_fields>;
  min?: Maybe<authProviderRequests_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authProviderRequests_max_fields {
  __typename?: "authProviderRequests_max_fields";
  id?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface authProviderRequests_min_fields {
  __typename?: "authProviderRequests_min_fields";
  id?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "auth.provider_requests"
 */
export interface authProviderRequests_mutation_response {
  __typename?: "authProviderRequests_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authProviderRequests>;
}

/**
 * List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly.
 */
export interface authProviders {
  __typename?: "authProviders";
  id: ScalarsEnums["String"];
  /**
   * An array relationship
   */
  userProviders: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserProviders_bool_exp>;
  }) => Array<authUserProviders>;
  /**
   * An aggregate relationship
   */
  userProviders_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserProviders_bool_exp>;
  }) => authUserProviders_aggregate;
}

/**
 * aggregated selection of "auth.providers"
 */
export interface authProviders_aggregate {
  __typename?: "authProviders_aggregate";
  aggregate?: Maybe<authProviders_aggregate_fields>;
  nodes: Array<authProviders>;
}

/**
 * aggregate fields of "auth.providers"
 */
export interface authProviders_aggregate_fields {
  __typename?: "authProviders_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authProviders_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authProviders_max_fields>;
  min?: Maybe<authProviders_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authProviders_max_fields {
  __typename?: "authProviders_max_fields";
  id?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregate min on columns
 */
export interface authProviders_min_fields {
  __typename?: "authProviders_min_fields";
  id?: Maybe<ScalarsEnums["String"]>;
}

/**
 * response of any mutation on the table "auth.providers"
 */
export interface authProviders_mutation_response {
  __typename?: "authProviders_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authProviders>;
}

/**
 * User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly.
 */
export interface authRefreshTokens {
  __typename?: "authRefreshTokens";
  createdAt: ScalarsEnums["timestamptz"];
  expiresAt: ScalarsEnums["timestamptz"];
  refreshToken: ScalarsEnums["uuid"];
  /**
   * An object relationship
   */
  user: users;
  userId: ScalarsEnums["uuid"];
}

/**
 * aggregated selection of "auth.refresh_tokens"
 */
export interface authRefreshTokens_aggregate {
  __typename?: "authRefreshTokens_aggregate";
  aggregate?: Maybe<authRefreshTokens_aggregate_fields>;
  nodes: Array<authRefreshTokens>;
}

/**
 * aggregate fields of "auth.refresh_tokens"
 */
export interface authRefreshTokens_aggregate_fields {
  __typename?: "authRefreshTokens_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authRefreshTokens_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authRefreshTokens_max_fields>;
  min?: Maybe<authRefreshTokens_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authRefreshTokens_max_fields {
  __typename?: "authRefreshTokens_max_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  expiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  refreshToken?: Maybe<ScalarsEnums["uuid"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface authRefreshTokens_min_fields {
  __typename?: "authRefreshTokens_min_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  expiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  refreshToken?: Maybe<ScalarsEnums["uuid"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "auth.refresh_tokens"
 */
export interface authRefreshTokens_mutation_response {
  __typename?: "authRefreshTokens_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authRefreshTokens>;
}

/**
 * Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly.
 */
export interface authRoles {
  __typename?: "authRoles";
  role: ScalarsEnums["String"];
  /**
   * An array relationship
   */
  userRoles: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserRoles_bool_exp>;
  }) => Array<authUserRoles>;
  /**
   * An aggregate relationship
   */
  userRoles_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserRoles_bool_exp>;
  }) => authUserRoles_aggregate;
  /**
   * An array relationship
   */
  usersByDefaultRole: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<users_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<users_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
  /**
   * An aggregate relationship
   */
  usersByDefaultRole_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<users_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<users_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<users_bool_exp>;
  }) => users_aggregate;
}

/**
 * aggregated selection of "auth.roles"
 */
export interface authRoles_aggregate {
  __typename?: "authRoles_aggregate";
  aggregate?: Maybe<authRoles_aggregate_fields>;
  nodes: Array<authRoles>;
}

/**
 * aggregate fields of "auth.roles"
 */
export interface authRoles_aggregate_fields {
  __typename?: "authRoles_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authRoles_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authRoles_max_fields>;
  min?: Maybe<authRoles_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authRoles_max_fields {
  __typename?: "authRoles_max_fields";
  role?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregate min on columns
 */
export interface authRoles_min_fields {
  __typename?: "authRoles_min_fields";
  role?: Maybe<ScalarsEnums["String"]>;
}

/**
 * response of any mutation on the table "auth.roles"
 */
export interface authRoles_mutation_response {
  __typename?: "authRoles_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authRoles>;
}

/**
 * Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly.
 */
export interface authUserProviders {
  __typename?: "authUserProviders";
  accessToken: ScalarsEnums["String"];
  createdAt: ScalarsEnums["timestamptz"];
  id: ScalarsEnums["uuid"];
  /**
   * An object relationship
   */
  provider: authProviders;
  providerId: ScalarsEnums["String"];
  providerUserId: ScalarsEnums["String"];
  refreshToken?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["timestamptz"];
  /**
   * An object relationship
   */
  user: users;
  userId: ScalarsEnums["uuid"];
}

/**
 * aggregated selection of "auth.user_providers"
 */
export interface authUserProviders_aggregate {
  __typename?: "authUserProviders_aggregate";
  aggregate?: Maybe<authUserProviders_aggregate_fields>;
  nodes: Array<authUserProviders>;
}

/**
 * aggregate fields of "auth.user_providers"
 */
export interface authUserProviders_aggregate_fields {
  __typename?: "authUserProviders_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authUserProviders_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authUserProviders_max_fields>;
  min?: Maybe<authUserProviders_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authUserProviders_max_fields {
  __typename?: "authUserProviders_max_fields";
  accessToken?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  providerId?: Maybe<ScalarsEnums["String"]>;
  providerUserId?: Maybe<ScalarsEnums["String"]>;
  refreshToken?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface authUserProviders_min_fields {
  __typename?: "authUserProviders_min_fields";
  accessToken?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  providerId?: Maybe<ScalarsEnums["String"]>;
  providerUserId?: Maybe<ScalarsEnums["String"]>;
  refreshToken?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "auth.user_providers"
 */
export interface authUserProviders_mutation_response {
  __typename?: "authUserProviders_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authUserProviders>;
}

/**
 * Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly.
 */
export interface authUserRoles {
  __typename?: "authUserRoles";
  createdAt: ScalarsEnums["timestamptz"];
  id: ScalarsEnums["uuid"];
  role: ScalarsEnums["String"];
  /**
   * An object relationship
   */
  roleByRole: authRoles;
  /**
   * An object relationship
   */
  user: users;
  userId: ScalarsEnums["uuid"];
}

/**
 * aggregated selection of "auth.user_roles"
 */
export interface authUserRoles_aggregate {
  __typename?: "authUserRoles_aggregate";
  aggregate?: Maybe<authUserRoles_aggregate_fields>;
  nodes: Array<authUserRoles>;
}

/**
 * aggregate fields of "auth.user_roles"
 */
export interface authUserRoles_aggregate_fields {
  __typename?: "authUserRoles_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authUserRoles_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authUserRoles_max_fields>;
  min?: Maybe<authUserRoles_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authUserRoles_max_fields {
  __typename?: "authUserRoles_max_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  role?: Maybe<ScalarsEnums["String"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface authUserRoles_min_fields {
  __typename?: "authUserRoles_min_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  role?: Maybe<ScalarsEnums["String"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "auth.user_roles"
 */
export interface authUserRoles_mutation_response {
  __typename?: "authUserRoles_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authUserRoles>;
}

/**
 * User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly.
 */
export interface authUserSecurityKeys {
  __typename?: "authUserSecurityKeys";
  counter: ScalarsEnums["bigint"];
  credentialId: ScalarsEnums["String"];
  credentialPublicKey?: Maybe<ScalarsEnums["bytea"]>;
  id: ScalarsEnums["uuid"];
  nickname?: Maybe<ScalarsEnums["String"]>;
  transports: ScalarsEnums["String"];
  /**
   * An object relationship
   */
  user: users;
  userId: ScalarsEnums["uuid"];
}

/**
 * aggregated selection of "auth.user_security_keys"
 */
export interface authUserSecurityKeys_aggregate {
  __typename?: "authUserSecurityKeys_aggregate";
  aggregate?: Maybe<authUserSecurityKeys_aggregate_fields>;
  nodes: Array<authUserSecurityKeys>;
}

/**
 * aggregate fields of "auth.user_security_keys"
 */
export interface authUserSecurityKeys_aggregate_fields {
  __typename?: "authUserSecurityKeys_aggregate_fields";
  avg?: Maybe<authUserSecurityKeys_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<authUserSecurityKeys_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authUserSecurityKeys_max_fields>;
  min?: Maybe<authUserSecurityKeys_min_fields>;
  stddev?: Maybe<authUserSecurityKeys_stddev_fields>;
  stddev_pop?: Maybe<authUserSecurityKeys_stddev_pop_fields>;
  stddev_samp?: Maybe<authUserSecurityKeys_stddev_samp_fields>;
  sum?: Maybe<authUserSecurityKeys_sum_fields>;
  var_pop?: Maybe<authUserSecurityKeys_var_pop_fields>;
  var_samp?: Maybe<authUserSecurityKeys_var_samp_fields>;
  variance?: Maybe<authUserSecurityKeys_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface authUserSecurityKeys_avg_fields {
  __typename?: "authUserSecurityKeys_avg_fields";
  counter?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate max on columns
 */
export interface authUserSecurityKeys_max_fields {
  __typename?: "authUserSecurityKeys_max_fields";
  counter?: Maybe<ScalarsEnums["bigint"]>;
  credentialId?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  nickname?: Maybe<ScalarsEnums["String"]>;
  transports?: Maybe<ScalarsEnums["String"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface authUserSecurityKeys_min_fields {
  __typename?: "authUserSecurityKeys_min_fields";
  counter?: Maybe<ScalarsEnums["bigint"]>;
  credentialId?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  nickname?: Maybe<ScalarsEnums["String"]>;
  transports?: Maybe<ScalarsEnums["String"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "auth.user_security_keys"
 */
export interface authUserSecurityKeys_mutation_response {
  __typename?: "authUserSecurityKeys_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authUserSecurityKeys>;
}

/**
 * aggregate stddev on columns
 */
export interface authUserSecurityKeys_stddev_fields {
  __typename?: "authUserSecurityKeys_stddev_fields";
  counter?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface authUserSecurityKeys_stddev_pop_fields {
  __typename?: "authUserSecurityKeys_stddev_pop_fields";
  counter?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface authUserSecurityKeys_stddev_samp_fields {
  __typename?: "authUserSecurityKeys_stddev_samp_fields";
  counter?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate sum on columns
 */
export interface authUserSecurityKeys_sum_fields {
  __typename?: "authUserSecurityKeys_sum_fields";
  counter?: Maybe<ScalarsEnums["bigint"]>;
}

/**
 * aggregate var_pop on columns
 */
export interface authUserSecurityKeys_var_pop_fields {
  __typename?: "authUserSecurityKeys_var_pop_fields";
  counter?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate var_samp on columns
 */
export interface authUserSecurityKeys_var_samp_fields {
  __typename?: "authUserSecurityKeys_var_samp_fields";
  counter?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate variance on columns
 */
export interface authUserSecurityKeys_variance_fields {
  __typename?: "authUserSecurityKeys_variance_fields";
  counter?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * columns and relationships of "storage.buckets"
 */
export interface buckets {
  __typename?: "buckets";
  cacheControl?: Maybe<ScalarsEnums["String"]>;
  createdAt: ScalarsEnums["timestamptz"];
  downloadExpiration: ScalarsEnums["Int"];
  /**
   * An array relationship
   */
  files: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<files_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<files_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<files_bool_exp>;
  }) => Array<files>;
  /**
   * An aggregate relationship
   */
  files_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<files_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<files_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<files_bool_exp>;
  }) => files_aggregate;
  id: ScalarsEnums["String"];
  maxUploadFileSize: ScalarsEnums["Int"];
  minUploadFileSize: ScalarsEnums["Int"];
  presignedUrlsEnabled: ScalarsEnums["Boolean"];
  updatedAt: ScalarsEnums["timestamptz"];
}

/**
 * aggregated selection of "storage.buckets"
 */
export interface buckets_aggregate {
  __typename?: "buckets_aggregate";
  aggregate?: Maybe<buckets_aggregate_fields>;
  nodes: Array<buckets>;
}

/**
 * aggregate fields of "storage.buckets"
 */
export interface buckets_aggregate_fields {
  __typename?: "buckets_aggregate_fields";
  avg?: Maybe<buckets_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<buckets_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<buckets_max_fields>;
  min?: Maybe<buckets_min_fields>;
  stddev?: Maybe<buckets_stddev_fields>;
  stddev_pop?: Maybe<buckets_stddev_pop_fields>;
  stddev_samp?: Maybe<buckets_stddev_samp_fields>;
  sum?: Maybe<buckets_sum_fields>;
  var_pop?: Maybe<buckets_var_pop_fields>;
  var_samp?: Maybe<buckets_var_samp_fields>;
  variance?: Maybe<buckets_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface buckets_avg_fields {
  __typename?: "buckets_avg_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate max on columns
 */
export interface buckets_max_fields {
  __typename?: "buckets_max_fields";
  cacheControl?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  downloadExpiration?: Maybe<ScalarsEnums["Int"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * aggregate min on columns
 */
export interface buckets_min_fields {
  __typename?: "buckets_min_fields";
  cacheControl?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  downloadExpiration?: Maybe<ScalarsEnums["Int"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * response of any mutation on the table "storage.buckets"
 */
export interface buckets_mutation_response {
  __typename?: "buckets_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<buckets>;
}

/**
 * aggregate stddev on columns
 */
export interface buckets_stddev_fields {
  __typename?: "buckets_stddev_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface buckets_stddev_pop_fields {
  __typename?: "buckets_stddev_pop_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface buckets_stddev_samp_fields {
  __typename?: "buckets_stddev_samp_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate sum on columns
 */
export interface buckets_sum_fields {
  __typename?: "buckets_sum_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Int"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * aggregate var_pop on columns
 */
export interface buckets_var_pop_fields {
  __typename?: "buckets_var_pop_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate var_samp on columns
 */
export interface buckets_var_samp_fields {
  __typename?: "buckets_var_samp_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate variance on columns
 */
export interface buckets_variance_fields {
  __typename?: "buckets_variance_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * columns and relationships of "contacts"
 */
export interface contacts {
  __typename?: "contacts";
  /**
   * An array relationship
   */
  apps: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<apps_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<apps_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<apps_bool_exp>;
  }) => Array<apps>;
  /**
   * An aggregate relationship
   */
  apps_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<apps_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<apps_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<apps_bool_exp>;
  }) => apps_aggregate;
  firstName: ScalarsEnums["String"];
  id: ScalarsEnums["uuid"];
  lastName: ScalarsEnums["String"];
  /**
   * An array relationship
   */
  todos: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<todos_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<todos_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<todos_bool_exp>;
  }) => Array<todos>;
  /**
   * An aggregate relationship
   */
  todos_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<todos_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<todos_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<todos_bool_exp>;
  }) => todos_aggregate;
}

/**
 * aggregated selection of "contacts"
 */
export interface contacts_aggregate {
  __typename?: "contacts_aggregate";
  aggregate?: Maybe<contacts_aggregate_fields>;
  nodes: Array<contacts>;
}

/**
 * aggregate fields of "contacts"
 */
export interface contacts_aggregate_fields {
  __typename?: "contacts_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<contacts_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<contacts_max_fields>;
  min?: Maybe<contacts_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface contacts_max_fields {
  __typename?: "contacts_max_fields";
  firstName?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  lastName?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregate min on columns
 */
export interface contacts_min_fields {
  __typename?: "contacts_min_fields";
  firstName?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  lastName?: Maybe<ScalarsEnums["String"]>;
}

/**
 * response of any mutation on the table "contacts"
 */
export interface contacts_mutation_response {
  __typename?: "contacts_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<contacts>;
}

/**
 * columns and relationships of "storage.files"
 */
export interface files {
  __typename?: "files";
  /**
   * An object relationship
   */
  bucket: buckets;
  bucketId: ScalarsEnums["String"];
  createdAt: ScalarsEnums["timestamptz"];
  etag?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["uuid"];
  isUploaded?: Maybe<ScalarsEnums["Boolean"]>;
  mimeType?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  size?: Maybe<ScalarsEnums["Int"]>;
  updatedAt: ScalarsEnums["timestamptz"];
  uploadedByUserId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregated selection of "storage.files"
 */
export interface files_aggregate {
  __typename?: "files_aggregate";
  aggregate?: Maybe<files_aggregate_fields>;
  nodes: Array<files>;
}

/**
 * aggregate fields of "storage.files"
 */
export interface files_aggregate_fields {
  __typename?: "files_aggregate_fields";
  avg?: Maybe<files_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<files_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<files_max_fields>;
  min?: Maybe<files_min_fields>;
  stddev?: Maybe<files_stddev_fields>;
  stddev_pop?: Maybe<files_stddev_pop_fields>;
  stddev_samp?: Maybe<files_stddev_samp_fields>;
  sum?: Maybe<files_sum_fields>;
  var_pop?: Maybe<files_var_pop_fields>;
  var_samp?: Maybe<files_var_samp_fields>;
  variance?: Maybe<files_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface files_avg_fields {
  __typename?: "files_avg_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate max on columns
 */
export interface files_max_fields {
  __typename?: "files_max_fields";
  bucketId?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  etag?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  mimeType?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  size?: Maybe<ScalarsEnums["Int"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
  uploadedByUserId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface files_min_fields {
  __typename?: "files_min_fields";
  bucketId?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  etag?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  mimeType?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  size?: Maybe<ScalarsEnums["Int"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
  uploadedByUserId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "storage.files"
 */
export interface files_mutation_response {
  __typename?: "files_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<files>;
}

/**
 * aggregate stddev on columns
 */
export interface files_stddev_fields {
  __typename?: "files_stddev_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface files_stddev_pop_fields {
  __typename?: "files_stddev_pop_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface files_stddev_samp_fields {
  __typename?: "files_stddev_samp_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate sum on columns
 */
export interface files_sum_fields {
  __typename?: "files_sum_fields";
  size?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * aggregate var_pop on columns
 */
export interface files_var_pop_fields {
  __typename?: "files_var_pop_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate var_samp on columns
 */
export interface files_var_samp_fields {
  __typename?: "files_var_samp_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate variance on columns
 */
export interface files_variance_fields {
  __typename?: "files_variance_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

export interface Mutation {
  __typename?: "Mutation";
  deleteAuthProvider: (args: { id: Scalars["String"] }) => Maybe<authProviders>;
  deleteAuthProviderRequest: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authProviderRequests>;
  deleteAuthProviderRequests: (args: {
    where: authProviderRequests_bool_exp;
  }) => Maybe<authProviderRequests_mutation_response>;
  deleteAuthProviders: (args: {
    where: authProviders_bool_exp;
  }) => Maybe<authProviders_mutation_response>;
  deleteAuthRefreshToken: (args: {
    refreshToken: Scalars["uuid"];
  }) => Maybe<authRefreshTokens>;
  deleteAuthRefreshTokens: (args: {
    where: authRefreshTokens_bool_exp;
  }) => Maybe<authRefreshTokens_mutation_response>;
  deleteAuthRole: (args: { role: Scalars["String"] }) => Maybe<authRoles>;
  deleteAuthRoles: (args: {
    where: authRoles_bool_exp;
  }) => Maybe<authRoles_mutation_response>;
  deleteAuthUserProvider: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authUserProviders>;
  deleteAuthUserProviders: (args: {
    where: authUserProviders_bool_exp;
  }) => Maybe<authUserProviders_mutation_response>;
  deleteAuthUserRole: (args: { id: Scalars["uuid"] }) => Maybe<authUserRoles>;
  deleteAuthUserRoles: (args: {
    where: authUserRoles_bool_exp;
  }) => Maybe<authUserRoles_mutation_response>;
  deleteAuthUserSecurityKey: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authUserSecurityKeys>;
  deleteAuthUserSecurityKeys: (args: {
    where: authUserSecurityKeys_bool_exp;
  }) => Maybe<authUserSecurityKeys_mutation_response>;
  deleteBucket: (args: { id: Scalars["String"] }) => Maybe<buckets>;
  deleteBuckets: (args: {
    where: buckets_bool_exp;
  }) => Maybe<buckets_mutation_response>;
  deleteFile: (args: { id: Scalars["uuid"] }) => Maybe<files>;
  deleteFiles: (args: {
    where: files_bool_exp;
  }) => Maybe<files_mutation_response>;
  deleteUser: (args: { id: Scalars["uuid"] }) => Maybe<users>;
  deleteUsers: (args: {
    where: users_bool_exp;
  }) => Maybe<users_mutation_response>;
  delete_apps: (args: {
    where: apps_bool_exp;
  }) => Maybe<apps_mutation_response>;
  delete_apps_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<apps>;
  delete_contacts: (args: {
    where: contacts_bool_exp;
  }) => Maybe<contacts_mutation_response>;
  delete_contacts_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<contacts>;
  delete_todos: (args: {
    where: todos_bool_exp;
  }) => Maybe<todos_mutation_response>;
  delete_todos_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<todos>;
  insertAuthProvider: (args: {
    object: authProviders_insert_input;
    on_conflict?: Maybe<authProviders_on_conflict>;
  }) => Maybe<authProviders>;
  insertAuthProviderRequest: (args: {
    object: authProviderRequests_insert_input;
    on_conflict?: Maybe<authProviderRequests_on_conflict>;
  }) => Maybe<authProviderRequests>;
  insertAuthProviderRequests: (args: {
    objects: Array<authProviderRequests_insert_input>;
    on_conflict?: Maybe<authProviderRequests_on_conflict>;
  }) => Maybe<authProviderRequests_mutation_response>;
  insertAuthProviders: (args: {
    objects: Array<authProviders_insert_input>;
    on_conflict?: Maybe<authProviders_on_conflict>;
  }) => Maybe<authProviders_mutation_response>;
  insertAuthRefreshToken: (args: {
    object: authRefreshTokens_insert_input;
    on_conflict?: Maybe<authRefreshTokens_on_conflict>;
  }) => Maybe<authRefreshTokens>;
  insertAuthRefreshTokens: (args: {
    objects: Array<authRefreshTokens_insert_input>;
    on_conflict?: Maybe<authRefreshTokens_on_conflict>;
  }) => Maybe<authRefreshTokens_mutation_response>;
  insertAuthRole: (args: {
    object: authRoles_insert_input;
    on_conflict?: Maybe<authRoles_on_conflict>;
  }) => Maybe<authRoles>;
  insertAuthRoles: (args: {
    objects: Array<authRoles_insert_input>;
    on_conflict?: Maybe<authRoles_on_conflict>;
  }) => Maybe<authRoles_mutation_response>;
  insertAuthUserProvider: (args: {
    object: authUserProviders_insert_input;
    on_conflict?: Maybe<authUserProviders_on_conflict>;
  }) => Maybe<authUserProviders>;
  insertAuthUserProviders: (args: {
    objects: Array<authUserProviders_insert_input>;
    on_conflict?: Maybe<authUserProviders_on_conflict>;
  }) => Maybe<authUserProviders_mutation_response>;
  insertAuthUserRole: (args: {
    object: authUserRoles_insert_input;
    on_conflict?: Maybe<authUserRoles_on_conflict>;
  }) => Maybe<authUserRoles>;
  insertAuthUserRoles: (args: {
    objects: Array<authUserRoles_insert_input>;
    on_conflict?: Maybe<authUserRoles_on_conflict>;
  }) => Maybe<authUserRoles_mutation_response>;
  insertAuthUserSecurityKey: (args: {
    object: authUserSecurityKeys_insert_input;
    on_conflict?: Maybe<authUserSecurityKeys_on_conflict>;
  }) => Maybe<authUserSecurityKeys>;
  insertAuthUserSecurityKeys: (args: {
    objects: Array<authUserSecurityKeys_insert_input>;
    on_conflict?: Maybe<authUserSecurityKeys_on_conflict>;
  }) => Maybe<authUserSecurityKeys_mutation_response>;
  insertBucket: (args: {
    object: buckets_insert_input;
    on_conflict?: Maybe<buckets_on_conflict>;
  }) => Maybe<buckets>;
  insertBuckets: (args: {
    objects: Array<buckets_insert_input>;
    on_conflict?: Maybe<buckets_on_conflict>;
  }) => Maybe<buckets_mutation_response>;
  insertFile: (args: {
    object: files_insert_input;
    on_conflict?: Maybe<files_on_conflict>;
  }) => Maybe<files>;
  insertFiles: (args: {
    objects: Array<files_insert_input>;
    on_conflict?: Maybe<files_on_conflict>;
  }) => Maybe<files_mutation_response>;
  insertUser: (args: {
    object: users_insert_input;
    on_conflict?: Maybe<users_on_conflict>;
  }) => Maybe<users>;
  insertUsers: (args: {
    objects: Array<users_insert_input>;
    on_conflict?: Maybe<users_on_conflict>;
  }) => Maybe<users_mutation_response>;
  insert_apps: (args: {
    objects: Array<apps_insert_input>;
    on_conflict?: Maybe<apps_on_conflict>;
  }) => Maybe<apps_mutation_response>;
  insert_apps_one: (args: {
    object: apps_insert_input;
    on_conflict?: Maybe<apps_on_conflict>;
  }) => Maybe<apps>;
  insert_contacts: (args: {
    objects: Array<contacts_insert_input>;
    on_conflict?: Maybe<contacts_on_conflict>;
  }) => Maybe<contacts_mutation_response>;
  insert_contacts_one: (args: {
    object: contacts_insert_input;
    on_conflict?: Maybe<contacts_on_conflict>;
  }) => Maybe<contacts>;
  insert_todos: (args: {
    objects: Array<todos_insert_input>;
    on_conflict?: Maybe<todos_on_conflict>;
  }) => Maybe<todos_mutation_response>;
  insert_todos_one: (args: {
    object: todos_insert_input;
    on_conflict?: Maybe<todos_on_conflict>;
  }) => Maybe<todos>;
  updateAuthProvider: (args: {
    _set?: Maybe<authProviders_set_input>;
    pk_columns: authProviders_pk_columns_input;
  }) => Maybe<authProviders>;
  updateAuthProviderRequest: (args: {
    _append?: Maybe<authProviderRequests_append_input>;
    _delete_at_path?: Maybe<authProviderRequests_delete_at_path_input>;
    _delete_elem?: Maybe<authProviderRequests_delete_elem_input>;
    _delete_key?: Maybe<authProviderRequests_delete_key_input>;
    _prepend?: Maybe<authProviderRequests_prepend_input>;
    _set?: Maybe<authProviderRequests_set_input>;
    pk_columns: authProviderRequests_pk_columns_input;
  }) => Maybe<authProviderRequests>;
  updateAuthProviderRequests: (args: {
    _append?: Maybe<authProviderRequests_append_input>;
    _delete_at_path?: Maybe<authProviderRequests_delete_at_path_input>;
    _delete_elem?: Maybe<authProviderRequests_delete_elem_input>;
    _delete_key?: Maybe<authProviderRequests_delete_key_input>;
    _prepend?: Maybe<authProviderRequests_prepend_input>;
    _set?: Maybe<authProviderRequests_set_input>;
    where: authProviderRequests_bool_exp;
  }) => Maybe<authProviderRequests_mutation_response>;
  updateAuthProviders: (args: {
    _set?: Maybe<authProviders_set_input>;
    where: authProviders_bool_exp;
  }) => Maybe<authProviders_mutation_response>;
  updateAuthRefreshToken: (args: {
    _set?: Maybe<authRefreshTokens_set_input>;
    pk_columns: authRefreshTokens_pk_columns_input;
  }) => Maybe<authRefreshTokens>;
  updateAuthRefreshTokens: (args: {
    _set?: Maybe<authRefreshTokens_set_input>;
    where: authRefreshTokens_bool_exp;
  }) => Maybe<authRefreshTokens_mutation_response>;
  updateAuthRole: (args: {
    _set?: Maybe<authRoles_set_input>;
    pk_columns: authRoles_pk_columns_input;
  }) => Maybe<authRoles>;
  updateAuthRoles: (args: {
    _set?: Maybe<authRoles_set_input>;
    where: authRoles_bool_exp;
  }) => Maybe<authRoles_mutation_response>;
  updateAuthUserProvider: (args: {
    _set?: Maybe<authUserProviders_set_input>;
    pk_columns: authUserProviders_pk_columns_input;
  }) => Maybe<authUserProviders>;
  updateAuthUserProviders: (args: {
    _set?: Maybe<authUserProviders_set_input>;
    where: authUserProviders_bool_exp;
  }) => Maybe<authUserProviders_mutation_response>;
  updateAuthUserRole: (args: {
    _set?: Maybe<authUserRoles_set_input>;
    pk_columns: authUserRoles_pk_columns_input;
  }) => Maybe<authUserRoles>;
  updateAuthUserRoles: (args: {
    _set?: Maybe<authUserRoles_set_input>;
    where: authUserRoles_bool_exp;
  }) => Maybe<authUserRoles_mutation_response>;
  updateAuthUserSecurityKey: (args: {
    _inc?: Maybe<authUserSecurityKeys_inc_input>;
    _set?: Maybe<authUserSecurityKeys_set_input>;
    pk_columns: authUserSecurityKeys_pk_columns_input;
  }) => Maybe<authUserSecurityKeys>;
  updateAuthUserSecurityKeys: (args: {
    _inc?: Maybe<authUserSecurityKeys_inc_input>;
    _set?: Maybe<authUserSecurityKeys_set_input>;
    where: authUserSecurityKeys_bool_exp;
  }) => Maybe<authUserSecurityKeys_mutation_response>;
  updateBucket: (args: {
    _inc?: Maybe<buckets_inc_input>;
    _set?: Maybe<buckets_set_input>;
    pk_columns: buckets_pk_columns_input;
  }) => Maybe<buckets>;
  updateBuckets: (args: {
    _inc?: Maybe<buckets_inc_input>;
    _set?: Maybe<buckets_set_input>;
    where: buckets_bool_exp;
  }) => Maybe<buckets_mutation_response>;
  updateFile: (args: {
    _inc?: Maybe<files_inc_input>;
    _set?: Maybe<files_set_input>;
    pk_columns: files_pk_columns_input;
  }) => Maybe<files>;
  updateFiles: (args: {
    _inc?: Maybe<files_inc_input>;
    _set?: Maybe<files_set_input>;
    where: files_bool_exp;
  }) => Maybe<files_mutation_response>;
  updateUser: (args: {
    _append?: Maybe<users_append_input>;
    _delete_at_path?: Maybe<users_delete_at_path_input>;
    _delete_elem?: Maybe<users_delete_elem_input>;
    _delete_key?: Maybe<users_delete_key_input>;
    _prepend?: Maybe<users_prepend_input>;
    _set?: Maybe<users_set_input>;
    pk_columns: users_pk_columns_input;
  }) => Maybe<users>;
  updateUsers: (args: {
    _append?: Maybe<users_append_input>;
    _delete_at_path?: Maybe<users_delete_at_path_input>;
    _delete_elem?: Maybe<users_delete_elem_input>;
    _delete_key?: Maybe<users_delete_key_input>;
    _prepend?: Maybe<users_prepend_input>;
    _set?: Maybe<users_set_input>;
    where: users_bool_exp;
  }) => Maybe<users_mutation_response>;
  update_apps: (args: {
    _set?: Maybe<apps_set_input>;
    where: apps_bool_exp;
  }) => Maybe<apps_mutation_response>;
  update_apps_by_pk: (args: {
    _set?: Maybe<apps_set_input>;
    pk_columns: apps_pk_columns_input;
  }) => Maybe<apps>;
  update_apps_many: (args: {
    updates: Array<apps_updates>;
  }) => Maybe<Array<Maybe<apps_mutation_response>>>;
  update_authProviderRequests_many: (args: {
    updates: Array<authProviderRequests_updates>;
  }) => Maybe<Array<Maybe<authProviderRequests_mutation_response>>>;
  update_authProviders_many: (args: {
    updates: Array<authProviders_updates>;
  }) => Maybe<Array<Maybe<authProviders_mutation_response>>>;
  update_authRefreshTokens_many: (args: {
    updates: Array<authRefreshTokens_updates>;
  }) => Maybe<Array<Maybe<authRefreshTokens_mutation_response>>>;
  update_authRoles_many: (args: {
    updates: Array<authRoles_updates>;
  }) => Maybe<Array<Maybe<authRoles_mutation_response>>>;
  update_authUserProviders_many: (args: {
    updates: Array<authUserProviders_updates>;
  }) => Maybe<Array<Maybe<authUserProviders_mutation_response>>>;
  update_authUserRoles_many: (args: {
    updates: Array<authUserRoles_updates>;
  }) => Maybe<Array<Maybe<authUserRoles_mutation_response>>>;
  update_authUserSecurityKeys_many: (args: {
    updates: Array<authUserSecurityKeys_updates>;
  }) => Maybe<Array<Maybe<authUserSecurityKeys_mutation_response>>>;
  update_buckets_many: (args: {
    updates: Array<buckets_updates>;
  }) => Maybe<Array<Maybe<buckets_mutation_response>>>;
  update_contacts: (args: {
    _set?: Maybe<contacts_set_input>;
    where: contacts_bool_exp;
  }) => Maybe<contacts_mutation_response>;
  update_contacts_by_pk: (args: {
    _set?: Maybe<contacts_set_input>;
    pk_columns: contacts_pk_columns_input;
  }) => Maybe<contacts>;
  update_contacts_many: (args: {
    updates: Array<contacts_updates>;
  }) => Maybe<Array<Maybe<contacts_mutation_response>>>;
  update_files_many: (args: {
    updates: Array<files_updates>;
  }) => Maybe<Array<Maybe<files_mutation_response>>>;
  update_todos: (args: {
    _set?: Maybe<todos_set_input>;
    where: todos_bool_exp;
  }) => Maybe<todos_mutation_response>;
  update_todos_by_pk: (args: {
    _set?: Maybe<todos_set_input>;
    pk_columns: todos_pk_columns_input;
  }) => Maybe<todos>;
  update_todos_many: (args: {
    updates: Array<todos_updates>;
  }) => Maybe<Array<Maybe<todos_mutation_response>>>;
  update_users_many: (args: {
    updates: Array<users_updates>;
  }) => Maybe<Array<Maybe<users_mutation_response>>>;
}

export interface Query {
  __typename?: "Query";
  apps: (args?: {
    distinct_on?: Maybe<Array<apps_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<apps_order_by>>;
    where?: Maybe<apps_bool_exp>;
  }) => Array<apps>;
  apps_aggregate: (args?: {
    distinct_on?: Maybe<Array<apps_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<apps_order_by>>;
    where?: Maybe<apps_bool_exp>;
  }) => apps_aggregate;
  apps_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<apps>;
  authProvider: (args: { id: Scalars["String"] }) => Maybe<authProviders>;
  authProviderRequest: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authProviderRequests>;
  authProviderRequests: (args?: {
    distinct_on?: Maybe<Array<authProviderRequests_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviderRequests_order_by>>;
    where?: Maybe<authProviderRequests_bool_exp>;
  }) => Array<authProviderRequests>;
  authProviderRequestsAggregate: (args?: {
    distinct_on?: Maybe<Array<authProviderRequests_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviderRequests_order_by>>;
    where?: Maybe<authProviderRequests_bool_exp>;
  }) => authProviderRequests_aggregate;
  authProviders: (args?: {
    distinct_on?: Maybe<Array<authProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviders_order_by>>;
    where?: Maybe<authProviders_bool_exp>;
  }) => Array<authProviders>;
  authProvidersAggregate: (args?: {
    distinct_on?: Maybe<Array<authProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviders_order_by>>;
    where?: Maybe<authProviders_bool_exp>;
  }) => authProviders_aggregate;
  authRefreshToken: (args: {
    refreshToken: Scalars["uuid"];
  }) => Maybe<authRefreshTokens>;
  authRefreshTokens: (args?: {
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => Array<authRefreshTokens>;
  authRefreshTokensAggregate: (args?: {
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => authRefreshTokens_aggregate;
  authRole: (args: { role: Scalars["String"] }) => Maybe<authRoles>;
  authRoles: (args?: {
    distinct_on?: Maybe<Array<authRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRoles_order_by>>;
    where?: Maybe<authRoles_bool_exp>;
  }) => Array<authRoles>;
  authRolesAggregate: (args?: {
    distinct_on?: Maybe<Array<authRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRoles_order_by>>;
    where?: Maybe<authRoles_bool_exp>;
  }) => authRoles_aggregate;
  authUserProvider: (args: { id: Scalars["uuid"] }) => Maybe<authUserProviders>;
  authUserProviders: (args?: {
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    where?: Maybe<authUserProviders_bool_exp>;
  }) => Array<authUserProviders>;
  authUserProvidersAggregate: (args?: {
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    where?: Maybe<authUserProviders_bool_exp>;
  }) => authUserProviders_aggregate;
  authUserRole: (args: { id: Scalars["uuid"] }) => Maybe<authUserRoles>;
  authUserRoles: (args?: {
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    where?: Maybe<authUserRoles_bool_exp>;
  }) => Array<authUserRoles>;
  authUserRolesAggregate: (args?: {
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    where?: Maybe<authUserRoles_bool_exp>;
  }) => authUserRoles_aggregate;
  authUserSecurityKey: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authUserSecurityKeys>;
  authUserSecurityKeys: (args?: {
    distinct_on?: Maybe<Array<authUserSecurityKeys_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserSecurityKeys_order_by>>;
    where?: Maybe<authUserSecurityKeys_bool_exp>;
  }) => Array<authUserSecurityKeys>;
  authUserSecurityKeysAggregate: (args?: {
    distinct_on?: Maybe<Array<authUserSecurityKeys_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserSecurityKeys_order_by>>;
    where?: Maybe<authUserSecurityKeys_bool_exp>;
  }) => authUserSecurityKeys_aggregate;
  bucket: (args: { id: Scalars["String"] }) => Maybe<buckets>;
  buckets: (args?: {
    distinct_on?: Maybe<Array<buckets_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<buckets_order_by>>;
    where?: Maybe<buckets_bool_exp>;
  }) => Array<buckets>;
  bucketsAggregate: (args?: {
    distinct_on?: Maybe<Array<buckets_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<buckets_order_by>>;
    where?: Maybe<buckets_bool_exp>;
  }) => buckets_aggregate;
  contacts: (args?: {
    distinct_on?: Maybe<Array<contacts_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<contacts_order_by>>;
    where?: Maybe<contacts_bool_exp>;
  }) => Array<contacts>;
  contacts_aggregate: (args?: {
    distinct_on?: Maybe<Array<contacts_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<contacts_order_by>>;
    where?: Maybe<contacts_bool_exp>;
  }) => contacts_aggregate;
  contacts_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<contacts>;
  file: (args: { id: Scalars["uuid"] }) => Maybe<files>;
  files: (args?: {
    distinct_on?: Maybe<Array<files_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<files_order_by>>;
    where?: Maybe<files_bool_exp>;
  }) => Array<files>;
  filesAggregate: (args?: {
    distinct_on?: Maybe<Array<files_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<files_order_by>>;
    where?: Maybe<files_bool_exp>;
  }) => files_aggregate;
  todos: (args?: {
    distinct_on?: Maybe<Array<todos_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<todos_order_by>>;
    where?: Maybe<todos_bool_exp>;
  }) => Array<todos>;
  todos_aggregate: (args?: {
    distinct_on?: Maybe<Array<todos_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<todos_order_by>>;
    where?: Maybe<todos_bool_exp>;
  }) => todos_aggregate;
  todos_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<todos>;
  user: (args: { id: Scalars["uuid"] }) => Maybe<users>;
  users: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
  usersAggregate: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => users_aggregate;
}

export interface Subscription {
  __typename?: "Subscription";
  apps: (args?: {
    distinct_on?: Maybe<Array<apps_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<apps_order_by>>;
    where?: Maybe<apps_bool_exp>;
  }) => Array<apps>;
  apps_aggregate: (args?: {
    distinct_on?: Maybe<Array<apps_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<apps_order_by>>;
    where?: Maybe<apps_bool_exp>;
  }) => apps_aggregate;
  apps_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<apps>;
  apps_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<apps_stream_cursor_input>>;
    where?: Maybe<apps_bool_exp>;
  }) => Array<apps>;
  authProvider: (args: { id: Scalars["String"] }) => Maybe<authProviders>;
  authProviderRequest: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authProviderRequests>;
  authProviderRequests: (args?: {
    distinct_on?: Maybe<Array<authProviderRequests_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviderRequests_order_by>>;
    where?: Maybe<authProviderRequests_bool_exp>;
  }) => Array<authProviderRequests>;
  authProviderRequestsAggregate: (args?: {
    distinct_on?: Maybe<Array<authProviderRequests_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviderRequests_order_by>>;
    where?: Maybe<authProviderRequests_bool_exp>;
  }) => authProviderRequests_aggregate;
  authProviderRequests_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<authProviderRequests_stream_cursor_input>>;
    where?: Maybe<authProviderRequests_bool_exp>;
  }) => Array<authProviderRequests>;
  authProviders: (args?: {
    distinct_on?: Maybe<Array<authProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviders_order_by>>;
    where?: Maybe<authProviders_bool_exp>;
  }) => Array<authProviders>;
  authProvidersAggregate: (args?: {
    distinct_on?: Maybe<Array<authProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviders_order_by>>;
    where?: Maybe<authProviders_bool_exp>;
  }) => authProviders_aggregate;
  authProviders_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<authProviders_stream_cursor_input>>;
    where?: Maybe<authProviders_bool_exp>;
  }) => Array<authProviders>;
  authRefreshToken: (args: {
    refreshToken: Scalars["uuid"];
  }) => Maybe<authRefreshTokens>;
  authRefreshTokens: (args?: {
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => Array<authRefreshTokens>;
  authRefreshTokensAggregate: (args?: {
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => authRefreshTokens_aggregate;
  authRefreshTokens_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<authRefreshTokens_stream_cursor_input>>;
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => Array<authRefreshTokens>;
  authRole: (args: { role: Scalars["String"] }) => Maybe<authRoles>;
  authRoles: (args?: {
    distinct_on?: Maybe<Array<authRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRoles_order_by>>;
    where?: Maybe<authRoles_bool_exp>;
  }) => Array<authRoles>;
  authRolesAggregate: (args?: {
    distinct_on?: Maybe<Array<authRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRoles_order_by>>;
    where?: Maybe<authRoles_bool_exp>;
  }) => authRoles_aggregate;
  authRoles_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<authRoles_stream_cursor_input>>;
    where?: Maybe<authRoles_bool_exp>;
  }) => Array<authRoles>;
  authUserProvider: (args: { id: Scalars["uuid"] }) => Maybe<authUserProviders>;
  authUserProviders: (args?: {
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    where?: Maybe<authUserProviders_bool_exp>;
  }) => Array<authUserProviders>;
  authUserProvidersAggregate: (args?: {
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    where?: Maybe<authUserProviders_bool_exp>;
  }) => authUserProviders_aggregate;
  authUserProviders_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<authUserProviders_stream_cursor_input>>;
    where?: Maybe<authUserProviders_bool_exp>;
  }) => Array<authUserProviders>;
  authUserRole: (args: { id: Scalars["uuid"] }) => Maybe<authUserRoles>;
  authUserRoles: (args?: {
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    where?: Maybe<authUserRoles_bool_exp>;
  }) => Array<authUserRoles>;
  authUserRolesAggregate: (args?: {
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    where?: Maybe<authUserRoles_bool_exp>;
  }) => authUserRoles_aggregate;
  authUserRoles_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<authUserRoles_stream_cursor_input>>;
    where?: Maybe<authUserRoles_bool_exp>;
  }) => Array<authUserRoles>;
  authUserSecurityKey: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authUserSecurityKeys>;
  authUserSecurityKeys: (args?: {
    distinct_on?: Maybe<Array<authUserSecurityKeys_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserSecurityKeys_order_by>>;
    where?: Maybe<authUserSecurityKeys_bool_exp>;
  }) => Array<authUserSecurityKeys>;
  authUserSecurityKeysAggregate: (args?: {
    distinct_on?: Maybe<Array<authUserSecurityKeys_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserSecurityKeys_order_by>>;
    where?: Maybe<authUserSecurityKeys_bool_exp>;
  }) => authUserSecurityKeys_aggregate;
  authUserSecurityKeys_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<authUserSecurityKeys_stream_cursor_input>>;
    where?: Maybe<authUserSecurityKeys_bool_exp>;
  }) => Array<authUserSecurityKeys>;
  bucket: (args: { id: Scalars["String"] }) => Maybe<buckets>;
  buckets: (args?: {
    distinct_on?: Maybe<Array<buckets_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<buckets_order_by>>;
    where?: Maybe<buckets_bool_exp>;
  }) => Array<buckets>;
  bucketsAggregate: (args?: {
    distinct_on?: Maybe<Array<buckets_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<buckets_order_by>>;
    where?: Maybe<buckets_bool_exp>;
  }) => buckets_aggregate;
  buckets_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<buckets_stream_cursor_input>>;
    where?: Maybe<buckets_bool_exp>;
  }) => Array<buckets>;
  contacts: (args?: {
    distinct_on?: Maybe<Array<contacts_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<contacts_order_by>>;
    where?: Maybe<contacts_bool_exp>;
  }) => Array<contacts>;
  contacts_aggregate: (args?: {
    distinct_on?: Maybe<Array<contacts_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<contacts_order_by>>;
    where?: Maybe<contacts_bool_exp>;
  }) => contacts_aggregate;
  contacts_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<contacts>;
  contacts_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<contacts_stream_cursor_input>>;
    where?: Maybe<contacts_bool_exp>;
  }) => Array<contacts>;
  file: (args: { id: Scalars["uuid"] }) => Maybe<files>;
  files: (args?: {
    distinct_on?: Maybe<Array<files_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<files_order_by>>;
    where?: Maybe<files_bool_exp>;
  }) => Array<files>;
  filesAggregate: (args?: {
    distinct_on?: Maybe<Array<files_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<files_order_by>>;
    where?: Maybe<files_bool_exp>;
  }) => files_aggregate;
  files_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<files_stream_cursor_input>>;
    where?: Maybe<files_bool_exp>;
  }) => Array<files>;
  todos: (args?: {
    distinct_on?: Maybe<Array<todos_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<todos_order_by>>;
    where?: Maybe<todos_bool_exp>;
  }) => Array<todos>;
  todos_aggregate: (args?: {
    distinct_on?: Maybe<Array<todos_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<todos_order_by>>;
    where?: Maybe<todos_bool_exp>;
  }) => todos_aggregate;
  todos_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<todos>;
  todos_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<todos_stream_cursor_input>>;
    where?: Maybe<todos_bool_exp>;
  }) => Array<todos>;
  user: (args: { id: Scalars["uuid"] }) => Maybe<users>;
  users: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
  usersAggregate: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => users_aggregate;
  users_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<users_stream_cursor_input>>;
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
}

/**
 * columns and relationships of "todos"
 */
export interface todos {
  __typename?: "todos";
  /**
   * An object relationship
   */
  contact?: Maybe<contacts>;
  contact_id?: Maybe<ScalarsEnums["uuid"]>;
  content: ScalarsEnums["String"];
  id: ScalarsEnums["uuid"];
  is_complete: ScalarsEnums["Boolean"];
}

/**
 * aggregated selection of "todos"
 */
export interface todos_aggregate {
  __typename?: "todos_aggregate";
  aggregate?: Maybe<todos_aggregate_fields>;
  nodes: Array<todos>;
}

/**
 * aggregate fields of "todos"
 */
export interface todos_aggregate_fields {
  __typename?: "todos_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<todos_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<todos_max_fields>;
  min?: Maybe<todos_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface todos_max_fields {
  __typename?: "todos_max_fields";
  contact_id?: Maybe<ScalarsEnums["uuid"]>;
  content?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface todos_min_fields {
  __typename?: "todos_min_fields";
  contact_id?: Maybe<ScalarsEnums["uuid"]>;
  content?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "todos"
 */
export interface todos_mutation_response {
  __typename?: "todos_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<todos>;
}

/**
 * User account information. Don't modify its structure as Hasura Auth relies on it to function properly.
 */
export interface users {
  __typename?: "users";
  activeMfaType?: Maybe<ScalarsEnums["String"]>;
  avatarUrl: ScalarsEnums["String"];
  createdAt: ScalarsEnums["timestamptz"];
  currentChallenge?: Maybe<ScalarsEnums["String"]>;
  defaultRole: ScalarsEnums["String"];
  /**
   * An object relationship
   */
  defaultRoleByRole: authRoles;
  disabled: ScalarsEnums["Boolean"];
  displayName: ScalarsEnums["String"];
  email?: Maybe<ScalarsEnums["citext"]>;
  emailVerified: ScalarsEnums["Boolean"];
  id: ScalarsEnums["uuid"];
  isAnonymous: ScalarsEnums["Boolean"];
  lastSeen?: Maybe<ScalarsEnums["timestamptz"]>;
  locale: ScalarsEnums["String"];
  metadata: (args?: {
    /**
     * JSON select path
     */
    path?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["jsonb"]>;
  newEmail?: Maybe<ScalarsEnums["citext"]>;
  otpHash?: Maybe<ScalarsEnums["String"]>;
  otpHashExpiresAt: ScalarsEnums["timestamptz"];
  otpMethodLastUsed?: Maybe<ScalarsEnums["String"]>;
  passwordHash?: Maybe<ScalarsEnums["String"]>;
  phoneNumber?: Maybe<ScalarsEnums["String"]>;
  phoneNumberVerified: ScalarsEnums["Boolean"];
  /**
   * An array relationship
   */
  refreshTokens: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => Array<authRefreshTokens>;
  /**
   * An aggregate relationship
   */
  refreshTokens_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => authRefreshTokens_aggregate;
  /**
   * An array relationship
   */
  roles: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserRoles_bool_exp>;
  }) => Array<authUserRoles>;
  /**
   * An aggregate relationship
   */
  roles_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserRoles_bool_exp>;
  }) => authUserRoles_aggregate;
  /**
   * An array relationship
   */
  securityKeys: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserSecurityKeys_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserSecurityKeys_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserSecurityKeys_bool_exp>;
  }) => Array<authUserSecurityKeys>;
  /**
   * An aggregate relationship
   */
  securityKeys_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserSecurityKeys_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserSecurityKeys_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserSecurityKeys_bool_exp>;
  }) => authUserSecurityKeys_aggregate;
  ticket?: Maybe<ScalarsEnums["String"]>;
  ticketExpiresAt: ScalarsEnums["timestamptz"];
  totpSecret?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["timestamptz"];
  /**
   * An array relationship
   */
  userProviders: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserProviders_bool_exp>;
  }) => Array<authUserProviders>;
  /**
   * An aggregate relationship
   */
  userProviders_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserProviders_bool_exp>;
  }) => authUserProviders_aggregate;
}

/**
 * aggregated selection of "auth.users"
 */
export interface users_aggregate {
  __typename?: "users_aggregate";
  aggregate?: Maybe<users_aggregate_fields>;
  nodes: Array<users>;
}

/**
 * aggregate fields of "auth.users"
 */
export interface users_aggregate_fields {
  __typename?: "users_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<users_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<users_max_fields>;
  min?: Maybe<users_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface users_max_fields {
  __typename?: "users_max_fields";
  activeMfaType?: Maybe<ScalarsEnums["String"]>;
  avatarUrl?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  currentChallenge?: Maybe<ScalarsEnums["String"]>;
  defaultRole?: Maybe<ScalarsEnums["String"]>;
  displayName?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["citext"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  lastSeen?: Maybe<ScalarsEnums["timestamptz"]>;
  locale?: Maybe<ScalarsEnums["String"]>;
  newEmail?: Maybe<ScalarsEnums["citext"]>;
  otpHash?: Maybe<ScalarsEnums["String"]>;
  otpHashExpiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  otpMethodLastUsed?: Maybe<ScalarsEnums["String"]>;
  passwordHash?: Maybe<ScalarsEnums["String"]>;
  phoneNumber?: Maybe<ScalarsEnums["String"]>;
  ticket?: Maybe<ScalarsEnums["String"]>;
  ticketExpiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  totpSecret?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * aggregate min on columns
 */
export interface users_min_fields {
  __typename?: "users_min_fields";
  activeMfaType?: Maybe<ScalarsEnums["String"]>;
  avatarUrl?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  currentChallenge?: Maybe<ScalarsEnums["String"]>;
  defaultRole?: Maybe<ScalarsEnums["String"]>;
  displayName?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["citext"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  lastSeen?: Maybe<ScalarsEnums["timestamptz"]>;
  locale?: Maybe<ScalarsEnums["String"]>;
  newEmail?: Maybe<ScalarsEnums["citext"]>;
  otpHash?: Maybe<ScalarsEnums["String"]>;
  otpHashExpiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  otpMethodLastUsed?: Maybe<ScalarsEnums["String"]>;
  passwordHash?: Maybe<ScalarsEnums["String"]>;
  phoneNumber?: Maybe<ScalarsEnums["String"]>;
  ticket?: Maybe<ScalarsEnums["String"]>;
  ticketExpiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  totpSecret?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * response of any mutation on the table "auth.users"
 */
export interface users_mutation_response {
  __typename?: "users_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<users>;
}

export interface SchemaObjectTypes {
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
  apps: apps;
  apps_aggregate: apps_aggregate;
  apps_aggregate_fields: apps_aggregate_fields;
  apps_max_fields: apps_max_fields;
  apps_min_fields: apps_min_fields;
  apps_mutation_response: apps_mutation_response;
  authProviderRequests: authProviderRequests;
  authProviderRequests_aggregate: authProviderRequests_aggregate;
  authProviderRequests_aggregate_fields: authProviderRequests_aggregate_fields;
  authProviderRequests_max_fields: authProviderRequests_max_fields;
  authProviderRequests_min_fields: authProviderRequests_min_fields;
  authProviderRequests_mutation_response: authProviderRequests_mutation_response;
  authProviders: authProviders;
  authProviders_aggregate: authProviders_aggregate;
  authProviders_aggregate_fields: authProviders_aggregate_fields;
  authProviders_max_fields: authProviders_max_fields;
  authProviders_min_fields: authProviders_min_fields;
  authProviders_mutation_response: authProviders_mutation_response;
  authRefreshTokens: authRefreshTokens;
  authRefreshTokens_aggregate: authRefreshTokens_aggregate;
  authRefreshTokens_aggregate_fields: authRefreshTokens_aggregate_fields;
  authRefreshTokens_max_fields: authRefreshTokens_max_fields;
  authRefreshTokens_min_fields: authRefreshTokens_min_fields;
  authRefreshTokens_mutation_response: authRefreshTokens_mutation_response;
  authRoles: authRoles;
  authRoles_aggregate: authRoles_aggregate;
  authRoles_aggregate_fields: authRoles_aggregate_fields;
  authRoles_max_fields: authRoles_max_fields;
  authRoles_min_fields: authRoles_min_fields;
  authRoles_mutation_response: authRoles_mutation_response;
  authUserProviders: authUserProviders;
  authUserProviders_aggregate: authUserProviders_aggregate;
  authUserProviders_aggregate_fields: authUserProviders_aggregate_fields;
  authUserProviders_max_fields: authUserProviders_max_fields;
  authUserProviders_min_fields: authUserProviders_min_fields;
  authUserProviders_mutation_response: authUserProviders_mutation_response;
  authUserRoles: authUserRoles;
  authUserRoles_aggregate: authUserRoles_aggregate;
  authUserRoles_aggregate_fields: authUserRoles_aggregate_fields;
  authUserRoles_max_fields: authUserRoles_max_fields;
  authUserRoles_min_fields: authUserRoles_min_fields;
  authUserRoles_mutation_response: authUserRoles_mutation_response;
  authUserSecurityKeys: authUserSecurityKeys;
  authUserSecurityKeys_aggregate: authUserSecurityKeys_aggregate;
  authUserSecurityKeys_aggregate_fields: authUserSecurityKeys_aggregate_fields;
  authUserSecurityKeys_avg_fields: authUserSecurityKeys_avg_fields;
  authUserSecurityKeys_max_fields: authUserSecurityKeys_max_fields;
  authUserSecurityKeys_min_fields: authUserSecurityKeys_min_fields;
  authUserSecurityKeys_mutation_response: authUserSecurityKeys_mutation_response;
  authUserSecurityKeys_stddev_fields: authUserSecurityKeys_stddev_fields;
  authUserSecurityKeys_stddev_pop_fields: authUserSecurityKeys_stddev_pop_fields;
  authUserSecurityKeys_stddev_samp_fields: authUserSecurityKeys_stddev_samp_fields;
  authUserSecurityKeys_sum_fields: authUserSecurityKeys_sum_fields;
  authUserSecurityKeys_var_pop_fields: authUserSecurityKeys_var_pop_fields;
  authUserSecurityKeys_var_samp_fields: authUserSecurityKeys_var_samp_fields;
  authUserSecurityKeys_variance_fields: authUserSecurityKeys_variance_fields;
  buckets: buckets;
  buckets_aggregate: buckets_aggregate;
  buckets_aggregate_fields: buckets_aggregate_fields;
  buckets_avg_fields: buckets_avg_fields;
  buckets_max_fields: buckets_max_fields;
  buckets_min_fields: buckets_min_fields;
  buckets_mutation_response: buckets_mutation_response;
  buckets_stddev_fields: buckets_stddev_fields;
  buckets_stddev_pop_fields: buckets_stddev_pop_fields;
  buckets_stddev_samp_fields: buckets_stddev_samp_fields;
  buckets_sum_fields: buckets_sum_fields;
  buckets_var_pop_fields: buckets_var_pop_fields;
  buckets_var_samp_fields: buckets_var_samp_fields;
  buckets_variance_fields: buckets_variance_fields;
  contacts: contacts;
  contacts_aggregate: contacts_aggregate;
  contacts_aggregate_fields: contacts_aggregate_fields;
  contacts_max_fields: contacts_max_fields;
  contacts_min_fields: contacts_min_fields;
  contacts_mutation_response: contacts_mutation_response;
  files: files;
  files_aggregate: files_aggregate;
  files_aggregate_fields: files_aggregate_fields;
  files_avg_fields: files_avg_fields;
  files_max_fields: files_max_fields;
  files_min_fields: files_min_fields;
  files_mutation_response: files_mutation_response;
  files_stddev_fields: files_stddev_fields;
  files_stddev_pop_fields: files_stddev_pop_fields;
  files_stddev_samp_fields: files_stddev_samp_fields;
  files_sum_fields: files_sum_fields;
  files_var_pop_fields: files_var_pop_fields;
  files_var_samp_fields: files_var_samp_fields;
  files_variance_fields: files_variance_fields;
  todos: todos;
  todos_aggregate: todos_aggregate;
  todos_aggregate_fields: todos_aggregate_fields;
  todos_max_fields: todos_max_fields;
  todos_min_fields: todos_min_fields;
  todos_mutation_response: todos_mutation_response;
  users: users;
  users_aggregate: users_aggregate;
  users_aggregate_fields: users_aggregate_fields;
  users_max_fields: users_max_fields;
  users_min_fields: users_min_fields;
  users_mutation_response: users_mutation_response;
}
export type SchemaObjectTypesNames =
  | "Mutation"
  | "Query"
  | "Subscription"
  | "apps"
  | "apps_aggregate"
  | "apps_aggregate_fields"
  | "apps_max_fields"
  | "apps_min_fields"
  | "apps_mutation_response"
  | "authProviderRequests"
  | "authProviderRequests_aggregate"
  | "authProviderRequests_aggregate_fields"
  | "authProviderRequests_max_fields"
  | "authProviderRequests_min_fields"
  | "authProviderRequests_mutation_response"
  | "authProviders"
  | "authProviders_aggregate"
  | "authProviders_aggregate_fields"
  | "authProviders_max_fields"
  | "authProviders_min_fields"
  | "authProviders_mutation_response"
  | "authRefreshTokens"
  | "authRefreshTokens_aggregate"
  | "authRefreshTokens_aggregate_fields"
  | "authRefreshTokens_max_fields"
  | "authRefreshTokens_min_fields"
  | "authRefreshTokens_mutation_response"
  | "authRoles"
  | "authRoles_aggregate"
  | "authRoles_aggregate_fields"
  | "authRoles_max_fields"
  | "authRoles_min_fields"
  | "authRoles_mutation_response"
  | "authUserProviders"
  | "authUserProviders_aggregate"
  | "authUserProviders_aggregate_fields"
  | "authUserProviders_max_fields"
  | "authUserProviders_min_fields"
  | "authUserProviders_mutation_response"
  | "authUserRoles"
  | "authUserRoles_aggregate"
  | "authUserRoles_aggregate_fields"
  | "authUserRoles_max_fields"
  | "authUserRoles_min_fields"
  | "authUserRoles_mutation_response"
  | "authUserSecurityKeys"
  | "authUserSecurityKeys_aggregate"
  | "authUserSecurityKeys_aggregate_fields"
  | "authUserSecurityKeys_avg_fields"
  | "authUserSecurityKeys_max_fields"
  | "authUserSecurityKeys_min_fields"
  | "authUserSecurityKeys_mutation_response"
  | "authUserSecurityKeys_stddev_fields"
  | "authUserSecurityKeys_stddev_pop_fields"
  | "authUserSecurityKeys_stddev_samp_fields"
  | "authUserSecurityKeys_sum_fields"
  | "authUserSecurityKeys_var_pop_fields"
  | "authUserSecurityKeys_var_samp_fields"
  | "authUserSecurityKeys_variance_fields"
  | "buckets"
  | "buckets_aggregate"
  | "buckets_aggregate_fields"
  | "buckets_avg_fields"
  | "buckets_max_fields"
  | "buckets_min_fields"
  | "buckets_mutation_response"
  | "buckets_stddev_fields"
  | "buckets_stddev_pop_fields"
  | "buckets_stddev_samp_fields"
  | "buckets_sum_fields"
  | "buckets_var_pop_fields"
  | "buckets_var_samp_fields"
  | "buckets_variance_fields"
  | "contacts"
  | "contacts_aggregate"
  | "contacts_aggregate_fields"
  | "contacts_max_fields"
  | "contacts_min_fields"
  | "contacts_mutation_response"
  | "files"
  | "files_aggregate"
  | "files_aggregate_fields"
  | "files_avg_fields"
  | "files_max_fields"
  | "files_min_fields"
  | "files_mutation_response"
  | "files_stddev_fields"
  | "files_stddev_pop_fields"
  | "files_stddev_samp_fields"
  | "files_sum_fields"
  | "files_var_pop_fields"
  | "files_var_samp_fields"
  | "files_variance_fields"
  | "todos"
  | "todos_aggregate"
  | "todos_aggregate_fields"
  | "todos_max_fields"
  | "todos_min_fields"
  | "todos_mutation_response"
  | "users"
  | "users_aggregate"
  | "users_aggregate_fields"
  | "users_max_fields"
  | "users_min_fields"
  | "users_mutation_response";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  apps_constraint: apps_constraint | undefined;
  apps_select_column: apps_select_column | undefined;
  apps_update_column: apps_update_column | undefined;
  authProviderRequests_constraint: authProviderRequests_constraint | undefined;
  authProviderRequests_select_column:
    | authProviderRequests_select_column
    | undefined;
  authProviderRequests_update_column:
    | authProviderRequests_update_column
    | undefined;
  authProviders_constraint: authProviders_constraint | undefined;
  authProviders_select_column: authProviders_select_column | undefined;
  authProviders_update_column: authProviders_update_column | undefined;
  authRefreshTokens_constraint: authRefreshTokens_constraint | undefined;
  authRefreshTokens_select_column: authRefreshTokens_select_column | undefined;
  authRefreshTokens_update_column: authRefreshTokens_update_column | undefined;
  authRoles_constraint: authRoles_constraint | undefined;
  authRoles_select_column: authRoles_select_column | undefined;
  authRoles_update_column: authRoles_update_column | undefined;
  authUserProviders_constraint: authUserProviders_constraint | undefined;
  authUserProviders_select_column: authUserProviders_select_column | undefined;
  authUserProviders_update_column: authUserProviders_update_column | undefined;
  authUserRoles_constraint: authUserRoles_constraint | undefined;
  authUserRoles_select_column: authUserRoles_select_column | undefined;
  authUserRoles_update_column: authUserRoles_update_column | undefined;
  authUserSecurityKeys_constraint: authUserSecurityKeys_constraint | undefined;
  authUserSecurityKeys_select_column:
    | authUserSecurityKeys_select_column
    | undefined;
  authUserSecurityKeys_update_column:
    | authUserSecurityKeys_update_column
    | undefined;
  buckets_constraint: buckets_constraint | undefined;
  buckets_select_column: buckets_select_column | undefined;
  buckets_update_column: buckets_update_column | undefined;
  contacts_constraint: contacts_constraint | undefined;
  contacts_select_column: contacts_select_column | undefined;
  contacts_update_column: contacts_update_column | undefined;
  cursor_ordering: cursor_ordering | undefined;
  files_constraint: files_constraint | undefined;
  files_select_column: files_select_column | undefined;
  files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns:
    | files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns
    | undefined;
  files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns:
    | files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns
    | undefined;
  files_update_column: files_update_column | undefined;
  order_by: order_by | undefined;
  todos_constraint: todos_constraint | undefined;
  todos_select_column: todos_select_column | undefined;
  todos_select_column_todos_aggregate_bool_exp_bool_and_arguments_columns:
    | todos_select_column_todos_aggregate_bool_exp_bool_and_arguments_columns
    | undefined;
  todos_select_column_todos_aggregate_bool_exp_bool_or_arguments_columns:
    | todos_select_column_todos_aggregate_bool_exp_bool_or_arguments_columns
    | undefined;
  todos_update_column: todos_update_column | undefined;
  users_constraint: users_constraint | undefined;
  users_select_column: users_select_column | undefined;
  users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns:
    | users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns
    | undefined;
  users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns:
    | users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns
    | undefined;
  users_update_column: users_update_column | undefined;
}
