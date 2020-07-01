import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'
import { UserContext } from './components/users/UserContext'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './api/client'
import { Register } from './components/users/Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Auth } from './lib/auth'

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    Auth.find()
      .then(id => setUser({ id }))
      .catch(e => setUser({}))
  }, [])

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={[user, setUser]}>
        <div>
          <header>
            <Link to='/' className='mr-2'>
              Home
            </Link>
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
