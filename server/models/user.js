const validator = require('validator');
const mongoose = require('mongoose');
//create User Model
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,  //removes whitespace
        unique: true, //so that the value of email is unique in the collection
        validate: {
            validator: (value) => {
                return validator.isEmail(value); //=> true
            },
            message: '{VALUE} is not a valid email' //=> if false
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});






module.exports = {
    User: User
};