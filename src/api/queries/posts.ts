import { gql } from 'apollo-boost'

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
