const db = require("../models");
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create phone
exports.create = (req, res) => {
    const phone = {
        phone_type: req.body.type,
        phone_number: req.body.number,
        contactId: req.body.id,
    }

    Phones.create(phone)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get all phones
exports.findAll = (req, res) => {
    const id = req.params.id;

    Phones.findAll({include:[Contacts], where:{companyId: id}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
    
};

// Get one phone by id
exports.findOne = (req, res) => {
    const id = req.params.id;
    //As id is unique for each phone number, so no need to include contact

    Phones.findOne({where:{id:id}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
  
};

// Update one phone by id
exports.update = (req, res) => {
    const id = req.params.id;

    Phones.update(req.body, {where: {id: id}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });    
};

// Delete one phone by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Phones.destroy({where: {id: id}})
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