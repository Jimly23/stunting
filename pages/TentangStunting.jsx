import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

const TentangStunting = () => {
  return (
    <div className='max-w-md mx-auto bg-white min-h-screen text-slate-900 pb-12 '>
      <div className='relative flex items-center text-white font-medium justify-center bg-[#5de0e6] py-3'>
        <Link to={'/home'}>
          <p className='absolute left-0 top-3.5 left-5'><FaArrowLeft size={20}/></p>
        </Link>
        <h5>Tentang Stunting</h5>
      </div>
      <div className='p-2 pt-5 text-justify'>
        <h1 className='font-medium text-lg mb-4'>Apa Itu Stunting?</h1>
        <p className='mb-5'><span className='me-5'></span>Stunting adalah kondisi yang terjadi akibat kekurangan gizi pada anak, terjadinya infeksi kronis, dan biasanya dilihat dari tinggi badan anak yang tidak sesuai umur pada balita yang mengalami ketidaknormalan. Malnutrisi dapat terjadi selama masa prenatal dan pada hari-hari awal setelah kelahiran, tetapi konsekuensinya mungkin baru terlihat ketika anak mencapai usia dua tahun (Kemenkes RI, 2018).Menurut World Health Organization (WHO), stunting adalah masalah perkembangan anak yang disebabkan oleh malnutrisi, infeksi berulang, dan kurangnya stimulasi psikososial. Jika seorang anak memiliki tinggi badan diatas -2 standar deviasi dari median pertumbuhan anak yang ditentukan oleh WHO, maka anak tersebut dianggap mengalami stunting (standar pertumbuhan anak WHO, 2016).</p>
        <p className='mb-5'><span className='me-5'></span>Penelitian yang dilakukan oleh para ahli sebelumnya mengindikasikan bahwa isu gizi pada anak (tinggi badan pendek, obesitas, PTM) berawal dari perkembangan janin dalam rahim ibu hingga anak mencapai usia 2 tahun (Kuwa, Mane, Ferni, Watu, dan Wega, 2021). Kekurangan gizi dapat mempengaruhi pertumbuhan dan perkembangan, menyebabkan kelainan pada bentuk fisik, meskipun gen di dalam sel dapat tumbuh secara normal.Stunting pada anak dalam periode singkat dapat menghambat pertumbuhan otak.Stunting pada anak dalam jangka pendek dapat menghambat pertumbuhan otak,kecerdasan, masalah pertumbuhan fisik,dan kelainan metabolisme di dalam tubuh. Kelemahan sistem imun, kemampuan kognitif yang mengalami penurunan , risiko besar kemunculan diabetes, obesitas, penyakit jantung, pembuluh nadi, kanker, stroke bahkan kecacatan pada usia dewasa bisa disebabkan oleh stunting dalam jangka waktu Panjang (KEMENDES PDTT, 2017).</p>
        <p className='mb-5'><span className='me-5'></span>Stunting merupakan salah satu tantangan serta masalah gizi yang bersifat global saat ini,dihadapi oleh penduduk di seluruh dunia. Organisasi Kesehatan Dunia (WHO) memperkirakan prevalensi stunting pada balita di seluruh dunia mencapai 22% atau sekitar 149,2 juta pada 2020. Asia Tenggara (30,7%), Afrika Tengah (36,8%) dan Oseania (41,4%) (WHO, 2020).Stunting di kalangan Balita (0 – 5 tahun) saat ini menjadi fokus perhatian pemerintah. Pada pemerintahan Indonesia saat ini menargetkan angka stunting sebesar 14%. Secara keseluruhan,angka prevalensi stunting masih serupa.</p>
      </div>
    </div>
  )
}

export default TentangStunting