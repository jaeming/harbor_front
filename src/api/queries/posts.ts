import { gql } from 'apollo-boost'

export const postsQuery = () => gql`
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
