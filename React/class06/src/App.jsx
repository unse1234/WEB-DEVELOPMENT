import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Users from './pages/Users.jsx'
import UserDetails from './Components/UserDetails.jsx'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserDetails />} />
          <Route path='*' element={<h1 className='text-3xl font-bold '>404 Not Found</h1>} />
      </Routes>
    </div>


  )
}

export default App
