import gql from 'graphql-tag'

export const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      content
      author {
        email
      }
    }
  }
`

export const CREATE_POST_MUTATION = gql`
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
`

export const UPDATE_POST_MUTATION = gql`
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
`

export const DELETE_POST_MUTATION = gql`
  mutation PostDelete($id: Int!) {
    postDelete(id: $id) {
      id
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input)
  }
`

export const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input)
  }
`
