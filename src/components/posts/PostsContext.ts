import { createContext, SetStateAction, Dispatch } from 'react'

export interface Post {
  id: number
  title: string
  content: string
  published: boolean
  author: {
    id: number
    name: string
    email: string
  }
}
type ContextHook = [Post[], Dispatch<SetStateAction<Post[]>>]

export const PostsContext = createContext<ContextHook>([
  [] as Post[],
  posts => posts
])
