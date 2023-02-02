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

/** ordering argument of a cursor */
export enum cursor_ordering {
  /** ascending ordering of the cursor */
  ASC = "ASC",
  /** descending ordering of the cursor */
  DESC = "DESC",
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

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export interface todos_bool_exp {
  _and?: InputMaybe<Array<todos_bool_exp>>;
  _not?: InputMaybe<todos_bool_exp>;
  _or?: InputMaybe<Array<todos_bool_exp>>;
  content?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<Int_comparison_exp>;
  is_done?: InputMaybe<Boolean_comparison_exp>;
}

/** Ordering options when selecting data from "todos". */
export interface todos_order_by {
  content?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  is_done?: InputMaybe<order_by>;
}

/** select columns of table "todos" */
export enum todos_select_column {
  /** column name */
  content = "content",
  /** column name */
  id = "id",
  /** column name */
  is_done = "is_done",
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
  content?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_done?: InputMaybe<Scalars["Boolean"]>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Int: true,
  String: true,
  cursor_ordering: true,
  order_by: true,
  todos_select_column: true,
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
  mutation: {},
  query: {
    __typename: { __type: "String!" },
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
    todos_by_pk: { __type: "todos", __args: { id: "Int!" } },
  },
  subscription: {
    __typename: { __type: "String!" },
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
    todos_by_pk: { __type: "todos", __args: { id: "Int!" } },
    todos_stream: {
      __type: "[todos!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[todos_stream_cursor_input]!",
        where: "todos_bool_exp",
      },
    },
  },
  todos: {
    __typename: { __type: "String!" },
    content: { __type: "String!" },
    id: { __type: "Int!" },
    is_done: { __type: "Boolean!" },
  },
  todos_bool_exp: {
    _and: { __type: "[todos_bool_exp!]" },
    _not: { __type: "todos_bool_exp" },
    _or: { __type: "[todos_bool_exp!]" },
    content: { __type: "String_comparison_exp" },
    id: { __type: "Int_comparison_exp" },
    is_done: { __type: "Boolean_comparison_exp" },
  },
  todos_order_by: {
    content: { __type: "order_by" },
    id: { __type: "order_by" },
    is_done: { __type: "order_by" },
  },
  todos_stream_cursor_input: {
    initial_value: { __type: "todos_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  todos_stream_cursor_value_input: {
    content: { __type: "String" },
    id: { __type: "Int" },
    is_done: { __type: "Boolean" },
  },
} as const;

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  todos: (args?: {
    distinct_on?: Maybe<Array<todos_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<todos_order_by>>;
    where?: Maybe<todos_bool_exp>;
  }) => Array<todos>;
  todos_by_pk: (args: { id: Scalars["Int"] }) => Maybe<todos>;
}

export interface Subscription {
  __typename?: "Subscription";
  todos: (args?: {
    distinct_on?: Maybe<Array<todos_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<todos_order_by>>;
    where?: Maybe<todos_bool_exp>;
  }) => Array<todos>;
  todos_by_pk: (args: { id: Scalars["Int"] }) => Maybe<todos>;
  todos_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<todos_stream_cursor_input>>;
    where?: Maybe<todos_bool_exp>;
  }) => Array<todos>;
}

/**
 * columns and relationships of "todos"
 */
export interface todos {
  __typename?: "todos";
  content: ScalarsEnums["String"];
  id: ScalarsEnums["Int"];
  is_done: ScalarsEnums["Boolean"];
}

export interface SchemaObjectTypes {
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
  todos: todos;
}
export type SchemaObjectTypesNames =
  | "Mutation"
  | "Query"
  | "Subscription"
  | "todos";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  cursor_ordering: cursor_ordering | undefined;
  order_by: order_by | undefined;
  todos_select_column: todos_select_column | undefined;
}
