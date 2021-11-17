module.exports = function(app) {

    let entity = require('../controllers/entities.controller.js');

    // Create a new entity
    app.post('/api/entities', entity.create);

    // get all entity
    app.get('/api/entities', entity.getAll);

    // Retrieve a single entity by Id
    app.get('/api/entities/:id', entity.getById);

    // Update a entity with Id
    app.put('/api/entities/:id', entity.updateById);

    // Delete a entity with Id
    app.delete('/api/entities/:id', entity.deleteById);
}