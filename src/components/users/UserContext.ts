import { createContext, SetStateAction, Dispatch } from 'react'

export interface User {
  id?: number
}
type ContextHook = [User, Dispatch<SetStateAction<User>>]

export const UserContext = createContext<ContextHook>([{}, user => user])
