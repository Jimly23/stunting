import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import balita1 from '../src/assets/bayi2.jpeg'
import balita2 from '../src/assets/balita2.png'
import balita3 from '../src/assets/balita3.jpg'
import Cookies from "js-cookie";
import { getUser } from '../src/api/users'
import { addHistory } from '../src/api/history'

const questions = [
  {
    id: 1,
    text: 'Apakah anak Ibu lahir dengan berat badan di bawah 2,5 kg?',
    options: ['A. Ya', 'B. Tidak', 'C. Tidak tahu'],
  },
  {
    id: 2,
    text: 'Apakah tinggi badan anak Ibu sesuai dengan usianya saat ini?',
    options: ['A. Lebih pendek dari anak seusianya', 'B. Sama seperti anak seusianya', 'C. Lebih tinggi dari anak seusianya'],
  },
  {
    id: 3,
    text: 'Bagaimana nafsu makan anak Ibu dalam 1 bulan terakhir?',
    options: ['A. Sering tidak nafsu makan', 'B. Kadang-kadang tidak nafsu makan', 'C. Selalu lahap'],
  },
  {
    id: 4,
    text: 'Sejak lahir, apakah anak Ibu mendapatkan ASI eksklusif selama 6 bulan pertama?',
    options: ['A. Tidak sama sekali', 'B. Sebagian saja', 'C. Ya, selama 6 bulan penuh'],
  },
  {
    id: 5,
    text: 'Apakah anak Ibu rutin dibawa ke Posyandu untuk ditimbang dan diukur tinggi badannya?',
    options: ['A. Tidak pernah', 'B. Kadang-kadang', 'C. Rutin setiap bulan'],
  },
  {
    id: 6,
    text: 'Apakah anak Ibu pernah mengalami sakit yang berulang (diare, demam, infeksi) dalam 3 bulan terakhir?',
    options: ['A. Sering', 'B. Kadang-kadang', 'C. Tidak pernah'],
  },
  {
    id: 7,
    text: 'Apa jenis makanan utama yang biasa diberikan pada anak setiap hari?',
    options: ['A. Nasi dan lauk seadanya', 'B. Makanan rumahan bervariasi', 'C. Makanan lengkap bergizi seimbang (karbohidrat, protein, sayur, buah)'],
  },
  {
    id: 8,
    text: 'Apakah Ibu mengetahui tentang pentingnya 1000 hari pertama kehidupan untuk mencegah stunting?',
    options: ['A. Tidak tahu sama sekali', 'B. Pernah dengar tapi kurang paham', 'C. Ya, dan saya paham betul'],
  },
  {
    id: 9,
    text: 'Apakah anak Ibu aktif bermain dan berinteraksi dengan lingkungan sekitarnya?',
    options: ['A. Tidak aktif sama sekali', 'B. Kadang-kadang aktif', 'C. Sangat aktif dan ceria'],
  },
  {
    id: 10,
    text: 'Apakah keluarga Ibu memiliki akses yang cukup terhadap air bersih dan sanitasi yang baik?',
    options: ['A. Tidak', 'B. Sebagian', 'C. Ya, sepenuhnya'],
  },
];

