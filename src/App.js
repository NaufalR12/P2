import React, { useState, useEffect, useRef } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import MediaSlider from "./components/MediaSlider";
import Kebudayaan from "./pages/Kebudayaan";
import BudayaDetail from "./pages/BudayaDetail";
import Tentang from "./pages/Tentang";
import Galeri from "./pages/Galeri";
import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { Image, CloudinaryContext } from "cloudinary-react";
import MusicPlayer from "./components/MusicPlayer";
import emailjs from "@emailjs/browser";
import Notification from "./components/Notification";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const { t } = useTranslation();
  const formRef = useRef();
  const [notif, setNotif] = useState({ message: "", type: "success" });

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

  const sendEmail = (e) => {
    e.preventDefault();

    // Tambahkan waktu pengiriman ke form
    const currentTime = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Buat input hidden untuk waktu
    const timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = currentTime;
    formRef.current.appendChild(timeInput);

    emailjs
      .sendForm(
        "service_i9sm5dp", // Service ID
        "template_pgoyytq", // Ganti dengan Template ID kamu
        formRef.current,
        "C6Yszf5xDJobY5TJC" // Public Key
      )
      .then(
        (result) => {
          setNotif({ message: "Pesan berhasil dikirim!", type: "success" });
          formRef.current.reset();
          setTimeout(() => setNotif({ ...notif, message: "" }), 5000);
        },
        (error) => {
          setNotif({
            message: "Gagal mengirim pesan. Silakan coba lagi.",
            type: "error",
          });
          setTimeout(() => setNotif({ ...notif, message: "" }), 5000);
        }
      )
      .finally(() => {
        // Hapus input waktu setelah pengiriman
        if (timeInput.parentNode) {
          timeInput.parentNode.removeChild(timeInput);
        }
      });
  };

  const HomePage = () => {
    const location = useLocation();
    useEffect(() => {
      if (location.hash === "#kontak") {
        setTimeout(() => {
          const kontakSection = document.getElementById("kontak");
          if (kontakSection) {
            kontakSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 200);
      }
    }, [location]);

    return (
      <>
        {/* Hero Section */}
        <section id="beranda" className="hero">
          <div className="hero-bg"></div>
          <div className="container">
            <div className="hero-content fade-in">
              {/* Logo/Foto di atas tulisan - Versi Cloudinary */}
              <div className="hero-logo">
                <CloudinaryContext cloudName="ddfcjabrm">
                  <Image
                    publicId="logopujo_kk3ewl"
                    width="300"
                    height="300"
                    style={{
                      objectFit: "cover",
                    }}
                    alt="Logo Kampung Kebudayaan Pujokusuman"
                  />
                </CloudinaryContext>
              </div>

              <h1 className="hero-title">
                {t("heroTitle")}
                <br />
                {t("heroSubtitle")}
              </h1>
              <p className="hero-subtitle">{t("heroDescription")}</p>
              <div className="hero-buttons">
                <button
                  className="btn"
                  onClick={() => smoothScroll("media-slider")}
                >
                  {t("exploreNow")}
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => smoothScroll("kebudayaan")}
                >
                  {t("viewCulture")}
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
              <h2>{t("aboutTitle")}</h2>
              <p>{t("aboutSubtitle")}</p>
            </div>
            <div className="about-content">
              <div className="about-text fade-in">
                <h3>{t("historyTitle")}</h3>
                <p>{t("historyDescription")}</p>

                <h3>{t("visionMissionTitle")}</h3>
                <div className="vision-mission">
                  <div className="vision">
                    <h4>{t("vision")}</h4>
                    <ul>
                      <li>{t("visionA")}</li>
                      <li>{t("visionB")}</li>
                      <li>{t("visionC")}</li>
                    </ul>
                  </div>
                  <div className="mission">
                    <h4>{t("mission")}</h4>
                    <ul>
                      <li>{t("missionA")}</li>
                      <li>{t("missionB")}</li>
                      <li>{t("missionC")}</li>
                      <li>{t("missionD")}</li>
                      <li>{t("missionE")}</li>
                      <li>{t("missionF")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="about-image fade-in">
                <CloudinaryContext cloudName="ddfcjabrm">
                  <Image
                    publicId="DSC07277_ip8vtk"
                    width="100%"
                    style={{ borderRadius: "20px", marginBottom: "1rem" }}
                    alt={t("kampungAtmosphere")}
                  />
                </CloudinaryContext>
                <div className="image-content">
                  <h4>{t("kampungAtmosphere")}</h4>
                  <p>{t("traditionalPhoto")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="kebudayaan" className="section culture">
          <div className="container">
            <div className="section-header fade-in">
              <h2>{t("cultureTitle")}</h2>
              <p>{t("cultureSubtitle")}</p>
            </div>
            <div className="culture-grid">
              {[
                {
                  title: t("culture1Title"), // Sanggar Tari
                  description: t("culture1Desc"),
                  icon: "💃",
                },
                {
                  title: t("culture2Title"), // Jemparingan
                  description: t("culture2Desc"),
                  icon: "🏹",
                },
                {
                  title: t("culture3Title"), // Teater – Sanggar Obah
                  description: t("culture3Desc"),
                  icon: "🎭",
                },
                {
                  title: t("culture4Title"), // Ketoprak
                  description: t("culture4Desc"),
                  icon: "🎬",
                },
                {
                  title: t("culture5Title"), // Orkes Kentongan
                  description: t("culture5Desc"),
                  icon: "🥁",
                },
                {
                  title: t("culture6Title"), // Jathilan
                  description: t("culture6Desc"),
                  icon: "🐎",
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
                {t("viewCultureDetails")}
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeri" className="section gallery">
          <div className="container">
            <div className="section-header fade-in">
              <h2>{t("galleryTitle")}</h2>
              <p>{t("gallerySubtitle")}</p>
            </div>
            <div className="gallery-grid">
              {[
                {
                  publicId: "DSC07518_bgcqsq",
                  title: t("Sanggar Tari"),
                  description: t("Aktivitas latihan tari"),
                },
                {
                  publicId: "IMG-20211127-WA0008_eruzi0",
                  title: t("Jemparingan"),
                  description: t("Lomba jemparingan"),
                },
                {
                  publicId: "Screenshot_2025-07-20_164214_a9vybk",
                  title: t("Teater Sanggar Obah"),
                  description: t(
                    "Deskripsi aktivitas budaya Teater tradisional"
                  ),
                },
                {
                  publicId: "IMG-20250716-WA0048_zfueb5",
                  title: t("Ketoprak"),
                  description: t(
                    "Deskripsi aktivitas budaya Ketoprak atau drama tradisional"
                  ),
                },
                {
                  publicId: "orkes_gypwn2",
                  title: t("Orkes Kentongan"),
                  description: t("Deskripsi aktivitas budaya Orkes Kentongan"),
                },
                {
                  publicId: "jatilan_qsmvtj",
                  title: t("Jathilan"),
                  description: t(
                    "Deskripsi aktivitas budaya Jathilan atau tari kuda lumping"
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="gallery-item fade-in">
                  <div className="gallery-image-container">
                    <img
                      src={`https://res.cloudinary.com/ddfcjabrm/image/upload/c_fill,w_400,h_250/${item.publicId}.jpg`}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="gallery-cta"
              style={{ textAlign: "center", marginTop: "2rem" }}
            >
              <Link to="/galeri" className="btn btn-primary">
                {t("viewGalleryDetails")}
              </Link>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="section social-media-section">
          <div className="container">
            <div className="section-header fade-in">
              <h2>{t("socialMediaTitle")}</h2>
              <p>{t("socialMediaSubtitle")}</p>
            </div>
            <div className="social-media-grid">
              <a
                href="https://www.instagram.com/kampungpujokusumanyk?igsh=bDUzb2NkdWo1dnc="
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
                <h3>{t("instagram")}</h3>
                <p>{t("instagramDesc")}</p>
              </a>

              <a
                href="https://www.youtube.com/channel/UCCPyxwIkxWXAxAq1iL47yiQ"
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
                <h3>{t("youtube")}</h3>
                <p>{t("youtubeDesc")}</p>
              </a>
            </div>
          </div>
        </section>

        {/* Maps Section */}
        <section className="section gallery">
          <div className="container">
            <div className="section-header fade-in">
              <h2>{t("locationTitle")}</h2>
              <p>{t("locationSubtitle")}</p>
            </div>
            <div className="maps-container fade-in">
              <div className="maps-wrapper">
                <iframe
                  src="https://storymaps.arcgis.com/stories/266dbfcead6347ac984a76f1904e0246"
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  allowFullScreen
                  allow="geolocation"
                  title={t("mapsTitle")}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="section social-media-section">
          <div className="container">
            <div className="section-header fade-in">
              <h2>{t("contactTitle")}</h2>
              <p>{t("contactSubtitle")}</p>
            </div>
            <div className="contact-content">
              <div className="contact-info fade-in">
                <div className="contact-item">
                  <h3>📍 {t("address")}</h3>
                  <p>
                    Kampung Pujokusuman
                    <br />
                    Yogyakarta, Indonesia
                  </p>
                </div>
                <div className="contact-item">
                  <h3>✉️ {t("email")}</h3>
                  <p>djelajahpujoku@gmail.com</p>
                </div>
              </div>
              <div className="contact-form fade-in">
                <form ref={formRef} onSubmit={sendEmail}>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("fullName")}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t("email")}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("phoneNumber")}
                  />
                  <textarea
                    name="message"
                    placeholder={t("yourMessage")}
                    rows="5"
                    required
                  ></textarea>
                  <button type="submit" className="btn">
                    {t("sendMessage")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  const Navigation = () => {
    const location = useLocation();

    const handleMenuClick = (path, sectionId = null) => {
      setIsMenuOpen(false);

      if (sectionId && location.pathname === "/") {
        setTimeout(() => smoothScroll(sectionId), 100);
      }
    };

    return (
      <nav className="navbar" ref={navbarRef}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <Link to="/">
                <h2>{t("siteName")}</h2>
              </Link>
            </div>
            <div className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
              <Link to="/" onClick={() => handleMenuClick("/")}>
                {t("navHome")}
              </Link>
              <Link to="/tentang" onClick={() => handleMenuClick("/tentang")}>
                {t("navAbout")}
              </Link>
              <Link
                to="/kebudayaan"
                onClick={() => handleMenuClick("/kebudayaan")}
              >
                {t("navCulture")}
              </Link>
              <Link to="/galeri" onClick={() => handleMenuClick("/galeri")}>
                {t("navGallery")}
              </Link>
              {/* Language Switcher untuk mobile - di dalam hamburger menu */}
              <div className="nav-lang-switcher-mobile">
                <LanguageSwitcher />
              </div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* Language Switcher untuk desktop - di luar hamburger menu */}
            <div className="nav-lang-switcher-desktop">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <HelmetProvider>
      <CloudinaryContext cloudName="ddfcjabrm">
        <Router>
          <div className="App">
            <MusicPlayer />
            <Notification
              message={notif.message}
              type={notif.type}
              onClose={() => setNotif({ ...notif, message: "" })}
            />
            <Navigation />

            {/* Routes */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tentang" element={<Tentang />} />
              <Route path="/kebudayaan" element={<Kebudayaan />} />
              <Route path="/kebudayaan/:id" element={<BudayaDetail />} />
              <Route path="/galeri" element={<Galeri />} />
            </Routes>

            {/* Footer */}
            <footer className="footer">
              <div className="container">
                <div className="footer-content">
                  <div className="footer-section">
                    <h3>{t("siteName")}</h3>
                    <p>{t("heroDescription")}</p>
                  </div>
                  <div className="footer-section">
                    <h4>{t("footerMenu")}</h4>
                    <ul>
                      <li>
                        <a href="#beranda">{t("navHome")}</a>
                      </li>
                      <li>
                        <a href="#tentang">{t("navAbout")}</a>
                      </li>
                      <li>
                        <a href="#kebudayaan">{t("navCulture")}</a>
                      </li>
                      <li>
                        <a href="#galeri">{t("navGallery")}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <h4>{t("footerContact")}</h4>
                    <p>Yogyakarta, Indonesia</p>
                    <p>✉️ djelajahpujoku@gmail.com</p>
                  </div>
                </div>
                <div className="footer-bottom">
                  &copy; {new Date().getFullYear()} {t("siteName")}. All rights
                  reserved.
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </CloudinaryContext>
    </HelmetProvider>
  );
}

export default App;
