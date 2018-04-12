const axios = require('axios')
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
    try {
      const url = `http://localhost:5000/my-blog-c782c/us-central1/Auth?x-access-token=${idToken}`
      const { data } = await axios.get(url)
      const { name, picture, email, uid } = data
      req.user = { name, picture, email, uid }
      next()
    } catch (e) {
      // const { response, request, message } = e
      console.log(e)
      next()
    }
  } catch (e) {
    next()
  }
}

module.exports = (req, res, next) => {
  const idToken = getIdTokenFromRequest(req, res)
  if (idToken) {
    addDecodedIdTokenToRequest(idToken, req, next)
  } else next()
}