const CheckUp = () => {
  const [user, setUser] = useState(null);
  const user_id = Cookies.get("user_id");

  const [step, setStep] = useState(1);
  const [jenisKelamin, setJenisKelamin] = useState("")
  const [tanggalLahir, setTanggalLahir] = useState("")
  const [tinggi, setTinggi] = useState("")
  const [berat, setBerat] = useState("")

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

    useEffect(() => {
      const getDataUser = async () => {
        const response = await getUser(user_id);
        setUser(response);
      }
      getDataUser();
    }, [user_id]);

  const handleOptionChange = (questionId, option) => {
    setAnswers({
      ...answers,
      [questionId]: option,
    });
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer) {
        if (answer.startsWith('A')) totalScore += 1;
        else if (answer.startsWith('B')) totalScore += 2;
        else if (answer.startsWith('C')) totalScore += 3;
      }
    });
    return totalScore;
  };

  const getResultText = (score) => {
    if (score >= 26 && score <= 30) {
      return {
        img: balita3,
        title: 'Rendah risiko stunting',
        description: 'Anak dalam kondisi baik, terus dipantau dan dijaga.',
        advice: 'Pertahankan dengan nutrisi harian lengkap seimbang, serta stimulasi.',
        education: 'Meskipun anak berada pada kategori rendah risiko stunting, penting untuk terus memastikan asupan gizi yang seimbang setiap hari, termasuk protein hewani, sayur, buah, serta mencukupi kebutuhan cairan. Selain itu, stimulasi perkembangan anak seperti bermain bersama, membaca buku, dan komunikasi aktif akan membantu mengoptimalkan tumbuh kembangnya. Jangan lupa untuk rutin memeriksakan tumbuh kembang anak ke posyandu atau fasilitas kesehatan terdekat.'
      };      
    } else if (score >= 20 && score <= 25) {
      return {
        img: balita2,
        title: 'Risiko sedang',
        description: 'Perlu perhatian lebih terhadap gizi, kebersihan, dan pemantauan pertumbuhan.',
        advice: 'Tingkatkan kualitas makanan dan kebersihan lingkungan.',
        education: 'Anak dalam kategori risiko sedang membutuhkan perhatian ekstra untuk mencegah terjadinya stunting. Pastikan anak mendapatkan makanan yang bervariasi dan bergizi seimbang setiap hari, termasuk sumber protein, vitamin, dan mineral penting. Jaga kebersihan diri dan lingkungan untuk mencegah penyakit infeksi yang bisa menghambat pertumbuhan anak. Lakukan pemantauan rutin di posyandu atau fasilitas kesehatan, dan manfaatkan kesempatan untuk berkonsultasi dengan tenaga medis atau ahli gizi guna mendapatkan saran yang sesuai.'
      };      
    } else if (score >= 10 && score <= 19) {
      return {
        img: balita1,
        title: 'Risiko tinggi',
        description: 'Segera konsultasi ke tenaga kesehatan untuk intervensi.',
        advice: 'Segera periksakan anak ke fasilitas kesehatan untuk penanganan lebih lanjut.',
        education: 'Anak dengan risiko tinggi stunting memerlukan tindakan cepat untuk mencegah dampak jangka panjang pada tumbuh kembangnya. Segera konsultasikan kondisi anak ke tenaga kesehatan agar mendapatkan pemeriksaan menyeluruh dan intervensi yang tepat. Pastikan anak mengonsumsi makanan tinggi protein, zat besi, serta vitamin dan mineral penting lainnya. Perhatikan juga kebersihan lingkungan dan air minum untuk mencegah penyakit infeksi. Selain itu, ikuti jadwal imunisasi dan pemeriksaan rutin untuk memantau perkembangan anak secara berkala.'
      };      
    } else {
      return {
        title: 'Data tidak lengkap',
        description: 'Mohon lengkapi semua pertanyaan untuk mendapatkan hasil.',
        advice: ''
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(answers).length !== questions.length) {
      alert('Semua pertanyaan harus dijawab sebelum mengirim!');
      setError('Semua pertanyaan harus dijawab sebelum mengirim!');
      return;
    }
    const totalScore = calculateScore();
    const resultText = getResultText(totalScore);
    const historyData = questions.map((q) => ({
      questionId: q.id,
      questionText: q.text,
      answer: answers[q.id],
    }));

    const result = { score: totalScore, title: resultText.title, description: resultText.description, advice: resultText.advice, education: resultText.education }

    const history = { 
      totalScore: result.score,
      title: result.title,
      history: historyData, 
      result 
    };

    const data = {
      username: user.username,
      history
    }

    const response = await addHistory(data);
    console.log(response);

    setHistory(historyData);
    setResult({ img: resultText.img, score: totalScore, title: resultText.title, description: resultText.description, advice: resultText.advice, education: resultText.education });
    setStep(3);
  };


  const handleNext = async () => {
    if (jenisKelamin === "" || tanggalLahir === "" || tinggi === "" || berat === "") {
      alert("Data belum lengkap")
      return
    }
    setStep(2);
    const data = {
      jenisKelamin,
      tanggalLahir,
      tinggi,
      berat
    }
  }

  return (
    <div className='max-w-md mx-auto bg-white min-h-screen text-slate-900 pb-12 '>
      <div className='relative flex items-center text-white font-medium justify-center bg-[#5de0e6] py-3'>
        <Link to={'/home'}>
          <p className='absolute left-0 top-3.5 left-5'><FaArrowLeft size={20}/></p>
        </Link>
        <h5>Check Status Anak</h5>
      </div>
      {step === 1 && 
        <div className='font-medium flex flex-col p-5 relative'>
          <h5 className='text-center mb-5'>Masukan Data</h5>
          <select value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)} className='rounded-full p-2 px-4 outline-none border my-2'>
            <option value="">Jenis kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          <p className='text-sm'>Tanggal lahir</p>
          <input type="date" value={tanggalLahir} placeholder='Tanggal lahir' onChange={(e) => setTanggalLahir(e.target.value)} className='rounded-full p-2 px-4 outline-none border my-2' />
          <input type="number" value={tinggi} placeholder='Tinggi saat ini' onChange={(e) => setTinggi(e.target.value)} className='rounded-full p-2 px-4 outline-none border my-2' />
          <input type="number" value={berat} placeholder='Berat saat ini' onChange={(e) => setBerat(e.target.value)} className='rounded-full p-2 px-4 outline-none border my-2' />
          <button onClick={handleNext} className='w-full rounded-full font-medium bg-[#5de0e6] text-white py-2 mt-3'>Berikutnya</button>
        </div>
      }
      {step === 2 && 
        <div className='font-medium flex flex-col p-5 relative'>
          <div className='flex items-center justify-center relative'>
            <FaArrowLeft onClick={() => setStep(1)} className='absolute left-0 top-1'/>
            <h5 className='text-center mb-5'>Jawab Pertanyaan Ini</h5>
          </div>
          <form onSubmit={handleSubmit} className='mt-5'>
            {questions.map((question) => (
              <div key={question.id} className="mb-6">
                <p className="font-medium mb-2">{question.text}</p>
                {question.options.map((option, index) => (
                  <label key={index} className="flex items-center mb-1">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={() => handleOptionChange(question.id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-[#5de0e6] text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Kirim Jawaban
            </button>
          </form>  
        </div>
      }

      {step === 3 &&
        <>
          {result && (
            <div className="m-3 mt-6 p-4 bg-green-100 text-green-800 rounded text-center">
              <div className='flex items-center justify-center relative'>
                <FaArrowLeft onClick={() => setStep(2)} className='absolute left-0 top-1'/>
                <h5 className='text-center mb-5 font-medium text-xl'>Hasil</h5>
             </div>
             <div className='rounded-lg h-[200px] overflow-hidden mb-3'>
              <img src={result.img} className='w-full h-full object-cover' />
             </div>
              <p className="font-medium bg-white py-2 rounded-lg mb-2 p-2">{result.title}</p>
              <p className="font-medium bg-white py-2 rounded-lg mb-2 p-2">{result.description}</p>
              <p className="font-medium mt-2 text-lg">-- Saran --</p>
              <p className="font-medium bg-white py-2 rounded-lg mb-2 p-2">{result.advice}</p>
              <p className="font-medium mt-2 text-lg">-- Edukasi --</p>
              <p className="font-medium bg-white py-2 rounded-lg mb-2 p-2">{result.education}</p>
            </div>
          )}
        </>
      }
    </div>
  )
}

export default CheckUp