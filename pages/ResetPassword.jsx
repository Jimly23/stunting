import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../src/api/users';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  useEffect(() => {
    setEmail(location.state.email);
  }, []) 

  const handleResetPassword = async () => {

    if (password !== confirmPassword) {
      alert("Password baru dan Konfirmasi password harus sama")
      return;
    }

    const data = {
      email,
      password,
      password_confirmation: confirmPassword
    }

    
    try {
      await resetPassword(data);
      alert('Password berhasil diubah');
      navigate('/login');
    } catch (error) {
      console.log('Terjadi kesalahan!')
    }
  }

  return (
    <div className='max-w-md mx-auto bg-[#5de0e6] min-h-screen text-slate-900 py-12 flex flex-col justify-center'>
      <h3 className='font-bold text-2xl text-center mb-5 mt-3 text-white'>Buat Password Baru</h3>
      <div className='font-medium flex flex-col p-5 relative'>
        <input type="password" value={password} placeholder='Buat password' onChange={(e) => setPassword(e.target.value)} className='rounded-full p-2 px-4 outline-none mb-4' />
        <input type="password" value={confirmPassword} placeholder='Konfirmasi password' onChange={(e) => setConfirmPassword(e.target.value)} className='rounded-full p-2 px-4 outline-none mb-4' />
        <button onClick={handleResetPassword} className='px-3 py-2 mt-5 rounded-full bg-white text-[#5de0e6] font-medium'>Simpan</button>
      </div>
    </div>
  )
}

export default ResetPassword