import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkEmail } from '../src/api/users';

const CheckEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")

  const handleCheckEmail = async () => {
    const data = {
      email
    }
    const response = await checkEmail(data);
    
    if(response.status === 200) {
      navigate('/reset-password', {state: {email: email}})
    } else {
      alert('Email tidak valid')
    }
  }
  return (
    <div className='max-w-md mx-auto bg-[#5de0e6] min-h-screen text-slate-900 py-12 flex flex-col justify-center'>
      <h3 className='font-bold text-2xl text-center mb-5 mt-3 text-white'>Masukan Email</h3>
      <div className='font-medium flex flex-col p-5 relative'>
        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='rounded-full p-2 px-4 outline-none mb-4' />
        <button onClick={handleCheckEmail} className='px-3 py-2 mt-5 rounded-full bg-white text-[#5de0e6] font-medium'>Berikutnya</button>
      </div>
    </div>
  )
}

export default CheckEmail