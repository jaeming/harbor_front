import { createContext, SetStateAction, Dispatch } from 'react'
import { User } from '~/generated/graphql'

type MaybeUser = User | {}

type ContextHook = [MaybeUser, Dispatch<SetStateAction<MaybeUser>>]

export const UserContext = createContext<ContextHook>([{}, user => user])
