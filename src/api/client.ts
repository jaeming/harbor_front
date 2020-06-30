import ApolloClient from 'apollo-boost'

const uri = process.env.API_ENDPOINT || 'http://localhost:4000/graphql'

export const client = new ApolloClient({ uri })
