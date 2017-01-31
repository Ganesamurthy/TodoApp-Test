Attachment = require('../models/').Attachment;

module.exports = {
    
    index(req, res) {
        Attachment.findAll()
            .then(function (attachments) {
                res.status(200).json(attachments);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });        
    },

    
    show(req, res) {
        Attachment.findById(req.params.id)
            .then(function (attachment) {
                res.status(200).json(attachment);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    
    create(req, res) {
        Attachment.create(req.body)
            .then(function (newAttachment) {
                res.status(200).json(newAttachment);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    
    update(req, res) {
        Attachment.update(req.body, {
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
        Attachment.destroy({
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