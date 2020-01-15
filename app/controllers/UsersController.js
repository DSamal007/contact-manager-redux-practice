const User = require('../models/User')
const pick = require('lodash/pick')





// ....../users/register
module.exports.register = function (req, res) {
    const body = req.body
    const user = new User(body)
    user.save()
        .then(function (user) {
            res.send(pick(user, ['_id', 'username', 'email']))
        })
        .catch(function (err) {
            res.send(err)
        })
}




////......./users/account
module.exports.account = function (req, res) {
    const { user } = req
    res.send(pick(user, ['_id', 'username', 'email']))
}



////users/logout
module.exports.logout = function (req, res) {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(function () {
            res.send({ notice: 'successfully logged out' })
        })
        .catch(function (err) {
            res.send(err)
        })
}





//....../users/login
module.exports.login = function (req, res) {
    const body = req.body
    let userInfo 
    User.findByCredentials(body.email, body.password)
        .then(function (user) {
            userInfo = user 
            return user.generateToken()
        })
        .then(function (token) {            
            res.json({
                token,
                user: {
                    _id: userInfo.id,
                    username: userInfo.username,
                    email: userInfo.email
                }
            })
        })
        .catch(function (err) {
            res.send(err)
        })
}


