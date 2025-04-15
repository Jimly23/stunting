import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../src/api/users';
import Cookies from "js-cookie";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const data = {
      email,
      password
    }
    try {
      const response = await loginUser(data)
      if (response.message === "Email atau password salah") return alert(response.message)
  
      // simpan user id di cookie
      const userId = response.data.user.id
      Cookies.set("user_id", userId, { expires: 7 }); // Expire dalam 7 hari
  
      navigate('/home')
    } catch (error) {
      alert("Email atau password salah")
    }
  }
  return (
    <div className='max-w-md mx-auto bg-[#5de0e6] min-h-screen text-slate-900 py-12 flex flex-col justify-center'>
      <h3 className='font-bold text-4xl text-center mb-5 mt-3 text-white'>Login</h3>
      <div className='font-medium flex flex-col p-5 relative'>
        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='rounded-full p-2 px-4 outline-none mb-4' />
        <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='rounded-full p-2 px-4 outline-none mb-4' />
        <button onClick={handleLogin} className='px-3 py-2 mt-5 rounded-full bg-white text-[#5de0e6] font-medium'>Login</button>
        <Link to={'/check-email'}>
          <p className='hover:underline cursor-pointer text-white text-center mt-5'>Lupa password</p>
        </Link>
        <Link to={'/register'}>
          <p className='hover:underline cursor-pointer text-white text-center mt-3'>Belum punya akun?</p>
        </Link>
      </div>
    </div>
  )
}

export default Login