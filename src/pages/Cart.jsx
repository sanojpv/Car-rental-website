import React from 'react'
import { useSelector } from 'react-redux';
const Cart = () => {
  const theme=useSelector(state=>state.theme.value)
  return (
    <div className={theme === 'light'?" bg-white text-2xl text-red-500":"bg-black text-green-500"}>
    
    </div>
  )
}

export default Cart;
