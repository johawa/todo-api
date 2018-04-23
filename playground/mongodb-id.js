//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/* var obj = new ObjectID();
console.log(obj); */

//How to destructure the user Object 
/* var user = {name: 'jopi' , age: 30};
var {name} = user;
console.log(name); */


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    //creates a new DB if it doesnt exist but appears when filling it with data
   if(err) {
       return console.log('unable to connect to DB');
   }
   console.log('connected to MongoDB server');  


  
   const db = client.db('TodoApp');

   db.collection('users').insertOne({
       name: 'Jopi',
       age: 30,
       location: "Germany"
   }, (err, result) => {
       if (err) {
           return console.log('unable to insert todo', err);
       }
       console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
       //prints out the Timestamp from the ID
   }); 

   client.close();   
});