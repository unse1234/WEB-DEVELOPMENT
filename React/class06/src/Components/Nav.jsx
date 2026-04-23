import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
     <nav className='bg-lime-700 p-4 w-screen flex justify-center gap-90 text-3xl' >

          <Link to='/' >Home</Link>
          <Link to='/about' >About</Link>
          <Link to='/contact' >Contact</Link>
          <Link to='/users' >Users</Link>
        
     </nav>
  )
}

export default Nav
