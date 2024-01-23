const dotenv= require('dotenv').config();
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAIAPI = require('openai');
const port = 8000;



const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));




const openai = new OpenAIAPI({apiKey:"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" });

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173'}));

app.post('/chat', async (req, res) => {
    const {prompt} = req.body;
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: [
            {role: 'system', content: 'Write the user a bespoke wedding speech or ceremony script based off of the details the user provides.  For ceremonies, inquire about the desired length from the user.'},
            {role: 'user', content: prompt}
        ],
        
        
    });
    
    res.send(completion.choices[0].message.content);
});



const routes = require('./routes/speech.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));


