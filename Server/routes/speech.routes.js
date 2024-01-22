const SpeechController = require('../controllers/speech.controller');



module.exports = (app) => {
    app.post('/api/speech', SpeechController.createSpeech);
    app.get('/api/speech', SpeechController.getAllSpeeches);
    app.get('/api/speech/:id', SpeechController.getOneSpeech);
    app.delete('/api/speech/:id', SpeechController.deleteSpeech);
    app.put('/api/speech/:_id', SpeechController.updateSpeech);
}