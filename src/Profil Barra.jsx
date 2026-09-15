import React from 'react';
import './Barra.css'; 
import Gambar from "./assets/Barra.jpeg";

const LandingPageBarra = () => {
  return (
    <div className="landing-page">
      <nav>
        <div className="Menu">
          <h1>My Website</h1>
          <div className="Choices">
            <ul>
              <li><a href="Landing Page Barra.html">Beranda</a></li>
              <li><a href="Tentang Barra.html">Tentang Saya</a></li>
              <li><a href="Galeri Barra.html">Galeri</a></li>
              <li><a href="Kontak Barra.html">Kontak</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="Beranda">
        <div className="text">
          <h3>Selamat datang di Website saya</h3>

          <p>
            Halo! Perkenalkan, nama saya Barra Alkayyisu, saya adalah Mahasiswa program studi Pendidikan Ilmu Komputer 
            Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam 
            Universitas Pendidikan Indonesia.
          </p>

          <div className="foto">
            <img src= {Gambar} alt="BarraPic" width={200} />
          </div>

          <blockquote>
            "The truth is you don't know what is going to happen <br /> tomorrow.
            Life is crazy ride, and nothing is guaranteed"
          </blockquote>

          <h5>-Eminem-</h5>
        </div>
      </div>
    </div>
  );
};

export default LandingPageBarra;