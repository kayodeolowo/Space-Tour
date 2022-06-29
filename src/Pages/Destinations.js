import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useState } from "react"
import data from "../starter-code/data.json"

const Destinations = () => {
  return (
    <>      
        <div> 
            <h1> 
                    pick your destinations
            </h1>  
        </div>  

            <header className='flex justify-between items-center  m-auto '> 
                <Link to='moon'>Moon</Link>
                 <Link to='mars'>Mars</Link>
                  <Link to='europa'>europa</Link>
                   <Link to='titans'>titans</Link>
            </header>

            <Outlet/>
        
        
     </>
  )
}

export default Destinations