import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import pengobatanStunting from '../src/assets/pengobatanStunting.jpg';
import bgartikel7 from '../src/assets/bgartikel7.png';



const Pengobatan = () => {
  return (
    <div className='max-w-md mx-auto bg-white min-h-screen text-slate-900 pb-12 '>
      <div className='relative flex items-center text-white font-medium justify-center bg-[#5de0e6] py-3'>
        <Link to={'/home'}>
          <p className='absolute left-0 top-3.5 left-5'><FaArrowLeft size={20} /></p>
        </Link>
        <h5>Pengobatan Stunting</h5>
      </div>
      <div className='p-2 pt-5 text-justify relative'>
        <div className='fixed'>
          <img src={bgartikel7} className=' w-full z-10' />
        </div>
        <h1 className='font-medium text-lg mb-4'>Bagaimana Pengobatan Stunting?</h1>
        <div className='w-full h-[200px] border rounded-lg mb-5'>
          <img src={pengobatanStunting} className='w-full h-full object-cover' />
        </div>
        <p className='mb-2'><span className='me-5'></span>Stunting adalah manifestasi dari gangguan pertumbuhan linear yang diakibatkan oleh defisiensi gizi kronis, infeksi berulang, dan stimulasi lingkungan yang tidak memadai selama periode paling kritis, yaitu 1.000 hari pertama kehidupan. Upaya penanganan stunting harus dimulai sejak masa prakonsepsi dengan memastikan status gizi calon ibu berada dalam kisaran normal, melalui suplementasi zat besi, asam folat, serta pemberian edukasi mengenai pentingnya pola makan seimbang. Intervensi gizi pada ibu hamil terbukti signifikan dalam memperbaiki berat badan lahir dan panjang badan bayi, yang merupakan prediktor penting terhadap kejadian stunting di kemudian hari.</p>
        <p className='mb-2'><span className='me-5'></span>Selanjutnya, pemberian nutrisi optimal pasca persalinan, terutama melalui Air Susu Ibu (ASI) eksklusif selama enam bulan pertama kehidupan, menjadi komponen esensial dalam pencegahan stunting. ASI mengandung zat bioaktif, imunoglobulin, serta nutrien penting yang mendukung perkembangan otak dan sistem imun anak. Setelah usia enam bulan, diperlukan pemberian Makanan Pendamping ASI (MPASI) yang adekuat, baik secara kuantitatif maupun kualitatif, dengan memperhatikan kecukupan protein, zat besi, zink, vitamin A, dan mikronutrien lainnya untuk mendukung pertumbuhan yang optimal serta mencegah defisiensi gizi mikro yang berkontribusi terhadap terjadinya stunting.</p>
        <p className='mb-2'><span className='me-5'></span>Di tingkat populasi, strategi penanggulangan stunting memerlukan pendekatan multisektoral yang terintegrasi, melibatkan sektor kesehatan, pendidikan, sanitasi, serta ketahanan pangan. Program intervensi sensitif seperti perbaikan akses sanitasi, pengendalian infeksi, serta edukasi perilaku hidup bersih dan sehat turut berkontribusi signifikan dalam menurunkan prevalensi stunting. Selain itu, monitoring pertumbuhan secara rutin dan pemantauan perkembangan anak melalui layanan kesehatan primer memungkinkan deteksi dini dan intervensi cepat terhadap anak-anak yang mengalami gangguan pertumbuhan, sehingga outcome jangka panjang dapat diperbaiki secara substansial.</p>
      </div>
    </div>
  )
}

export default Pengobatan