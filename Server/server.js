const dotenv= require('dotenv').config();
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAIAPI = require('openai');
const port = 8000;



const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));


const api_key = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAIAPI({apiKey: api_key});

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


// app.post('/completions', async (req, res) => {
//     const options = {
//         method: 'POST',
//         headers: {
//             "Authorization" : `Bearer ${API_KEY}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo-1106",
//             messages: [{
//                 "role": "user",
//                 "content": req.body.message,
//                 "role": "system",
//                 "content": 'Write the user a bespoke wedding speech or ceremony script based off of the details the user provides.  For ceremonies, inquire about the desired length from the user.',
                
//             }],
            
//         })
//     }
//     try {
//         const response = await fetch('https://api.openai.com/v1/chat/completions', options)
//         const data = await response.json()
//         res.send(data)
//     } catch (error) {
        
//     }
    
// })





const routes = require('./routes/speech.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));


