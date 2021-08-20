const crypto = require('crypto')

const generateToken = (size = 256, encoding = 'hex') => crypto.randomBytes(size).toString(encoding)

console.log({
  jwt_token: generateToken(),
  jwt_refresh_token: generateToken()
})