import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'
import { UserContext } from './components/users/UserContext'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './api/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Register } from './components/users/Register'

const App = () => {
  const user = useState({})

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={user}>
        <div>
          <header>
            <Link to='/register'>Register</Link>
          </header>
          <Router>
            <Register path='/register' />
          </Router>
        </div>
      </UserContext.Provider>
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
