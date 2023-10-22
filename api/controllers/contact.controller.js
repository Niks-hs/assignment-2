const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create contact
exports.create = (req, res) => {
    const name = req.params.name;

    Contacts.create({name: name})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });    
};

// Get all contacts
exports.findAll = (req, res) => {
    Contacts.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one contact by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Contacts.findOne({include: [Phones], where: {contactId: id}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
  
};

// Update one contact by id
exports.update = (req, res) => {
    const id = req.params.id;

    Contacts.update(req.body, {where: {id: id}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Delete one contact by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Contacts.destroy({include: [Phones], where: {contactId: id}})
    .then(num => {
        if(num == 1){
            res.send({});
        }else{
            res.send({
                message: `Cannot delete Task`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Task with id = " + id
        });
    });
    
};
