const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    //creates a new DB if it doesnt exist but appears when filling it with data
    if (err) {
        return console.log('unable to connect to DB');
    }
    console.log('connected to MongoDB server');

    const db = client.db('TodoApp');

    //find one And Update
    
    db.collection('todos').findOneAndUpdate({
        _id: new ObjectID('5ade28e4cec3e21aa4867d12')
    }, {
            $set: { //need update operator, look them up !
                completed: false
            }
        }, {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });


    //client.close();

});