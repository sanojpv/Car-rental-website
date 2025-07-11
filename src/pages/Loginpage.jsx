import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { isLogin } from '../redux/Loginslice';
const Loginpage = () => {
  // const [logedin, setLogedin] = useState(false);
  const [userName, setUsername] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
//  const log=useSelector((state)=>state.login.value);
 const dispatch =useDispatch()
  let user = {
    username: 'user',
    password: 'user123',
  };

  
  const handleLogin = () => {
    if (user.username === userName && user.password === userpassword) {
      localStorage.setItem('user', JSON.stringify(user));
     
      dispatch(isLogin(true))
      navigate('/');
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-50">
      {/*  Error Popup */}
      {showError && (
        <div className="fixed top-5 right-5 bg-white border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg z-50">
          <div className="flex justify-between items-center gap-2">
            <p>Invalid username or password</p>
            <button onClick={() => setShowError(false)} className="text-red-500 font-bold text-lg">
              ✖
            </button>
          </div>
        </div>
      )}

      {/* ✅ Login Modal */}
      <div className="bg-gray-900 border opacity-95  rounded-lg shadow-xl w-[90%] max-w-md p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-3 text-xl font-bold text-gray-700 dark:text-white hover:text-red-500"
          onClick={() => navigate('/')}
        >
          ❌
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">🔐 Login</h2>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-700 dark:text-white"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-700 dark:text-white"
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
