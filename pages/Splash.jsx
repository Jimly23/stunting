import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { checkEmail } from '../src/api/users';
import Cookies from "js-cookie";

const Splash = () => {
  const navigate = useNavigate();
  const user_id = Cookies.get("user_id");
  useEffect(() => {
    if(user_id) {
      navigate('/home')
    }
  }, [])
  return (
    <div className='max-w-md mx-auto bg-[#5de0e6] min-h-screen text-slate-900 py-12 flex flex-col justify-center'>
      <h3 className='font-bold text-2xl text-center mb-5 mt-3 text-white'>Selamat Datang di Besar</h3>
      <Link to={'/login'} className='px-3 py-2 mt-5 rounded-full bg-white text-[#5de0e6] font-medium mx-10 text-center'>Login</Link>
    </div>
  )
}

export default Splash