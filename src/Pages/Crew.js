import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Crew = () => {
  return (
    <>
        <div>
            <h1> meet your crew </h1>    
        </div> 

        <header>
            <Link to='commander'> Commander </Link>
            <Link to='mission-specialist'> Mission Specialist </Link>
            <Link to='pilot'> Pilot </Link>
            <Link to='flight-Engineer'> Flight Engineer </Link>
        </header>

         <Outlet/>

    </>
  )
}

export default Crew