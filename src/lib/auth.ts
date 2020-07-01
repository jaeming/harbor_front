import decodeJwt from 'jwt-decode'
import { getItem, setItem } from 'localforage'
import { User } from '../components/users/UserContext'

const HARBOR_KEY = 'harbor'

export class Auth {
  static store (token: string) {
    const decoded = Auth.decode(token)
    setItem(HARBOR_KEY, token)
    return decoded as number
  }

  static async find () {
    const token = await getItem(HARBOR_KEY)
    const decoded = Auth.decode(token)
    return decoded
  }

  private static decode (token: unknown) {
    if (typeof token !== 'string') throw Error('No Token Present')

    const decoded = decodeJwt(token)
    if (!decoded || typeof (decoded as User).id !== 'number') {
      throw Error('Failed to Decode Token or not a valid ID number')
    }

    return (decoded as User).id
  }
}
