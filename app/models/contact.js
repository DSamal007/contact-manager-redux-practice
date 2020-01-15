const mongoose = require('mongoose')
const isNumberValid = require('validator/lib/isNumeric')
const isEmailValid = require('validator/lib/isEmail')
const Schema = mongoose.Schema 

const contactSchema = new Schema({
    name: {
        type: String, 
        required: true 
    }, 
    email: {
        type: String,
        validate: {
            validator: function(value){
                return isEmailValid(value)
            }, 
            message: function(){
                return 'invalid email format'
            }
        }
    }, 
    mobile: {
        type: String, 
        required: true, 
        minlength: 10,
        maxlength: 10,
        validate: {
            validator: function(value){
                return isNumberValid(value)
            }, 
            message: function(){
                return 'mobile should only numbers'
            }
        }

    }, 
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }
})

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact 