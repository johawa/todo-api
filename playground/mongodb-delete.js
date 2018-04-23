const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    //creates a new DB if it doesnt exist but appears when filling it with data
    if (err) {
        return console.log('unable to connect to DB');
    }
    console.log('connected to MongoDB server');

    const db = client.db('TodoApp');
  
      db.collection('todos').find().toArray().then((docs) => {
       console.log('todos: ');
       console.log(JSON.stringify(docs, undefined, 2));
     }, (err) => {
         console.log('unable to fetch to Dos', err);
     }); 


    //client.close();

});