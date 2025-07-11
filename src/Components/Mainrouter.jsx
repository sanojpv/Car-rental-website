import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Carslist from '../pages/Carslist'
import Booking from '../pages/Booking'
import Loginpage from '../pages/Loginpage'
import Confirmation from '../pages/Confirmation'
import Dashbord from '../pages/Dashbord'

const Mainrouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='Loginpage' element={<Loginpage/>}/>
        </Route>

        <Route path='about' element={<About/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='Carlist' element={<Carslist/>}/>
        <Route path='dashbord' element={<Dashbord/>}/>
        <Route path=':id' element={<Booking/>}>
         <Route path='Confirmpage' element={<Confirmation/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default Mainrouter
