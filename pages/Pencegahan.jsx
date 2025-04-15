import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

const Pencegahan = () => {
  return (
    <div className='max-w-md mx-auto bg-white min-h-screen text-slate-900 pb-12 '>
      <div className='relative flex items-center text-white font-medium justify-center bg-[#5de0e6] py-3'>
        <Link to={'/home'}>
          <p className='absolute left-0 top-3.5 left-5'><FaArrowLeft size={20}/></p>
        </Link>
        <h5>Pencegahan Stunting</h5>
      </div>
      <div className='p-2 pt-5 text-justify'>
        <h1 className='font-medium text-lg mb-4'>Bagaimana Pencegahan Stunting?</h1>
        {/* <div className='w-full h-[200px] border rounded-lg mb-5'>
          <img src="" alt="" />
        </div> */}
        <p className='mb-5'><span className='me-5'></span>Pengurangan konsumsi makanan tertentu yang dapat meningkatkan risiko stunting perlu dilakukan. Solusi tersebut juga mengutamakan Pelaksanaan kebijakan yang tegas dan terbukti efektif untuk menangani akses terhadap makanan bergizi serta surplus makanan dan minuman olahan yang berlemak tidak sehat, gula tambahan, dan/atau garam, mencakup kebijakan fiskal, regulasi pemasaran yang berbahaya, dukungan serta promosi menyusui, serta pelabelan nutrisi pada kemasan makanan (WHO, 2023).Tes kesehatan atau pemeriksaan kesehatan sebelum kehamilan memiliki peran penting dalam mencegah stunting. Fase pra-kehamilan, yang dikenal sebagai periode pra-konsepsi, berkaitan dengan wanita dewasa atau subur yang bersiap untuk jadi ibu. </p>
        <p className='mb-5'><span className='me-5'></span>Pada fase krusial ini, kebutuhan gizi bervariasi secara signifikan. Oleh sebab itu, sangat penting untuk melakukan pemeriksaan kesehatan tidak hanya sebelum pernikahan, tetapi juga sesudah menikah, terutama penilaian keadaan gizi. Kesalahan  dalam menangani status gizi buruk dapat mengakibatkan kelahiran bayi dengan berat badan di bawah normal, yang meningkatkan kemungkinan terjadinya stunting. Ibu hamil yang mengalami kekurangan energi kronis (KEK) atau anemia selama kehamilan memiliki risiko lebih tinggi untuk melahirkan bayi dengan berat badan rendah(BBLR).BBLR secara konsisten dihubungkan dengan terhambatnya laju pertumbuhan atau penurunan tinggi badan. Oleh karena itu, sangat penting untuk secara aktif menangani isu ini dengan menerapkan atau memperbaiki kebijakan yang memprioritaskan peningkatan intervensi gizi dan pelayanan kesehatan ibu, dengan perhatian khusus pada periode remaja awal (WHO, 2014).adapun beberapa cara pencegahan stunting menurut Trimuliana (2020) :</p>
        <div className='mb-3'>
          <p className='font-medium'>1. Pada Ibu Hamil</p>
          <p className='ps-5 my-1'>a) Intervensi selama 1.000 hari pertama kehidupan adalah usaha untuk meningkatkan gizi dari masa kehamilan hingga anak berumur dua tahun.</p>
          <p className='ps-5 mb-1'>b) Memastikan kualitas antenatal care (ANC) yang terintegrasi, adalah salah satu program utama dalam pengawasan pelayanan KIA yang dimulai dari masa kehamilan hingga setelah melahirkan. Layanan ini sangat krusial bagi wanita hamil yang bertujuan untuk mencegah komplikasi selama masa kehamilan dan setelah melahirkan</p>
          <p className='ps-5 mb-1'>c) Melaksanakan program penyediaan makanan yang tinggi kalori, protein, dan mikronutrien (TKPM). Pemenuhan kebutuhan zat gizi ibu hamil. Ibu hamil perlu mendapatkan makanan yang cukup gizi, suplementasi zat gizi (tablet zat besi), dan terpantau kesehatannya.</p>
          <p className='ps-5 mb-1'>d) Pendeteksian awal  terkait penyakit (baik menular maupun tidak menular).</p>
          <p className='ps-5 mb-1'>e) Pengendalian cacingan.</p>
          <p className='ps-5 mb-1'>f) Memperbaiki transformasi Kartu Menuju Sehat (KMS) ke dalam Buku KIA</p>
          <p className='ps-5 mb-1'>g) Melaksanakan konseling untuk Inisiasi Menyusu Dini (IMD) dan pemberian ASI secara eksklusif.</p>
          <p className='ps-5 mb-1'>h) Pendidikan dan pelayanan keluarga berencana.</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>2. Pada Balita</p>
          <p className='ps-5 my-1'>a) Pengawasan perkembangan anak kecil.</p>
          <p className='ps-5 mb-1'>b) Melaksanakan kegiatan Pemberian Makanan Tambahan (PMT) bagi anak dan balita.</p>
          <p className='ps-5 mb-1'>c) Melaksanakan stimulasi awal bagi perkembangan bayi dan anak </p>
          <p className='ps-5 mb-1'>d) Menyediakan layanan kesehatan yang maksimal</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>3. Pada Anak Usia Sekolah</p>
          <p className='ps-5 my-1'>a) Melaksanakan revitalisasi Usaha Kesehatan Sekolah (UKS).</p>
          <p className='ps-5 mb-1'>b) Memperkuat struktur kelembagaan Tim Pembina UKS.</p>
          <p className='ps-5 mb-1'>c) Menyelenggarakan Program Nutrisi untuk Anak Sekolah (PROGAS). </p>
          <p className='ps-5 mb-1'>d) Menetapkan sekolah sebagai area yang bebas dari rokok dan narkoba.</p>
        </div>
        <div className='mb-3'>
          <p className='font-medium'>4. Pada Remaja</p>
          <p className='ps-5 my-1'>a) Melakukan  penyuluhan untuk perilaku hidup bersih dan sehat (PHBS), pola gizi seimbang, tidak merokok, dan mengonsumsi narkoba.</p>
          <p className='ps-5 mb-1'>b) Pendidikan kesehatan reproduksi. </p>
        </div>
      </div>
    </div>
  )
}

export default Pencegahan