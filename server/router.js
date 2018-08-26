// Imports: Router
const router = require('express').Router();

// Database: Controller
const databaseController = require('./controllers/database-controller.js');


// Routes (CRUD)
// Create Todo
router.post('/', databaseController.createTodo);


// Read Todo
router.get('/', databaseController.findTodoByID);


// Update Todo
router.put('/', databaseController.updateTodoByID);


// Delete Todo
router.delete('/', databaseController.deleteTodoByID);



// Exports
module.exports = router;