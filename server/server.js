var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { userNewURlParser: true });

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodos = new Todo({
//     text: 'Cook dinner'
// });

// newTodos.save().then((then) => {
//     console.log("Saved todo", doc);
// }, (e) => {
//     console.log("Unable to save todo");
// });

// var otherTodo = new Todo( {
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });

// User model
//  email 
var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'toro_li@yahoo.com'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save user', e);
});