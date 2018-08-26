// Imports: Dependencies
const mongoose = require('mongoose');
const schema = mongoose.Schema;


// Mongoose: Schema
const todoSchema = new schema({
    id: ID,
    task: String,
    active: Boolean
});

// Monoose: Model
const Todo = mongoose.model('Todo', todoSchema);


// Exports
module.exports = Todo;