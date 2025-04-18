import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import ciriStunting from '../src/assets/ciriStunting.jpg';


const CiriStunting = () => {
  return (
    <div className='max-w-md mx-auto bg-white min-h-screen text-slate-900 pb-12 '>
      <div className='relative flex items-center text-white font-medium justify-center bg-[#5de0e6] py-3'>
        <Link to={'/home'}>
          <p className='absolute left-0 top-3.5 left-5'><FaArrowLeft size={20}/></p>
        </Link>
        <h5>Ciri Stunting</h5>
      </div>
      <div className='p-2 pt-5 text-justify'>
        <h1 className='font-medium text-lg mb-4'>Ciri-ciri Stunting, Tanda, dan Gejala</h1>
        <div className='w-full h-[200px] border rounded-lg mb-5'>
          <img src={ciriStunting} className='w-full h-full object-cover' />
        </div>
        <p className='mb-5'><span className='me-5'></span>Stunting menunjukkan gejala yang beragam, tidak hanya terkait dengan pertumbuhan fisik yang terhambat, tetapi juga dapat mengganggu perkembangan kognitif, serta menimbulkan masalah kesehatan lainnya. Tanda-tanda awal stunting sering kali tidak terdeteksi dan tidak dikenali, bahkan sering diabaikan hingga terlanjur terlambat. Meskipun demikian, di antara gejala-gejala yang mungkin muncul pada anak-anak dengan pertumbuhan terhambat, mengidentifikasi penurunan perkembangan fisik, ukuran tubuh yang lebih kecil dibandingkan teman-temannya, masalah perkembangan pada gigi, serta penurunan perhatian kognitif dan daya ingat. balita yang mengalami stunting menunjukkan berbagai tanda, khususnya pertumbuhan fisik yang lebih lambat dibandingkan rekan sebaya mereka.</p>
        <p className='mb-5'><span className='me-5'></span>Anak-anak dan bayi ini sering kali  mempunyai tinggi badan yang lebih rendah dibandingkan dengan usia mereka dampak dari defisiensi gizi jangka panjang. Selain postur tubuh yang lebih kecil, anak-anak yang mengalami stunting sering kali memiliki berat badan yang lebih rendah dibandingkan anak-anak lainnya, sehingga ini menjadi tanda jelas adanya kekurangan gizi. Tampak jelas bahwa anak-anak ini tidak berhasil mencapai peningkatan berat badan yang diinginkan seiring mereka melanjutkan tahap pertumbuhan. Stunting juga bisa mempengaruhi perkembangan pubertas pada anak.Dampak stunting pada masa bayi dalam jangka panjang adalah anak tersebut bisa mengalami  pubertas lebih lambat daripada rekan-rekan sebaya mereka seperti anak perempuan yang telat menstruasi pertamanya.</p>
        <p className='mb-5'><span className='me-5'></span>Kondisi kognitif yang terganggu merupakan situasi yang dapat mempengaruhi keterampilan anak dalam berpikir, mengingat, belajar, berbahasa, dan berkomunikasi. Anak-anak yang mengalami keterlambatan pertumbuhan memiliki risiko yang lebih tinggi dibandingkan teman sebaya mereka. Selain itu, anak-anak ini sering menghadapi tantangan dalam memusatkan perhatian pada pelajaran, menunjukkan fluktuasi emosi, dan menunjukkan penurunan tingkat partisipasi dalam lingkungan sekolah (Supradewi, 2023). </p>
      </div>
    </div>
  )
}

export default CiriStunting