var mongoose = require('mongoose');
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


/* //creating an Instance
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

module.exports = {
    Todo: Todo
};