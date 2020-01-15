const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const configureDB =()=>{
    mongoose.connect('mongodb://localhost:27017/contact-manager', { useNewUrlParser: true})
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(){
        console.log('not connected to db')
    })
}

module.exports = configureDB