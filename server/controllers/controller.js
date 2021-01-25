// const { Pirate } = require('../models/Pirate');
const mongoose = require("mongoose");
const Pirate = mongoose.model("Pirate");

module.exports = {
    index: (req, res) => {
        res.json({
            message: "Hello World"
        })
    },
    create: (req, res) => {
        Pirate.create(req.body)   // trip to the DB
            .then(item => {    // on success
                console.log(item);
                res.json(item);
            })
            .catch(err => {  // on failure
                console.log(err);
                res.status(400).json(err);
            })
    },
    findAll: (req, res) => {
        Pirate.find()
            .then(Pirates => res.json(Pirates))
            .catch(err => res.status(400).json(err))
    },
    findOne: (req, res) => {
        Pirate.findOne({_id: req.params.id})
            .then(Pirate => res.json(Pirate))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(Pirate => res.json(Pirate))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Pirate.deleteOne({_id: req.params.id})
            .then(success => res.json(success))
            .catch(err => res.status(400).json(err))
    }
}