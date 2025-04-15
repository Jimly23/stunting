import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../src/api/users'

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {
    const data = {
      username,
      email,
      password
    }
    try {
      await registerUser(data);
      setUsername('');
      setEmail('');
      setPassword('');
      alert('Register berhasil')
      navigate('/login');
    } catch (error) {
      alert('Internal server error')
    }
  }
  return (
    <div className='max-w-md mx-auto bg-[#5de0e6] min-h-screen text-slate-900 py-12 flex flex-col justify-center'>
      <h3 className='font-bold text-4xl text-center mb-5 mt-3 text-white'>Register</h3>
      <div className='font-medium flex flex-col p-5 relative'>
        <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} className='rounded-full p-2 px-4 outline-none mb-4' />
        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='rounded-full p-2 px-4 outline-none mb-4' />
        <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='rounded-full p-2 px-4 outline-none mb-4' />
        <button onClick={handleRegister} className='px-3 py-2 mt-5 rounded-full bg-white text-[#5de0e6] font-medium'>Register</button>
        <Link to={'/login'}>
          <p className='hover:underline cursor-pointer text-white text-center mt-3'>Login</p>
        </Link>
      </div>
    </div>
  )
}

export default Register