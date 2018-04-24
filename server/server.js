var mongoose = require('mongoose');
var {ObjectID} = require('mongodb');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//create Model
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true  //removes whitespace
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null        
    }
});

/* 
//creating an Instance
var newTodo = new Todo({
  text: 'straße kehren'
});

//fill Model with a Instance, with error handling 
newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('unable to save todo');
});
 */

//create User Model
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true  //removes whitespace
    }
});

var newUser = new User({
    email: 'johannes.walenta@gmail.com'
});

newUser.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('unable to save todo');
});


