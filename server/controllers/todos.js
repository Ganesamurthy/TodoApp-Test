Todo = require('../models/').Todo;
Attachment = require('../models/').Attachment;

module.exports = {
    
    index(req, res) {
        Todo.findAll({
            include: Attachment
        })
            .then(function (todos) {
                res.status(200).json(todos);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    
    show(req, res) {
        Todo.findById(req.params.id, {
            include: Attachment
        })
            .then(function (todo) {
                res.status(200).json(todo);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    
    create(req, res) {
        Todo.create(req.body)
            .then(function (newTodo) {
                res.status(200).json(newTodo);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    
    update(req, res) {
        Todo.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(function (updatedRecords) {
                res.status(200).json(updatedRecords);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    
    delete(req, res) {
        Todo.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (deletedRecords) {
                res.status(200).json(deletedRecords);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    }
};