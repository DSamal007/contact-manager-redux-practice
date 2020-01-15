const jwt = require('jsonwebtoken')

const token = '123'

console.log(jwt.verify(token, 'jwt@123'))