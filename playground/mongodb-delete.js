const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    //creates a new DB if it doesnt exist but appears when filling it with data
    if (err) {
        return console.log('unable to connect to DB');
    }
    console.log('connected to MongoDB server');

    const db = client.db('TodoApp');
    // deleteMany 
    /*      db.collection('Todos').deleteMany({text: 'Eat a döner'}).then((result) => {
            console.log(result);
         }); */

    // delteOne (the first u find and then stop)
    /*   db.collection('Todos').deleteOne({text: 'Eat a döner'}).then((result) => {
         console.log(result);
      }); */


    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({ completed: 'Eat a döner' }).then((result) => {
        console.log(result);
    });

    //client.close();

});