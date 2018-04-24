var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mogoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

//Init express
var app = express();
var port = 3000;

//create middleware
app.use(bodyParser.json());

//todo Route
app.post('/todos', (req, res) => {
    //console.log(req.body);
    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

//get Route
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos: todos });
    }, (e) => {
        res.status(400).send(e);
    })
});




app.listen(port, () => {
    console.log(`server is listenig to ${port}`);
});

module.exports = { app: app };