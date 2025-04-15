import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaDoorClosed, FaDoorOpen } from 'react-icons/fa';
import {LuLogOut} from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";
import { getUser, updateUser } from '../src/api/users';


const Profile = () => {
  const navigate = useNavigate();
  const [popupChangeProfile, setPopupChangeProfile] = useState(false);
  const [dataPersonalize, setDataPersonalize] = useState({});
  const [user, setUser] = useState(null);
  const user_id = Cookies.get("user_id");

  useEffect(() => {
    const getDataUser = async () => {
      const response = await getUser(user_id);
      setUser(response);
      setDataPersonalize(response);
    }
    getDataUser();
  }, [popupChangeProfile]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    setDataPersonalize(prev => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value
    }));
  };

  const handleSubmit = async () => {
    const response = await updateUser(dataPersonalize, user_id)
    setPopupChangeProfile(false);
  }

  const handleLogout = async () => {
    Cookies.remove("user_id");
    navigate('/login')
  }
  return (
    <div className='max-w-md mx-auto bg-white min-h-screen text-slate-900 pb-12 '>
      <div className='relative flex items-center text-white font-medium justify-center bg-[#5de0e6] py-3'>
        <Link to={'/home'}>
          <p className='absolute top-3.5 left-5'><FaArrowLeft size={20}/></p>
        </Link>
        <h5>Profile</h5>
      </div>
      <div className='p-2 pt-5 text-justify font-medium text-slate-600'>
        <div className='rounded-lg border p-3 flex items-center justify-between mb-3'>
          <p>{user?.username}</p>
          {/* <FaArrowRight /> */}
        </div>
        <div className='rounded-lg border p-3 flex items-center justify-between mb-3'>
          <p>{user?.email}</p>
          {/* <FaArrowRight /> */}
        </div>
        <div className='rounded-lg border p-3 flex items-center justify-between mb-3'>
          <p>{user?.password ? "*".repeat(user.password.length) : ""}</p>
          {/* <FaArrowRight /> */}
        </div>
        <div onClick={() => setPopupChangeProfile(true)} className='mt-3 bg-orange-500 text-white rounded-lg border p-3 flex items-center justify-center gap-x-2 mb-3'>
          <p>Ubah</p>
        </div>
        <div onClick={handleLogout} className='mt-10 bg-red-500 text-white rounded-lg border p-3 flex items-center justify-center gap-x-2 mb-3'>
          <p>Keluar</p>
          <LuLogOut size={20}/>
        </div>
      </div>
      {/* popup ubah prpofile */}
      {popupChangeProfile && (
        <div className='fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-10'>
          <div className='max-w-sm p-3 relative'>
            <div onClick={() => setPopupChangeProfile(false)} className='w-[25px] h-[25px] rounded-full flex items-center justify-center bg-white absolute top-[40px] right-[30px] font-medium text-red-500'>X</div>
              <div className='bg-[#5de0e6] p-5 py-10 rounded-lg'>
                <label className='text-white'>Username</label>
                <input type="text" onChange={handleChange} name='username' value={dataPersonalize.username} className='w-full px-4 py-2 rounded-xl outline-none text-slate-700 my-1'/>
                <label className='text-white'>Email (cm)</label>
                <input type="text" onChange={handleChange} name='email' value={dataPersonalize.email} className='w-full px-4 py-2 rounded-xl outline-none text-slate-700 my-1'/>
                <label className='text-white'>Password</label>
                <input type="password" onChange={handleChange} name='password' value={dataPersonalize.password} className='w-full px-4 py-2 rounded-xl outline-none text-slate-700 my-1'/>
                <label className='text-white'>Target</label>
                <button onClick={handleSubmit} className='w-full bg-white p-2 rounded-xl mt-4 text-primary'>Simpan</button>
              </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile