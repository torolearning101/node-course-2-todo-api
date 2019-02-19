const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

const url = 'mongodb://localhost:27017';

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');

    // findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c687a8b5712674b660ec787')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }
    ).then((result) => {
        console.log(result);
    });
  
    //db.close();
});