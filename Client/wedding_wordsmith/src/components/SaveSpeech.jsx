import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SaveSpeech = () => {
    const navigate = useNavigate()
    const [speech, setSpeech] = useState({
        speechName: '',
        speechContent: ''
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setSpeech({
            ...speech,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/speech', speech)
        .then(res => {
            console.log(res.data)
            navigate(`/speech/${res.data._id}`)
        })
        .catch(err => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
        const [speeches, setSpeeches] = useState([])
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/speech')
        .then(res => {
            setSpeech(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    const [speeches, setSpeeches] = useState([])
    

  return (
    <div>
        <div class="mt-5">
            <h1 class="title" >Save that Speech!</h1>
        </div>
        <div class="row col-5 chat-form">
            <form class="form control form-control-lg" onSubmit={submitHandler}>
                <label for="speechName">Speech Name:</label>
                    <div>
                        <input type="text" name="speechName" value={speech.speechName} onChange={changeHandler}/>
                        {errors.speechName ? <p>{errors.speechName.message }</p> : null}
                    </div>
                    <label for="speechContent">Speech:</label>
                    <div>
                        
                        <textarea rows='10' cols='55' name="speechContent" value={speech.speechContent} onChange={changeHandler}/>
                        {errors.speechContent ? <p>{errors.speechContent.message}</p> : null}
                        
                    </div>
                    <button type='submit'>Save your Speech</button>
                </form>
        </div>
    </div>
  )
}

export default SaveSpeech