import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const DetailHistory = () => {
    const location = useLocation();
    const result = location.state.history;

    return (
        <div className='max-w-md mx-auto bg-white min-h-screen text-slate-900 pb-12 '>
            <div className='relative flex items-center text-white font-medium justify-center bg-[#5de0e6] py-3'>
                <Link to={'/data-status'}>
                    <p className='absolute left-0 top-3.5 left-5'><FaArrowLeft size={20} /></p>
                </Link>
                <h5>History</h5>
            </div>
            <div className="m-3 mt-6 p-4 bg-green-100 text-green-800 rounded text-center">
                <div className='flex items-center justify-center relative'>
                    <h5 className='text-center mb-5 font-medium text-xl'>Hasil</h5>
                </div>
                <p className="font-medium bg-white py-2 rounded-lg mb-2 p-2">{result.result.title}</p>
                <p className="font-medium bg-white py-2 rounded-lg mb-2 p-2">{result.result.description}</p>
                <p className="font-medium mt-2 text-lg">-- Saran --</p>
                <p className="font-medium bg-white py-2 rounded-lg mb-2 p-2">{result.result.advice}</p>
                <p className="font-medium mt-2 text-lg">-- Edukasi --</p>
                <p className="font-medium bg-white py-2 rounded-lg mb-2 p-2">{result.result.education}</p>
            </div>
            <div className="m-3 mt-6 p-4 bg-orange-100 text-orange-800 rounded">
                <div className='flex items-center justify-center relative'>
                    <h5 className='text-center mb-5 font-medium text-xl'>Pertanyaan</h5>
                </div>
                {result.history.map((item, index) => (
                    <div key={index}>
                        <p className="font-medium bg-white py-2 rounded-lg mb-2 p-2">
                            {index + 1}. {item.questionText} <br />
                            <span>Jawaban : {item.answer}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetailHistory