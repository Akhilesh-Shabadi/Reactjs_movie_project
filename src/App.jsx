import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Addmovies from './components/Addmovies'
import Viewmovies from './components/Viewmovies'
import Updatemovie from './components/Updatemovie'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './global.css'

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/addmovie' element={<Addmovies></Addmovies>} />
          <Route path='/viewmovie' element={<Viewmovies></Viewmovies>} />
          <Route path='/updatemovie/:id' element={<Updatemovie />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App