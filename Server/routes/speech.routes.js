const SpeechController = require('../controllers/speech.controller');

module.exports = (app) => {
    app.post('/api/speech', SpeechController.createSpeech);
    app.get('/api/speech', SpeechController.getAllSpeeches);
    app.get('/api/speech/:id', SpeechController.getOneSpeech);
    app.delete('/api/speech/:id', SpeechController.deleteSpeech);
}