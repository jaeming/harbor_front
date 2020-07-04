import { createContext, SetStateAction, Dispatch } from 'react'

export enum Permission {
  userRead = 'userRead',
  commentRead = 'commentRead',
  commentWrite = 'commentWrite',
  postWrite = 'postWrite',
  postPublish = 'postPublish'
}

export interface User {
  id: number
  name?: string
  email: string
  roles: { name: Permission }[]
  admin: boolean
  iat: number
}

type MaybeUser = User | {}

type ContextHook = [MaybeUser, Dispatch<SetStateAction<MaybeUser>>]

export const UserContext = createContext<ContextHook>([{}, user => user])
