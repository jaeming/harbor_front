import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'
import { UserContext } from './UserContext'
import { Hello } from './Hello'

const App = () => {
  const [user, setUser] = useState({ guest: true })

  return (
    <UserContext.Provider value={user}>
      <div>
        <Hello></Hello>
        <header>
          <Link to='/'>Home</Link>
        </header>
        <Router></Router>
      </div>
    </UserContext.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
