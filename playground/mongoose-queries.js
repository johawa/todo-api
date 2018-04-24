const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mogoose');
const { Todo } = require('./../server/models/todo');
const { user } = require('./../server/models/user');

var id = '5adeda55ff3b73306002ccb9';

if (!ObjectID.isValid(id)) {
    console.log('ID not found');
}

/* Todo.find({
    _id: id //in mongoose no need for new ObjectId()
}).then((todos) => {
    console.log('Todos', todos);
});//gets back an arry, if error => []

Todo.findOne({
    _id: id //in mongoose no need for new ObjectId()
}).then((todo) => {
    console.log('Todo', todo);
});//gets back an object, if error => null */

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo', todo);
}).catch((e) => {
    console.log(e);
});