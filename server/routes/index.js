var todos = require('../controllers/todos'),
    attachments = require('../controllers/attachments');

module.exports = function (router) {
    router.get('/todos', todos.index);
    router.get('/todos/:id', todos.show);
    router.post('/todos', todos.create);
    router.put('/todos', todos.update);
    router.delete('/todos/:id', todos.delete);

    router.get('/attachments', attachments.index);
    router.get('/attachments/:id', attachments.show);
    router.post('/attachments', attachments.create);
    router.put('/attachments/:id', attachments.update);
    router.delete('/attachments/:id', attachments.delete);

    return router
};