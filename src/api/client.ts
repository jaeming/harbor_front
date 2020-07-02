import ApolloClient from 'apollo-boost'
import { getItem } from 'localforage'
import { HARBOR_KEY } from '../lib/auth'

const uri = process.env.API_ENDPOINT || 'http://localhost:4000/graphql'

export const client = new ApolloClient({
  uri,
  request: async operation => {
    const token = await getItem(HARBOR_KEY)
    if (token) operation.setContext({ headers: { auth: token } })
  }
})
