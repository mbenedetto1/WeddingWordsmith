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
    

  return (
    <div>
        <div class="mt-5">
            <h1 class="row justify-content-center" >Save that Speech!</h1>
        </div>
        <div class="row col-5 chat-form">
            <form class="form control form-control-lg" onSubmit={submitHandler}>
            <label for="speechName">Speech Name:</label>
                <div>
                    <input type="text" name="speechName" value={speech.speechName} onChange={changeHandler}/>
                    <p>{errors.speechName ? errors.speechName.message : ''}</p>
                </div>
                <label for="speechContent">Speech:</label>
                <div>
                    
                    <textarea rows='5' cols='33' name="speechContent" value={speech.speechContent} onChange={changeHandler}/>
                    <p>{errors.speechContent ? errors.speechContent.message : ''}</p>
                    
                </div>
                <input type="submit" value="Save Speech"/>
            </form>
        </div>
    </div>
  )
}

export default SaveSpeech