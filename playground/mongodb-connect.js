const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    //creates a new DB if it doesnt exist but appears when filling it with data
   if(err) {
       return console.log('unable to connect to DB');
   }
   console.log('connected to MongoDB server');
   //create a new collection(collection = table)
   const db = client.db('TodoApp');

   db.collection('todos').insertOne({
       text: 'something to do',
       completed: false
   }, (err, result) => {
       if (err) {
           return console.log('unable to insert todo', err);
       }
       console.log(JSON.stringify(result.ops, undefined, 2));

   }); 


  //create a User collection(collection = table)
   const db = client.db('TodoApp');

   db.collection('users').insertOne({
       name: 'Jopi',
       age: 30,
       location: "Germany"
   }, (err, result) => {
       if (err) {
           return console.log('unable to insert todo', err);
       }
       console.log(JSON.stringify(result.ops, undefined, 2));

   }); 

   client.close();   
});