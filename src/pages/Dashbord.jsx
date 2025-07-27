import React from "react";
const Dashbord = () => {
 const user=JSON.parse(localStorage.getItem('user')) 
  return (
    <div className=" text-blue-600">
      <p className="font-bold text-xl">
        welcome<span className="px-1.5">{user?.username ||''}</span>
      </p>
    </div>
  );
};

export default Dashbord;
