const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    //creates a new DB if it doesnt exist but appears when filling it with data
    if (err) {
        return console.log('unable to connect to DB');
    }
    console.log('connected to MongoDB server');

    const db = client.db('TodoApp');
    //query to fetch everything
    /*  db.collection('todos').find().toArray().then((docs) => {
       console.log('todos: ');
       console.log(JSON.stringify(docs, undefined, 2));
     }, (err) => {
         console.log('unable to fetch to Dos', err);
     }); */

    //query with filter

    db.collection('todos').find({completed: false}).toArray().then((docs) => {
        console.log('todos: ');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch to Dos', err);
    });

    //query by _id

    db.collection('todos').find({
        _id: new ObjectID('5ade28e4cec3e21aa4867d12')
    }).toArray().then((docs) => {
        console.log('todos: ');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch to Dos', err);
    });

    //query to count 

    db.collection('todos').find().count().then((count) => {   
        console.log(`todos Count: ${count}`);      
    }, (err) => {
        console.log('unable to fetch to Dos', err);
    });


    //see cursor

    //client.close();

});