import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import MediaSlider from "./components/MediaSlider";
import Kebudayaan from "./pages/Kebudayaan";
import Tentang from "./pages/Tentang";
import Galeri from "./pages/Galeri";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 50) {
          navbarRef.current.classList.add("navbar-scrolled");
        } else {
          navbarRef.current.classList.remove("navbar-scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const smoothScroll = (elementId) => {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section id="beranda" className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Selamat Datang di
              <br />
              Kampung Kebudayaan Pujokusuman
            </h1>
            <p className="hero-subtitle">
              "Dari jejak laskar Hantu Maut hingga geliat seni tradisi,
              Pujokusuman adalah ruang hidup budaya dan sejarah yang terus
              bernapas bersama warganya."
            </p>
            <div className="hero-buttons">
              <button
                className="btn"
                onClick={() => smoothScroll("media-slider")}
              >
                Jelajahi Sekarang
              </button>
              <button
                className="btn btn-outline"
                onClick={() => smoothScroll("kebudayaan")}
              >
                Lihat Kebudayaan
              </button>
            </div>
          </div>
        </div>
        <div className="hero-decoration floating">
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
        </div>
      </section>

      {/* Hero Media Slider Section - Positioned right after main hero */}
      <MediaSlider />

      {/* About Section */}
      <section id="tentang" className="section about">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Tentang Kampung Kebudayaan</h2>
            <p>Mengenal lebih dekat dengan sejarah dan visi misi kami</p>
          </div>
          <div className="about-content">
            <div className="about-text fade-in">
              <h3>Sejarah Pujokusuman</h3>
              <p>
                Kampung Kebudayaan Pujokusuman adalah sebuah kampung di
                Yogyakarta yang kaya akan tradisi dan budaya Jawa. Didirikan
                dengan tujuan melestarikan nilai-nilai luhur budaya tradisional
                Indonesia, kampung ini menjadi pusat pembelajaran dan
                pengembangan seni budaya.
              </p>

              <h3>Visi & Misi</h3>
              <div className="vision-mission">
                <div className="vision">
                  <h4>Visi</h4>
                  <p>
                    Menjadi kampung budaya terdepan dalam pelestarian dan
                    pengembangan budaya tradisional Indonesia.
                  </p>
                </div>
                <div className="mission">
                  <h4>Misi</h4>
                  <ul>
                    <li>Melestarikan warisan budaya tradisional</li>
                    <li>Mengembangkan potensi seni dan budaya masyarakat</li>
                    <li>Menciptakan ruang pembelajaran budaya yang inklusif</li>
                    <li>Membangun ekonomi kreatif berbasis budaya</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-image fade-in">
              <div className="image-placeholder">
                <div className="image-content">
                  <h4>Suasana Kampung</h4>
                  <p>Foto kampung dengan suasana tradisional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="kebudayaan" className="section culture">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Kebudayaan Kami</h2>
            <p>Berbagai tradisi dan kesenian yang dilestarikan</p>
          </div>
          <div className="culture-grid">
            {[
              {
                title: "Tari Tradisional",
                description:
                  "Berbagai tarian klasik Jawa yang dilestarikan dan diajarkan kepada generasi muda",
                icon: "💃",
              },
              {
                title: "Batik Tulis",
                description:
                  "Seni membatik tradisional dengan motif khas Yogyakarta yang autentik",
                icon: "🎨",
              },
              {
                title: "Gamelan",
                description:
                  "Musik tradisional Jawa dengan berbagai perangkat gamelan yang lengkap",
                icon: "🎵",
              },
              {
                title: "Kerajinan Tangan",
                description:
                  "Berbagai kerajinan tradisional seperti anyaman bambu dan ukir kayu",
                icon: "✋",
              },
              {
                title: "Kuliner Tradisional",
                description:
                  "Makanan khas Yogyakarta dengan resep turun temurun",
                icon: "🍲",
              },
              {
                title: "Wayang Kulit",
                description:
                  "Pertunjukan wayang kulit dengan dalang profesional",
                icon: "🎭",
              },
            ].map((item, index) => (
              <div key={index} className="culture-card fade-in">
                <div className="culture-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="culture-cta">
            <Link to="/kebudayaan" className="btn btn-primary">
              Lihat Detail Kebudayaan
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="section gallery">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Galeri Kegiatan</h2>
            <p>Dokumentasi kegiatan budaya dan kehidupan sehari-hari</p>
          </div>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className="gallery-item fade-in">
                <div className="gallery-placeholder">
                  <div className="gallery-overlay">
                    <h4>Kegiatan {item}</h4>
                    <p>Deskripsi kegiatan budaya</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="gallery-cta"
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            <Link to="/galeri" className="btn btn-primary">
              Lihat Detail Galeri
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section social-media-section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Ikuti Media Sosial Kami</h2>
            <p>
              Tetap terhubung dengan kegiatan dan update terbaru dari kampung
              kami
            </p>
          </div>
          <div className="social-media-grid">
            <a
              href="https://facebook.com/pujokusuman"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card facebook fade-in"
            >
              <div className="social-logo">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3>Facebook</h3>
              <p>Ikuti kegiatan harian dan acara kampung</p>
            </a>

            <a
              href="https://instagram.com/pujokusuman"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card instagram fade-in"
            >
              <div className="social-logo">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3>Instagram</h3>
              <p>Lihat foto dan story kegiatan budaya</p>
            </a>

            <a
              href="https://youtube.com/@pujokusuman"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card youtube fade-in"
            >
              <div className="social-logo">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3>YouTube</h3>
              <p>Tonton video dokumenter dan tutorial</p>
            </a>

            <a
              href="https://tiktok.com/@pujokusuman"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card tiktok fade-in"
            >
              <div className="social-logo">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
              <h3>TikTok</h3>
              <p>Video pendek kegiatan dan budaya</p>
            </a>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="section gallery">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Lokasi Kami</h2>
            <p>Temukan Kampung Kebudayaan Pujokusuman di Yogyakarta</p>
          </div>
          <div className="maps-container fade-in">
            <div className="maps-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3422.648765457053!2d110.36699412432293!3d-7.813804277586321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spujokusuman!5e1!3m2!1sid!2sid!4v1752162142941!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Kampung Pujokusuman"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="section social-media-section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Hubungi Kami</h2>
            <p>Ayo berkunjung dan bergabung dengan kegiatan budaya kami</p>
          </div>
          <div className="contact-content">
            <div className="contact-info fade-in">
              <div className="contact-item">
                <h3>📍 Alamat</h3>
                <p>
                  Kampung Pujokusuman
                  <br />
                  Yogyakarta, Indonesia
                </p>
              </div>
              <div className="contact-item">
                <h3>📞 Telepon</h3>
                <p>+62 274 123456</p>
              </div>
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>info@pujokusuman.id</p>
              </div>
              <div className="contact-item">
                <h3>🕒 Jam Kunjungan</h3>
                <p>
                  Senin - Minggu
                  <br />
                  08:00 - 17:00 WIB
                </p>
              </div>
            </div>
            <div className="contact-form fade-in">
              <form>
                <input type="text" placeholder="Nama Lengkap" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Nomor Telepon" />
                <textarea placeholder="Pesan Anda" rows="5" required></textarea>
                <button type="submit" className="btn">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const Navigation = () => {
    const location = useLocation();

    const handleMenuClick = (path, sectionId = null) => {
      setIsMenuOpen(false);

      if (sectionId && location.pathname === "/") {
        // Jika di homepage dan ada sectionId, scroll ke section
        setTimeout(() => smoothScroll(sectionId), 100);
      }
      // Jika path berbeda, React Router akan handle
    };

    return (
      <nav className="navbar" ref={navbarRef}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <Link to="/">
                <h2>Kampung Kebudayaan Pujokusuman</h2>
              </Link>
            </div>
            <div className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
              <Link to="/" onClick={() => handleMenuClick("/")}>
                Beranda
              </Link>
              <Link to="/tentang" onClick={() => handleMenuClick("/tentang")}>
                Tentang
              </Link>
              <Link
                to="/kebudayaan"
                onClick={() => handleMenuClick("/kebudayaan")}
              >
                Kebudayaan
              </Link>
              <Link to="/galeri" onClick={() => handleMenuClick("/galeri")}>
                Galeri
              </Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <Router>
      <div className="App">
        <Navigation />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kebudayaan" element={<Kebudayaan />} />
          <Route path="/galeri" element={<Galeri />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Kampung Kebudayaan Pujokusuman</h3>
                <p>
                  Melestarikan budaya tradisional Indonesia dengan semangat
                  gotong royong dan kebersamaan.
                </p>
              </div>
              <div className="footer-section">
                <h4>Menu</h4>
                <ul>
                  <li>
                    <a href="#beranda">Beranda</a>
                  </li>
                  <li>
                    <a href="#tentang">Tentang</a>
                  </li>
                  <li>
                    <a href="#kebudayaan">Kebudayaan</a>
                  </li>
                  <li>
                    <a href="#galeri">Galeri</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Kontak</h4>
                <p>📍 Yogyakarta, Indonesia</p>
                <p>📞 +62 274 123456</p>
                <p>✉️ info@pujokusuman.id</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>
                &copy; 2025 Kampung Kebudayaan Pujokusuman. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
