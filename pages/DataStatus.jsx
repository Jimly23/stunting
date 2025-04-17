import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { getHistory } from '../src/api/history';
import Cookies from "js-cookie";
import { getUser } from '../src/api/users';

const DataStatus = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [user, setUser] = useState(null);
  const user_id = Cookies.get("user_id");

  useEffect(() => {
    const getDataUser = async () => {
      const response = await getUser(user_id);
      setUser(response);
      getDataHistory(response.username);
    }
    getDataUser();
  }, []);


  const getDataHistory = async (username) => {
    try {
      const response = await getHistory(username);
      setHistory(response);
    } catch (error) {
      console.log(error);
    }
  }



  const handleDetail = (item) => {
    navigate('/detail-history', { state: item });
  }

  return (
    <div className='max-w-md mx-auto bg-white min-h-screen text-slate-900 pb-12 '>
      <div className='relative flex items-center text-white font-medium justify-center bg-[#5de0e6] py-3'>
        <Link to={'/home'}>
          <p className='absolute left-0 top-3.5 left-5'><FaArrowLeft size={20} /></p>
        </Link>
        <h5>Data & Status Anak</h5>
      </div>
      <div className="p-2 pt-5 text-justify">
        {Array.isArray(history) && history.length > 0 ? (
          history.map((item, index) => (
            <div
              key={index}
              onClick={() => handleDetail(item)}
              className="flex items-center justify-between p-5 bg-[#5de0e6] rounded-xl text-white font-medium mb-2 cursor-pointer hover:opacity-90 transition"
            >
              <p className="text-lg">{item?.history?.title || 'Tanpa Judul'}</p>
              <p>Score {item?.history?.totalScore ?? '-'}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Belum ada history</p>
        )}
      </div>

    </div>
  )
}

export default DataStatus