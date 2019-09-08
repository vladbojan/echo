const jwt = require('jsonwebtoken')

function getUserId(context) {
  //const Authorization = context.request.get('Authorization')
  //if (Authorization) {
    //const token = Authorization.replace('Bearer ', '')
    //const { userId } = jwt.verify(token, process.env.APP_SECRET)
    return "cjzgtfhd5bq9a0b53nfqffsex"
  //}

  //throw new AuthError()
}

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

module.exports = {
  getUserId,
  AuthError
}