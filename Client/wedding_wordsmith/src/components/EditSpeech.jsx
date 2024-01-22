import React, {useEffect,useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const EditSpeech = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [speech, setSpeech] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/speech/${id}`)
            .then(res => {
                console.log(res.data)
                setSpeech(res.data)
            })
            .catch(err => console.log(err))
    }
    , [])

    const changeHandler = e => {
        setSpeech({
            ...speech,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/speech/${id}`, speech)
            .then(res => {
                navigate(`/speech/${id}`)
                console.log(res.data)
                if(res.data.errors){
                    setErrors(res.data.errors)
                }
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <div class="mt-5">
            <h1 class="row justify-content-center">Update your Speech!</h1>
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
                <input type="submit" value="Update Speech"/>
            </form>
        </div>
    </div>
  )
}

export default EditSpeech