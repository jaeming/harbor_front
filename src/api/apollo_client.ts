import ApolloClient from 'apollo-boost'
import { HARBOR_KEY } from '../lib/auth'
import { getItem } from 'localforage'

const uri = process.env.API_ENDPOINT || 'http://localhost:4000/graphql'

const client = new ApolloClient({
  uri,
  request: async operation => {
    const token = await getItem(HARBOR_KEY)
    if (token) operation.setContext({ headers: { auth: token } })
  }
})
client.defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all'
  },
  query: {
    fetchPolicy: 'network-only'
  }
}

export { client }
