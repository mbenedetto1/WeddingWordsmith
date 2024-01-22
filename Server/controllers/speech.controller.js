const Speech = require('../models/speech.model');

module.exports = {
    // Create a saved speech
    createSpeech: (req, res) => {
        Speech.create(req.body)
            .then((newSpeech) => {res.json(newSpeech)})
            .catch((err) => {console.log(err);
                res.status(500).json(err)});
    },
    // Get all saved speeches
    getAllSpeeches: (req, res) => {
        Speech.find()
            .then((allSpeeches) => {res.json(allSpeeches)})
            .catch((err) => {console.log(err);
                res.status(400).json(err)});
    },
    // Get one saved speech
    getOneSpeech: (req, res) => {
        Speech.findById(req.params.id)
            .then((oneSpeech) => {res.json(oneSpeech)})
            .catch((err) => {console.log(err);
                res.status(400).json(err)});
    },
    // Delete one saved speech
    deleteSpeech: (req, res) => {
        Speech.findByIdAndDelete(req.params.id)
            .then((deletedSpeech) => {res.json(deletedSpeech)})
            .catch((err) => {console.log(err);
                res.status(400).json(err)});
    },
}