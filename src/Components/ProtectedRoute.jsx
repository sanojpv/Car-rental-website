import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({Children}) => {
    // const navigate=useNavigate();
    const isLogedin=useSelector(state=>state.login.value);
    console.log(isLogedin);
    
  return (isLogedin?Children:<Navigate to='/' />)
    
  
}

export default ProtectedRoute
