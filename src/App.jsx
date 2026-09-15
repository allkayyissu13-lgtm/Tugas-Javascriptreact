import React from 'react';
import './Barra.css'; // Mengimpor file CSS terpisah
import gambar from "./assets/Barra.jpeg";

const LandingPageBarra = () => {
  return (
    <div className="landing-page-container">
      {/* Header / Navbar Section */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            My<span>Website</span>
          </a>
          <nav className="nav-menu">
            <ul>
              <li><a href="Landing Page Barra.html" className="active">Beranda</a></li>
              <li><a href="Tentang Barra.html">Tentang Saya</a></li>
              <li><a href="Galeri Barra.html">Galeri</a></li>
              <li><a href="Kontak Barra.html">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <div className="container hero-container">
          {/* Content Left */}
          <div className="hero-text">
            <span className="badge">Selamat Datang</span>
            <h1>
              Halo, Saya <span className="highlight">Barra Alkayyisu</span>
            </h1>
            <p className="description">
              Mahasiswa program studi <strong>Pendidikan Ilmu Komputer</strong> di 
              Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam, 
              <strong> Universitas Pendidikan Indonesia</strong>.
            </p>

            {/* Quote Card */}
            <div className="quote-card">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <blockquote>
                "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."
              </blockquote>
              <cite>— Eminem</cite>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a href="Tentang Barra.html" className="btn btn-primary">
                Tentang Saya <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="Kontak Barra.html" className="btn btn-secondary">
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Content Right: Photo Card */}
          <div className="hero-image">
            <div className="image-wrapper">
              <img src= {gambar} alt="Barra Alkayyisu" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPageBarra;