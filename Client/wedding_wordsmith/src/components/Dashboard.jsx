import React from 'react'
import Toggle from "react-toggle";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Dashboard = () => {
    const [speeches, setSpeeches] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(() => {
        axios.get('http://localhost:8000/api/speech')
        .then(res => {
            setSpeeches(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

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

  return (
    <div class="dashboard1">
        <div class="row justify-content-center">
            <h1 class="header">
                Wedding Wordsmith
            </h1>
        </div>
        <div class="row justify-content-center" >
            <div class="button">
                <Link class="btn btn-outline-dark" to="/chat">Help me write my speech!</Link>

            </div>
        </div>
        
        
        <div >
            <div class="row justify-content-center">

            <div  >
                <h1 class="row justify-content-center m-5 ">My Saved Speeches</h1>
                

            {
                speeches.map((speech, i) => {
                    return (
                        <div class="row justify-content-center" key={i}>
                            <Link to={`/speech/${speech._id}`}>{speech.speechName}</Link> 
                            <img class="trash"src="src/assets/trashcan.png" onClick={() => handleDelete(speech._id)} />    
                        </div>
                    )
                })
            }
            </div>
            </div>

        </div>




    </div>
  )
}

export default Dashboard