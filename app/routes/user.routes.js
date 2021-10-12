module.exports = function(app) {

    let users = require('../controllers/users.controller.js');

    // Create a new User
    app.post('/api/users', users.create);

    // get all Users
    app.get('/api/users', users.getAll);

    // Retrieve a single User by Id
    app.get('/api/users/:id', users.getById);

    // Update a User with Id
    app.put('/api/users/:id', users.updateById);

    // Delete a User with Id
    app.delete('/api/users/:id', users.deleteById);
}