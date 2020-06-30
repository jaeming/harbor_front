import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'
import { UserContext } from './UserContext'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './api/client'
import { Hello } from './Hello'
import { Posts } from './Posts'

const App = () => {
  const [user, setUser] = useState({ guest: true })

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={user}>
        <div>
          <Posts></Posts>
          <Hello></Hello>
          <header>
            <Link to='/'>Home</Link>
          </header>
          <Router></Router>
        </div>
      </UserContext.Provider>
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
