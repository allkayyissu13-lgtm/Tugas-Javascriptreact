import React from 'react';
import { ArrowRight, BookOpen, Award, MapPin } from 'lucide-react';

// 1. Import foto profil & foto-foto galeri kamu
import gambarUtama from '../assets/Barra.jpeg';
import fotoGaleri1 from '../assets/galeri1.jpeg'; // sesuaikan nama filenya
import fotoGaleri2 from '../assets/galeri2.jpeg';
import fotoGaleri3 from '../assets/galeri3.jpeg';

const ContentComponent = ({ activeSection, setActiveSection }) => {
  // 2. Buat array data galeri biar kodenya rapi
  const galeriData = [
    {
      id: 1,
      judul: "Kegiatan Kampus UPI",
      deskripsi: "Suasana belajar di FPMIPA",
      imgSrc: fotoGaleri1, // Pakai gambar lokal yang di-import
    },
    {
      id: 2,
      judul: "Project ReactJS",
      deskripsi: "Proses pembuatan web portfolio",
      imgSrc: fotoGaleri2,
    },
    {
      id: 3,
      judul: "Foto Bersama",
      deskripsi: "Dokumentasi kegiatan teman-teman",
      imgSrc: fotoGaleri3,
    },
    // Contoh kalau mau pakai URL dari internet langsung:
    {
      id: 4,
      judul: "Coding Session",
      deskripsi: "Belajar web dev",
      imgSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <main className="flex-grow pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section: Beranda */}
        {activeSection === 'beranda' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                Selamat Datang
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Halo, Saya <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Barra Alkayyisu
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Mahasiswa program studi <strong className="text-indigo-300 font-semibold">Pendidikan Ilmu Komputer</strong> di Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam, <strong className="text-indigo-300 font-semibold">Universitas Pendidikan Indonesia</strong>.
              </p>

              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm shadow-xl">
                <p className="text-slate-300 italic text-sm sm:text-base leading-relaxed">
                  "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-indigo-400 font-medium">
                  <span>— Eminem</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setActiveSection('tentang')}
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/25 transition-all duration-200"
                >
                  Tentang Saya <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => setActiveSection('kontak')}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium transition-all duration-200"
                >
                  Hubungi Saya
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-800 shadow-2xl">
                  <img
                    src={gambarUtama}
                    alt="Barra Alkayyisu"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section: Tentang Saya */}
        {activeSection === 'tentang' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white border-b border-slate-800 pb-4">Tentang Saya</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-800">
                <BookOpen className="text-indigo-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-white mb-2">Pendidikan</h3>
                <p className="text-slate-400">Pendidikan Ilmu Komputer - FPMIPA Universitas Pendidikan Indonesia (UPI)</p>
              </div>
              <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-800">
                <Award className="text-indigo-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-white mb-2">Fokus Pembelajaran</h3>
                <p className="text-slate-400">Web Development, Software Engineering, dan Computer Science Education.</p>
              </div>
            </div>
          </div>
        )}

        {/* 3. Section: Galeri (UPDATED) */}
        {activeSection === 'galeri' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white border-b border-slate-800 pb-4">Galeri Dokumentasi</h2>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galeriData.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl hover:border-indigo-500/50 transition-all duration-300"
                >
                  {/* Container Foto */}
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={item.imgSrc} 
                      alt={item.judul} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* Keterangan Foto */}
                  <div className="p-4 bg-slate-800/80 backdrop-blur-md">
                    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {item.judul}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section: Kontak */}
        {activeSection === 'kontak' && (
          <div className="space-y-8 max-w-xl">
            <h2 className="text-3xl font-bold text-white border-b border-slate-800 pb-4">Kontak</h2>
            <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="text-indigo-400" />
                <span>Bandung, Jawa Barat, Indonesia</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default ContentComponent;