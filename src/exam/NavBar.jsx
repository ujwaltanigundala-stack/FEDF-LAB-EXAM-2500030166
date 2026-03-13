import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import AddEvent from './AddEvent'
import RegEvents from './RegEvents'
import ApiDemo from './ApiDemo'
import './navbar.css'

export default function NavBar() {
  return (
    <div>
        <div className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/AddEvent" className="nav-link">AddEvent</Link>
            <Link to="/RegEvents" className="nav-link">RegEvents</Link>
            <Link to="/ApiDemo" className="nav-link">ApiDemo</Link>
        </div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/AddEvent' element={<AddEvent/>}/>
            <Route path='/RegEvents' element={<RegEvents/>}/>
            <Route path='/ApiDemo' element={<ApiDemo/>}/>
        </Routes>
    </div>

  )
}
