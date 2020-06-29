import { createContext } from 'react'

export interface User {
  guest?: boolean
  id?: number
}

const defaultUser: User = { guest: true }

export const UserContext = createContext(defaultUser)
