import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import ChatGPT from './components/ChatGPT'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import ViewSpeech from './components/ViewSpeech'
import SaveSpeech from './components/SaveSpeech'
import EditSpeech from './components/EditSpeech'
import TestChat from './components/TestChat'

function App() {
  

  return (
    <>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element= {<Dashboard/>}/>
          <Route path= '/chat' element= {<ChatGPT/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/speech/:id' element= {<ViewSpeech/>}/>
          <Route path='/speech/add' element= {<SaveSpeech/>}/>
          <Route path='/edit/:id' element= {<EditSpeech/>}/>
          <Route path='/test' element= {<TestChat/>}/>
          
        </Routes>
      </div>

    </>
  )
}

export default App
