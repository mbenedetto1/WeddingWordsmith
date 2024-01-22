import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

const ViewSpeech = () => {
    const{ id } = useParams()
    const navigate = useNavigate()
    const [speech, setSpeech] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/speech/${id}`)
        .then(res => {
            setSpeech(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div class="responsive-font-example row justify-content-center m-5 p-5">
        <div>
            <h2 >Here is that Speech you ordered!</h2>
        </div>
        <div class="row justify-content-center m-5 p-5">
            <h2>{speech.speechName}</h2>

            <p class="p-3">{speech.speechContent}</p>
        </div>
        <div class="row justify-content-center m-5 p-5">
            <Link to={`/edit/${id}`} class="btn btn-outline-primary">Edit</Link>
            
        </div>
    </div>
  )

}

export default ViewSpeech