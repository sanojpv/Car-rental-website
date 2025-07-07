import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Carslist from '../pages/Carslist'
import Booking from '../pages/Booking'

const Mainrouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='Carlist' element={<Carslist/>}/>
        <Route path=':id' element={<Booking/>}/>
      </Routes>
    </div>
  )
}

export default Mainrouter
