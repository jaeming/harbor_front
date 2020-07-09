import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'
import { UserContext } from './components/users/UserContext'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './api/apollo_client'
import { Register } from './components/users/Register'
import { Login } from './components/users/Login'
import { Posts } from './components/posts/Posts'
import { Manage } from './components/manage/Manage'
import { Auth } from './lib/auth'

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    Auth.find().then(user => setUser(user || {}))
  }, [])

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={[user, setUser]}>
        <header>
          <Link to='/' className='mr-2'>
            Home
          </Link>
          <Link to='/register' className='mr-2'>
            Register
          </Link>
          <Link to='/login' className='mr-2'>
            Login
          </Link>
          <Link to='/manage' className='mr-2'>
            Manage
          </Link>
        </header>
        <Router>
          <Posts path='/' />
          <Register path='/register' />
          <Login path='/login' />
          <Manage path='/manage/*' />
        </Router>
      </UserContext.Provider>
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
