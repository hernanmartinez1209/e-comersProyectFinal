// import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectecRoutes = () => {
  // const [hasToke, setHasToke] = useState()
  // useEffect(() => {
  //   setHasToke(localStorage.getItem('token'))
  // }, [])
  // console.log(hasToke);
  

  if (localStorage.getItem('token')) {
    return <Outlet />
    
  }else{
    return <Navigate to={'/login'} />
  }
  
}

export default ProtectecRoutes