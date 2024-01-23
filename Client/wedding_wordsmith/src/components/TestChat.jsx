import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const TestChat = () => {
    const [message, setMessage] = useState(null)
    const [value, setValue] = useState(null)
    const [previousMessages, setPreviousMessages] = useState([])
    const [currentTitle, setCurrentTitle] = useState(null)
    const [speeches, setSpeeches] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/speech')
        .then(res => {
            setSpeeches(res.data)
        }
        )
        .catch(err => {
            console.log(err)
        })
    }, [])

        

    const handleChange = (event) => {
        setValue(event.target.value)
    }


    const currentChat = previousMessages.filter(previousMessages => previousMessages.title === currentTitle)
    const uniqueTitles = Array.from(new Set(previousMessages.map(previousMessages => previousMessages.title)))
    console.log(uniqueTitles)
    




    const getMessages = async () => {
        
        const options = {
            method: "POST",
            body: JSON.stringify({
                message: value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await fetch('http://localhost:8000/chat', options)
            const data = await response.json()
            
            setMessage(data.choices[0].message)
            }
        catch (error) {
            console.error(error)
        }
        
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/speech/${id}`)
        .then(res => {
            const filteredSpeeches = speeches.filter(speech => speech._id !== id)
            setSpeeches(filteredSpeeches)
        })
        .catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        console.log(currentTitle, value, message)
        if (!currentTitle && value && message){
            setCurrentTitle(value)
        }
        if (currentTitle && value && message){
            setPreviousMessages(previousMessages => (
                [...previousMessages, 
                    {
                
                        title: currentTitle,
                        role: 'user',
                        content: value
                    },
                    {
                        title: currentTitle,
                        role: message.role,
                        content: message.content
                    }
                ]
            ))
        }
    }, [message, currentTitle])






    return (
    <div className='test'>
        <section className='side-bar'>
            <button className='test-button'> + New Chat</button>
            <ul className='history'>
                <li>
                {
                speeches.map((speech, i) => {
                    return (
                        <div key={i}>
                            <Link to={`/speech/${speech._id}`}>{speech.speechName}</Link> 
                            <img class="trash"src="src/assets/trashcan.png" onClick={() => handleDelete(speech._id)} />    
                        </div>
                    )
                })
            }
                   

                </li>

            </ul>
            <nav className='test-nav'>
                <p>Wedding Wordsmith</p>
            </nav>
        </section>
        <section className='main'>
            <h1>Wedding WordSmith</h1>
            <ul className='feed'>
                {currentChat?.map((chatMessage, index) => <li key = {index}>
                    <p className='role'>{chatMessage.role}</p>
                    <p className='message'>{chatMessage.content}</p>
                </li>)}
            </ul>
            <div className='bottom-section'>
                <div className='input-container'>
                    <textarea cols="100" value={value} onChange={handleChange} />
                    <div id='submit' >
                        <button onClick={getMessages}>Submit</button>
                    </div>
                </div>
                <p className='info'>
                    ChatGPT version 3.5
                </p>
            </div>
        </section>
    </div>
  )
}



export default TestChat