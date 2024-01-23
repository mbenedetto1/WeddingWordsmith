import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Nav from './Nav'


const ChatGPT = () => {
    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/chat', {prompt})
        .then(res => {
            setResponse(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const handlePrompt = (e) => setPrompt(e.target.value)

    return (
    <div  >
        <form class="row justify-content-center p-5 mt-5 form-floating" onSubmit={handleSubmit}>
            <textarea rows="10"class="form-control" placeholder="Type details of your speech here!" value={prompt} onChange={handlePrompt}/>
            <input type="submit" class="btn btn-light btn-lg mt-5"value="Submit" />
        </form>
        <div class="text-center text-wrap">
            <span>{response ? response : "I can help you write or edit your speech! Be sure to be as specific as possible!"}</span>
        </div>
        <div class="row justify-content-center">
        <button type='button' class="btn btn-light btn-lg mt-5" >
            <Link to='/speech/add'>Save Speech</Link>
        </button>
        </div>
    </div>

    )
}

export default ChatGPT