import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

const PenyebabStunting = () => {
  return (
    <div className='max-w-md mx-auto bg-white min-h-screen text-slate-900 pb-12 '>
      <div className='relative flex items-center text-white font-medium justify-center bg-[#5de0e6] py-3'>
        <Link to={'/home'}>
          <p className='absolute left-0 top-3.5 left-5'><FaArrowLeft size={20}/></p>
        </Link>
        <h5>Penyebab Stunting</h5>
      </div>
      <div className='p-2 pt-5 text-justify'>
        <h1 className='font-medium text-lg mb-4'>Apa Penyebab dari Stunting?</h1>
        {/* <div className='w-full h-[200px] border rounded-lg mb-5'>
          <img src="" alt="" />
        </div> */}
        <p className='mb-2'><span className='me-5'></span>Berdasarkan BAPPENAS (2013), stunting pada anak diakibatkan oleh berbagai faktor, meliputi dari aspek langsung maupun tidak langsung. Faktor-faktor yang menyebabkan stunting adalah :</p>
        <div className='mb-3'>
          <p className='font-medium'>1. Asupan Nutrisi Bayi</p>
          <p className='ps-5'><span className='me-5'></span>Konsumsi nutrisi yang cukup sangat penting untuk pertumbuhan dan perkembangan badan anak kecil. Masa kritis ini adalah periode ketika balita akan mengalami pertumbuhan kembang dan berkembang cepat. Balita yang sebelumnya menghadapi masalah kekurangan gizi masih dapat ditingkatkan melalui asupan yang baik sehingga dapat melakukan pertumbuhan yang optimal sejalan dengan kemajuannya</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>2. Penyakit Infeksi</p>
          <p className='ps-5 mb-3'><span className='me-5'></span>Penyakit infeksi adalah salah satu penyebab langsung terjadinya stunting. Anak kecil yang mengalami kekurangan gizi akan lebih rentan terhadap penyakit infeksi. Penyakit menular yang umum diderita anak kecil seperti cacingan, Infeksi Saluran Pernapasan Atas (ISPA), diare serta infeksi yang lain sangat terkait dengan status kualitas pelayanan kesehatan dasar terutama vaksinasi, mutu lingkungan hidup dan gaya hidup sehat.</p>
          <p className='ps-5'><span className='me-5'></span>Sebuah studi yang dilakukan oleh Rahayuwati, dkk. 2020 menyatakan bahwa anak-anak yang sakit memiliki risiko stunting 1,65 kali lebih besar dibandingkan anak yang sehat. Data Susenas Maret 2021 mengungkapkan bahwa 11,75 persen anak usia 0-17 tahun memiliki masalah kesehatan yang menyebabkan gangguan dalam aktivitas  sehari-hari atau yang dapat dikatakan merasakan sakit. Dalam 3 (tiga) tahun terakhir, terdapat penurunan persentase anak berusia 0-17 tahun yang mengalami sakit (Profil Statistik Kesehatan, 2021)</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>4. Faktor Ibu</p>
          <p className='ps-5'><span className='me-5'></span>Faktor ibu bisa disebabkan oleh asupan nutrisi yang tidak baik selama masa prakonsepsi, kehamilan, dan laktasi. Di samping itu, juga dipengaruhi oleh fisik ibu seperti usia yang masih sangat muda atau terlalu lanjut usia, rendah, penyakit, kehamilan awal, kesehatan mental, bayi berat lahir rendah, pertumbuhan janin terhambat, dan kelahiran prematur, interval kelahiran yang singkat, dan tekanan darah tinggi.</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>3. Faktor Genetik</p>
          <p className='ps-5'><span className='me-5'></span>Faktor genetik adalah aset fundamental untuk mencapai hasil dalam proses pertumbuhan. Dengan genetik yang terdapat dalam sel telur yang telah terfertilisasi dapat menentukan mutu dan jumlah pertumbuhan. Hal ini ditunjukkan melalui tingkat dan laju pembelahan, tingkat kepekaan jaringan terhadap rangsangan, usia pubertas dan proses penghentian perkembangan tulang.</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>5. ASI Eksklusif</p>
          <p className='ps-5'><span className='me-5'></span>Faktor genetik adalah aset fundamental untuk mencapai hasil dalam proses pertumbuhan. Dengan genetik yang terdapat dalam sel telur yang telah terfertilisasi dapat menentukan mutu dan jumlah pertumbuhan. Hal ini ditunjukkan melalui tingkat dan laju pembelahan, tingkat kepekaan jaringan terhadap rangsangan, usia pubertas dan proses penghentian perkembangan tulang.</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>6. Ketersedian Pangan</p>
          <p className='ps-5'><span className='me-5'></span>Ketersediaan makanan yang tidak mencukupi dapat menyebabkan       kurangnya pemenuhan nutrisi yang diterima ada dalam keluarga itu sendiri. Rata-rata konsumsi kalori dan protein anak-anak balita di Indonesia masih kurang dari Angka Kecukupan Gizi (AKG) yang dapat menyebabkan Balita perempuan dan balita laki-laki di Indonesia memiliki rata-rata tinggi tubuh masing-masing 6,7 cm dan 7,3 cm lebih rendah dibandingkan dengan standar acuan WHO.</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>7. Faktor Sosial Ekonomi</p>
          <p className='ps-5'><span className='me-5'></span>Kondisi ekonomi yang lemah dipandang memiliki pengaruh yang besar terhadap kemungkinan anak tumbuh menjadi kurus dan rendah. Tingkat ekonomi keluarga yang rendah akan berpengaruh pada pilihan makanan yang dikonsumsinya sehingga umumnya menjadi lebih monoton dan jumlahnya menurun terutama pada bahan makanan yang berperan dalam perkembangan anak sebagai penyedia protein, vitamin, dan mineral, yang menyebabkan peningkatan risiko kekurangan gizi.</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>8. Faktor Pendidikan Ibu</p>
          <p className='ps-5'><span className='me-5'></span>Pendidikan ibu yang minim dapat berdampak pada cara membesarkan dan merawat anak. Selain itu juga mempengaruhi dalam pemilihan serta cara penyajian makanan  yang akan dikonsumsi oleh anak. Penyediaan bahan dan menu makanan yang sesuai untuk balita dalam usaha meningkatkan status gizi, hal ini dapat tercapai jika ibu memiliki tingkat ilmu nutrisi yang baik. Ibu yang memiliki pendidikan rendah akan mengalami kesulitan dalam menyerap serta memahami informasi gizi sehingga anak berisiko terjadinya stunting.</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>9. Faktor Lingkungan</p>
          <p className='ps-5'><span className='me-5'></span>Lingkungan rumah bisa disebabkan oleh stimulasi dan kegiatan yang kurang memadai, pelaksanaan perawatan yang kurang baik, ketidakstabilan pangan, distribusi pangan yang tidak tepat, minimnya pendidikan pengasuh. Anak-anak yang berasal dari keluarga yang tidak memiliki sarana air dan sanitasi yang memadai berisiko mengalami stunting.</p>
        </div>
      </div>
    </div>
  )
}

export default PenyebabStunting