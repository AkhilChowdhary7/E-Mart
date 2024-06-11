
import React from 'react'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import KitchenPage from './stores/pages/KitchenPage'
import Navbar from './stores/components/Navbar'
import MobileSingle from './stores/singles/MobileSingle'
import ComputerSingle from './stores/singles/ComputerSingle'



import {Routes, Route} from 'react-router-dom'
import './App.css'

const App = () => {
    return (
      <div>
        <h1>Welcome to Amazon</h1>
        <Navbar/>
        <Routes>
          <Route path ='/' element ={<LandingPage/>}/>
          <Route path ='/Mobiles' element={<MobilePage/>}/>
          <Route path='/Computers' element={<ComputerPage/>}/>
          <Route path='/Kitchen' element={<KitchenPage/>}/>
           <Route path='/mobiles/:id' element = {<MobileSingle />} />
           <Route path='/computers/:id' element = {<ComputerSingle />} />

        </Routes>
      </div>
    )

}

export default App