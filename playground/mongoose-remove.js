const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mogoose');
const { Todo } = require('./../server/models/todo');
const { user } = require('./../server/models/user');


// remove everything 
/* Todo.remove({}).then(() => {
    console.log(result);
    //just shows how many got removed but not what
}); */

// find one and remove
/* Todo.findOneAndRemove({_id:'123'}).then((todo) => {

});
 */
// find by ID and remove
Todo.findByIdAndRemove('id').then((todo) => {

});