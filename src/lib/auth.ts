import decodeJwt from 'jwt-decode'
import { getItem, setItem } from 'localforage'
import { User } from '~/generated/graphql'

export const HARBOR_KEY = 'harbor'

export class Auth {
  static store (token: string) {
    const decoded = Auth.decode(token)
    setItem(HARBOR_KEY, token)
    return decoded as User
  }

  static async find () {
    const token = await getItem(HARBOR_KEY)
    const decoded = Auth.decode(token)
    return decoded
  }

  private static decode (token: unknown) {
    if (typeof token !== 'string') return

    const decoded = decodeJwt(token)
    if (!decoded) return

    return decoded as User
  }
}
