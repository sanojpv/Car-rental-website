import React, { useEffect, useState } from 'react'
import { cars } from '../data/Carsdata'
import { useParams } from 'react-router-dom'
const Booking = () => {
 const [selectcar,setSelectcar]=useState(cars)
 const {id}=useParams()
 useEffect(()=>{

   const slcar=selectcar.find((ncar)=>ncar.id == id );
    setSelectcar(slcar)
 },[])
  return (
    <div>
      <div>
      <img src={selectcar.images} alt="" />
      <h2>
        {selectcar.brand} {selectcar.model}
      </h2>
      <p>{selectcar.color}</p>
      <p>{selectcar.fueltype}</p>
      <p>{selectcar.milage}</p>
      <p>{selectcar.price}</p>
      

      </div>


    </div>
  )
}

export default Booking
