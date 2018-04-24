var mongoose = require('mongoose');
//create User Model
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true  //removes whitespace
    }
});


/* 
var newUser = new User({
    email: 'johannes.walenta@gmail.com'
});

newUser.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('unable to save todo');
});
 */
module.exports = {
    User: User
};