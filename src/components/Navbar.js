import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className='flex justify-between  m-auto '>
        <Link to='/' >Home</Link>
         <Link to='/destinations'>Destinations</Link>
          <Link to='/crew' >Crew</Link>
           <Link to='/technology' >Technology</Link>
    </header>


  )
}

export default Navbar