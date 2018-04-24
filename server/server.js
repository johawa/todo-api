var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mogoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

//Init express
var app = express();

var port = process.env.PORT || 3000;
//process.env.PORT 4 heroku

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
    });
});

//get todo / id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    });
});


// delete
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    });
});

// update 
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    //use lodash
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo });
        
    }).catch((e) => {
        res.send(400).send();
    })


});




app.listen(port, () => {
    console.log(`server is listenig to ${port}`);
});

module.exports = { app: app };