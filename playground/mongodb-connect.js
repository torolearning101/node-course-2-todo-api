// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

const url = 'mongodb://localhost:27017';

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');

    // const db = client.db("ToDoApp");
    // db.collection('Todos').insertOne({
    //     text: 'Something to do again again again 4',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // }
    // );
    //
    // Insert new doc into User(name, age, location)
    db.collection('Users').insertOne({
        name: 'Alan S. Li',
        age: 46,
        location: 'San Jose, CA'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});