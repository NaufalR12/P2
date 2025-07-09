import React, { useState, useEffect } from "react";
import MediaSlider from "./components/MediaSlider";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? "navbar-scrolled" : ""}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <h2>Kampung Kebudayaan Pujokusuman</h2>
            </div>
            <div className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
              <a href="#beranda" onClick={() => smoothScroll("beranda")}>
                Beranda
              </a>
              <a href="#tentang" onClick={() => smoothScroll("tentang")}>
                Tentang
              </a>
              <a href="#kebudayaan" onClick={() => smoothScroll("kebudayaan")}>
                Kebudayaan
              </a>
              <a href="#galeri" onClick={() => smoothScroll("galeri")}>
                Galeri
              </a>
              <a href="#kontak" onClick={() => smoothScroll("kontak")}>
                Kontak
              </a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

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
              Melestarikan warisan budaya tradisional Indonesia dengan semangat
              gotong royong dan kebersamaan
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={() => smoothScroll("tentang")}>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="section contact">
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Kampung Kebudayaan Pujokusuman</h3>
              <p>
                Melestarikan budaya tradisional Indonesia dengan semangat gotong
                royong dan kebersamaan.
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
              &copy; 2024 Kampung Kebudayaan Pujokusuman. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
