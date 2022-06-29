import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import React from 'react'
import Navbar from './components/Navbar';
import Destinations from './Pages/Destinations';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology'
import Home from './Pages/Home';
import Moon from './Pages/Moon';
import Mars from './Pages/Mars';
import Europa from './Pages/Europa';
import Titans from './Pages/Titan';
import Commander from './Pages/Commander'
import MissionSpecialist from './Pages/MissionSpecialist'
import Pilot from './Pages/Pilot'
import FlightEngineer from './Pages/FlightEngineer'
import SpaceCapsule from './Pages/SpaceCapsule'
import Spaceport from './Pages/Spaceport'
import LauncVehicle from './Pages/LaunchVehicle'



const App = () => {
  return (
    <Router> 
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} /> 
                <Route path='destinations' element={<Destinations/>}>  
                  <Route index element={<Moon/>}/>
                        
                        <Route path='moon' element={<Moon/>}/>
                        <Route path='mars' element={<Mars/>}/>  
                          <Route path='europa' element={<Europa/>}/>  
                          <Route path='Titans' element={<Titans/>}/> 
                  </Route>

            <Route path='crew' element={<Crew/>}> 
            <Route index element={<Commander/>}/>
              <Route path='commander' element={<Commander/>}/>
               <Route path='mission-specialist' element={<MissionSpecialist/>}/>
                <Route path='pilot' element={<Pilot/>}/>
                 <Route path='flight-engineer' element={<FlightEngineer/>}/>
            </Route>


            <Route path='technology' element={<Technology/>}> 
             <Route index element={<LauncVehicle/>}/>
              <Route path='launch-vehicle' element={<LauncVehicle/>}/>
              <Route path='spaceport' element={<Spaceport/>}/>
              <Route path='space-capsule' element={<SpaceCapsule/>}/> 
            
            </Route> 

            

            
        </Routes>
    </Router>
  )
}

export default App