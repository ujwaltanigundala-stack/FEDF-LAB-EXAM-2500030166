//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AddEvent from './exam/AddEvent'
import NavBar from './exam/NavBar'

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
    </div>
  )
}

export default App
