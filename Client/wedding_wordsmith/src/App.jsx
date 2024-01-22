import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import ChatGPT from './components/ChatGPT'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import ViewSpeech from './components/ViewSpeech'
import SaveSpeech from './components/SaveSpeech'

function App() {
  

  return (
    <>
      <div>
        
        <Routes>
          <Route path='/' element= {<Dashboard/>}/>
          <Route path= '/chat' element= {<ChatGPT/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/speech/:id' element= {<ViewSpeech/>}/>
          <Route path='/save' element= {<SaveSpeech/>}/>

        </Routes>
      </div>

    </>
  )
}

export default App
