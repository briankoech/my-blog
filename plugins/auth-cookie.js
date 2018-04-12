import { Auth } from '@/plugins/firebase-client-init'

export default (context) => {
  Auth.addAuthTokenListener(idToken => {
    document.cookie = `__session=${idToken};max-age=${(idToken ? 60 * 60 * 12 : 0)}`
  })
}
