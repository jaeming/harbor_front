import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum Permission {
  UserRead = 'userRead',
  CommentRead = 'commentRead',
  CommentWrite = 'commentWrite',
  PostWrite = 'postWrite',
  PostPublish = 'postPublish'
}

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['Int'];
  bio?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  posts?: Maybe<Array<Post>>;
  roles: Array<Permission>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  authorId: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  author: User;
};

export type PostInput = {
  content?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
};

export type RegisterInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<User>>;
  posts?: Maybe<Array<Post>>;
  post?: Maybe<Post>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  postCreate?: Maybe<Post>;
  postUpdate?: Maybe<Post>;
  postDelete?: Maybe<Post>;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationPostCreateArgs = {
  input: PostInput;
};


export type MutationPostUpdateArgs = {
  input: PostInput;
  id: Scalars['Int'];
};


export type MutationPostDeleteArgs = {
  id: Scalars['Int'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type PostCreateMutationVariables = Exact<{
  input: PostInput;
}>;


export type PostCreateMutation = (
  { __typename?: 'Mutation' }
  & { postCreate?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ) }
  )> }
);

export type PostDeleteMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PostDeleteMutation = (
  { __typename?: 'Mutation' }
  & { postDelete?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  )> }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ) }
  )>> }
);

export type PostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ) }
  )> }
);

export type PostUpdateMutationVariables = Exact<{
  id: Scalars['Int'];
  input: PostInput;
}>;


export type PostUpdateMutation = (
  { __typename?: 'Mutation' }
  & { postUpdate?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ) }
  )> }
);

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);


export const PostCreateDocument = gql`
    mutation PostCreate($input: PostInput!) {
  postCreate(input: $input) {
    id
    title
    content
    author {
      email
    }
  }
}
    `;
export type PostCreateMutationFn = ApolloReactCommon.MutationFunction<PostCreateMutation, PostCreateMutationVariables>;

/**
 * __usePostCreateMutation__
 *
 * To run a mutation, you first call `usePostCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCreateMutation, { data, loading, error }] = usePostCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PostCreateMutation, PostCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<PostCreateMutation, PostCreateMutationVariables>(PostCreateDocument, baseOptions);
      }
export type PostCreateMutationHookResult = ReturnType<typeof usePostCreateMutation>;
export type PostCreateMutationResult = ApolloReactCommon.MutationResult<PostCreateMutation>;
export type PostCreateMutationOptions = ApolloReactCommon.BaseMutationOptions<PostCreateMutation, PostCreateMutationVariables>;
export const PostDeleteDocument = gql`
    mutation PostDelete($id: Int!) {
  postDelete(id: $id) {
    id
  }
}
    `;
export type PostDeleteMutationFn = ApolloReactCommon.MutationFunction<PostDeleteMutation, PostDeleteMutationVariables>;

/**
 * __usePostDeleteMutation__
 *
 * To run a mutation, you first call `usePostDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postDeleteMutation, { data, loading, error }] = usePostDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PostDeleteMutation, PostDeleteMutationVariables>) {
        return ApolloReactHooks.useMutation<PostDeleteMutation, PostDeleteMutationVariables>(PostDeleteDocument, baseOptions);
      }
export type PostDeleteMutationHookResult = ReturnType<typeof usePostDeleteMutation>;
export type PostDeleteMutationResult = ApolloReactCommon.MutationResult<PostDeleteMutation>;
export type PostDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<PostDeleteMutation, PostDeleteMutationVariables>;
export const PostsDocument = gql`
    query Posts {
  posts {
    id
    title
    content
    author {
      email
    }
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        return ApolloReactHooks.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
      }
export function usePostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = ApolloReactCommon.QueryResult<PostsQuery, PostsQueryVariables>;
export const PostDocument = gql`
    query Post($id: Int!) {
  post(id: $id) {
    id
    title
    content
    author {
      email
    }
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostQuery, PostQueryVariables>) {
        return ApolloReactHooks.useQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
      }
export function usePostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = ApolloReactCommon.QueryResult<PostQuery, PostQueryVariables>;
export const PostUpdateDocument = gql`
    mutation PostUpdate($id: Int!, $input: PostInput!) {
  postUpdate(id: $id, input: $input) {
    id
    title
    content
    author {
      email
    }
  }
}
    `;
export type PostUpdateMutationFn = ApolloReactCommon.MutationFunction<PostUpdateMutation, PostUpdateMutationVariables>;

/**
 * __usePostUpdateMutation__
 *
 * To run a mutation, you first call `usePostUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUpdateMutation, { data, loading, error }] = usePostUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PostUpdateMutation, PostUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<PostUpdateMutation, PostUpdateMutationVariables>(PostUpdateDocument, baseOptions);
      }
export type PostUpdateMutationHookResult = ReturnType<typeof usePostUpdateMutation>;
export type PostUpdateMutationResult = ApolloReactCommon.MutationResult<PostUpdateMutation>;
export type PostUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<PostUpdateMutation, PostUpdateMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input)
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input)
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;