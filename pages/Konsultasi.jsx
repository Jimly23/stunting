import React, { useEffect, useState } from 'react'
import { GoogleGenAI } from "@google/genai";
import { MdSend } from 'react-icons/md';
import {FaChevronLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Konsultasi = () => {
  const ai = new GoogleGenAI({ apiKey: "AIzaSyAS5bqB0yep0n-Mhn2ufySd9llKM0g-vuU" });
  const [historyChat, setHistoryChat] = useState([]);
  const [prompt, setPrompt] = useState("");

  const chat = async () => {
    if (!prompt.trim()) return;

    const formattedHistory = historyChat.map(item => ({
      role: item.role,
      parts: [{ text: item.content }]
    }));

    const userPrompt = `
    Jika seseorang menyapa seperti “halo” atau sejenisnya, jawabannya yaitu kamu berperan sebagai seorang konsultan kesehatan stunting dan nama kamu adalah Besar, kemudian sapa balik.
    ${prompt}
    Jawaban dalam paragraf biasa saja.
    Balas dalam format JSON, hanya satu key yaitu "result".
    Gunakan bahasa Indonesia.
    `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [
          ...formattedHistory,
          { role: "user", parts: [{ text: userPrompt }] }
        ],
        generationConfig: {
          temperature: 0.8
        }
      });

      setPrompt("");

      let resultText = response.text;

      // Bersihkan dari tag markdown jika ada
      if (resultText.startsWith("```json")) {
        resultText = resultText.replace(/```json|```/g, '').trim();
      }

      let result;
      try {
        result = JSON.parse(resultText);
      } catch (err) {
        // Jika gagal parsing, tampilkan teks mentahnya
        result = { result: resultText };
      }

      setHistoryChat([
        ...historyChat,
        { role: "user", content: prompt },
        { role: "assistant", content: result.result }
      ]);
    } catch (error) {
      console.error("Error saat memanggil AI:", error);
    }
  };

  return (
    <div className='relative max-w-md mx-auto bg-[#5de0e6] min-h-screen text-slate-900 py-12'>
      <div className='relative'>
        <Link to={'/home'}>
          <FaChevronLeft size={20} className='absolute mt-2 left-5 text-white cursor-pointer'/>
        </Link>
        <h3 className='font-bold text-2xl text-center mb-5 text-white'>Konsultasi</h3>
      </div>

      <div className='chat fixed top-20 left-0 right-0 bottom-24 overflow-auto scrollbar-hide'>
        <div className='max-w-md mx-auto font-medium flex flex-col p-5 relative text-slate-700 space-y-4 pb-32'>
          {historyChat.map((item, index) => (
            <div key={index} className={`max-w-[90%] p-3 rounded-lg ${item.role === "user" ? 'bg-white self-end' : 'bg-white self-start'}`}>
              <p className='text-sm'>{item.content}</p>
            </div>
          ))}
        </div>

      </div>

      <div className='fixed bottom-10 left-0 right-0 px-2'>
        <div className='max-w-[400px] mx-auto flex items-center justify-between font-medium px-4 py-2 mx-3 bg-white rounded-full'>
          <input
            type="text"
            value={prompt}
            placeholder='Mau tanya apa?'
            className='w-full outline-none text-slate-700'
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') chat(); }}
          />
          <button onClick={chat}><MdSend size={23} className='text-slate-600'/></button>
        </div>
      </div>
    </div>
  );
};

export default Konsultasi;
