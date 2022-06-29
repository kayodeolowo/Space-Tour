import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Technology = () => {
  return (
    <>
        <div> 
            welcome to space
        </div>

        <header> 
            <Link to='launch-vehicle'> launch-vehicle </Link>
            <Link to='spaceport'> spaceport </Link>
            <Link to='space-capsule'> space-capsule </Link>
        </header>

        <Outlet/>
    </>
  )
}

export default Technology