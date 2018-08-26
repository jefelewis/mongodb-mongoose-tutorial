// Imports: Router
const ROUTER = require('express').Router();

// Database: Controller
const DATABASECONTROLLER = require('./controllers/database-controller.js');


// Routes (CRUD)
// Create Todo
ROUTER.post('/', DATABASECONTROLLER.createTodo);

// Read Todo
ROUTER.get('/', DATABASECONTROLLER.findTodo);

// Update Todo
ROUTER.put('/', DATABASECONTROLLER.updateTodo);

// Delete Todo
ROUTER.delete('/', DATABASECONTROLLER.deleteTodo);


// Exports
module.exports = ROUTER;