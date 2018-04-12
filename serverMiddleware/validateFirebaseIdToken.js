global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const getIdTokenFromRequest = (req, res) => {
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    // return id token from authorization header
    const idToken = req.headers.authorization.split('Bearer ')[1]
    return idToken
  }

  if (req.cookies && req.cookies.__session) {
    return req.cookies.__session
  }
}

const addDecodedIdTokenToRequest = async (idToken, req, next) => {
  try {
    console.log(idToken)
    /*
     *const { name, email, uid, picture } = await admin.auth().verifyIdToken(idToken) || {}
    */
    req.user = { name: 'Brian', email: 'brnkoech', uid: '2143433', picture: 'avatar_url' }
    next()
  } catch (e) {
    console.log('error decoding token', e)
    next()
  }
}

module.exports = (req, res, next) => {
  const idToken = getIdTokenFromRequest(req, res)
  if (idToken) {
    addDecodedIdTokenToRequest(idToken, req, next)
  } else next()
}
