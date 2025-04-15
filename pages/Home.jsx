import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import icCekStatus from '../src/assets/icCekStatus.png'
import icCiri from '../src/assets/icCiri.png'
import icKonsultasi from '../src/assets/icKonsultasi.png'
import icPencegahan from '../src/assets/icPencegahan.png'
import icPengobatan from '../src/assets/icPengobatan.png'
import icPenyebab from '../src/assets/icPenyebab.png'
import icTentang from '../src/assets/icTentang.png'
import background from '../src/assets/background.png'
import Cookies from "js-cookie";
import { getUser } from '../src/api/users';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const user_id = Cookies.get("user_id");

  useEffect(() => {
    const getDataUser = async () => {
      const response = await getUser(user_id);
      setUser(response);
    }
    getDataUser();
  }, []);

  return (
    <div className='relative max-w-md mx-auto min-h-screen text-slate-900 py-8 px-5'>
      <img src={background} className='absolute top-0 left-0 w-full' />
      <div className='relative'>

        <div className='flex items-center justify-between font-medium'>
          <p><span className='text-xl font-medium'>Hello,</span> <br />{user?.username}</p>
          <Link to={'/profile'}>
            <div className='w-[50px] h-[50px] rounded-full bg-[#790c5a] text-white flex items-center justify-center font-medium text-2xl'>{user?.username?.charAt(0)}</div>
          </Link>
        </div>
        <div className='flex items-center justify-between gap-x-2 mt-5 rounded-full px-4 py-2 bg-white'>
          <input type="text" className='outline-none w-full'/>
          <FaSearch size={20} className='text-slate-600'/>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-10'>
          <Link to={'/tentang'}>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#790c5a] rounded-full w-[80px] h-[80px] flex items-center justify-center'>
                <img src={icTentang} className='w-[80%]' alt="" />
              </div>
              <p className='text-sm text-center mt-2 font-medium'>Tentang Stunting</p>
            </div>
          </Link>
          <Link to={'/ciri'}>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#004aad] rounded-full w-[80px] h-[80px] flex items-center justify-center'>
                          <img src={icCiri} className='w-[80%]' alt="" />  
              </div>
              <p className='text-sm text-center mt-2 font-medium'>Ciri-Ciri Stunting</p>
            </div>
          </Link>
          <Link to={'/penyebab'}>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#64c5eb] rounded-full w-[80px] h-[80px] flex items-center justify-center'>
                <img src={icPenyebab} className='w-[80%]' alt="" />
              </div>
              <p className='text-sm text-center mt-2 font-medium'>Penyebab Stunting</p>
            </div>
          </Link>
          <Link to={'/pengobatan'}>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#ff914d] rounded-full w-[80px] h-[80px] flex items-center justify-center'>
                <img src={icPengobatan} className='w-[80%]' alt="" />
              </div>
              <p className='text-sm text-center mt-2 font-medium'>Pengobatan Stunting</p>
            </div>
          </Link>
          <Link to={'/pencegahan'}>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#ff66c4] rounded-full w-[80px] h-[80px] flex items-center justify-center'>
                <img src={icPencegahan} className='w-[80%]' alt="" />
              </div>
              <p className='text-sm text-center mt-2 font-medium'>Pencegahan Stunting</p>
            </div>
          </Link>
          <Link to={'/konsultasi'}>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#c1ff72] rounded-full w-[80px] h-[80px] flex items-center justify-center'>
                <img src={icKonsultasi} className='w-[80%]' alt="" />
              </div>
              <p className='text-sm text-center mt-2 font-medium'>Konsultasi Stunting</p>
            </div>
          </Link>
          <Link to={'/checkup'}>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#ffde59] rounded-full w-[80px] h-[80px] flex items-center justify-center'>
                <img src={icCekStatus} className='w-[80%]' alt="" />
              </div>
              <p className='text-sm text-center mt-2 font-medium'>Cek Status Anak</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home