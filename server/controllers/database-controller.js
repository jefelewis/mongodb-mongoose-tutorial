// Imports: Models
import Todo from '../models/todo.js';


module.exports = {
  createTodo: function(req, res) {

    // Create new instance
    let todo = new Todo({
      id: req.body.id,
      task: req.body.task,
      active: req.body.active
    });

    // Save new instance to the Database
    todo.save(function(err, data) {
      // Handle Error
      if (err) {
        // console.log(err);
        res.send(err);
      }
      // Send Status Code + Data (JSON format)
      else {
        // Log
        res.status(200).send(JSON.stringify(data));
        console.log('The todo has been saved to the Database.');
      }
    });

  },
  // Find Todo By ID
  findTodoByID: function(req, res) {

    Todo.findOne({'id': req.body.id}, function(err, data) {
      // Handle Error
      if (err) {
        res.send(err);
      }
      // Send Status Code + Data (JSON format)
      else {
        res.status(200).send(JSON.stringify(data));
        console.log('The todo has been found in the Database.');
      }
    });
  
  },
  // Update Todo By ID
  updateTodoByID: function(req, res) {
    Todo.findOne({'id': req.body.id}, function(err, data) {
      // Handle Error
      if (err) {
        res.send(err);
      }
      // Send Status Code + Data (JSON format)
      else {
        // Update Data
        data.set({
          id: req.body.id,
          task: req.body.task,
          active: req.body.active,
        });
        
        console.log('The todo has been updated in the Database.');
      }
    })
  },
  // Delete Todo By ID
  deleteTodoByID: function(req, res) {
    
    Todo.remove({'id': req.body.id}, function(err, data) {
      // Handle Error
      if (err) {
        res.send(err);
      }
      // Send Status Code + Data (JSON format)
      else {
        res.status(200).send(JSON.stringify(req.body));
        console.log('The todo requested has been removed from the Database');
      }
    })
  }
}