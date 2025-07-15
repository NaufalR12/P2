import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "./Galeri.css";

const Galeri = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedImage, setSelectedImage] = useState(null);

  // Modified to ensure no duplicate items with the same title
  const galeriItems = [
    {
      id: 1,
      title: t("galeriItem1Title", "Pertunjukan Tari Klasik"),
      category: "tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/kampung-pujokusuman/tari-1.jpg",
      description: t(
        "galeriItem1Desc",
        "Pentas tari Srimpi oleh sanggar tari kampung"
      ),
    },
    {
      id: 2,
      title: t("galeriItem2Title", "Workshop Batik"),
      category: "kerajinan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/kampung-pujokusuman/batik-1.jpg",
      description: t(
        "galeriItem2Desc",
        "Kegiatan membatik bersama anak-anak kampung"
      ),
    },
    {
      id: 3,
      title: t("galeriItem3Title", "Latihan Jemparingan"),
      category: "olahraga",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/kampung-pujokusuman/jemparingan-1.jpg",
      description: t(
        "galeriItem3Desc",
        "Sesi latihan panahan tradisional di halaman kampung"
      ),
    },
    {
      id: 4,
      title: t("galeriItem4Title", "Festival Jathilan"),
      category: "pertunjukan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/kampung-pujokusuman/jathilan-1.jpg",
      description: t(
        "galeriItem4Desc",
        "Pertunjukan jathilan dalam festival tahunan"
      ),
    },
    {
      id: 5,
      title: t("galeriItem5Title", "Gotong Royong"),
      category: "kegiatan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/kampung-pujokusuman/gotong-royong-1.jpg",
      description: t(
        "galeriItem5Desc",
        "Kegiatan gotong royong membersihkan kampung"
      ),
    },
    {
      id: 6,
      title: t("galeriItem6Title", "Upacara Ruwatan"),
      category: "ritual",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/kampung-pujokusuman/ruwatan-1.jpg",
      description: t("galeriItem6Desc", "Upacara ruwatan dengan wayang kulit"),
    },
  ];

  // Remove any duplicates from the array by title
  const uniqueItems = [
    ...new Map(galeriItems.map((item) => [item.title, item])).values(),
  ];

  const categories = [
    { key: "semua", label: t("galeriCatSemua", "Semua") },
    { key: "tari", label: t("galeriCatTari", "Tari") },
    { key: "kerajinan", label: t("galeriCatKerajinan", "Kerajinan") },
    { key: "olahraga", label: t("galeriCatOlahraga", "Olahraga") },
    { key: "pertunjukan", label: t("galeriCatPertunjukan", "Pertunjukan") },
    { key: "kegiatan", label: t("galeriCatKegiatan", "Kegiatan") },
    { key: "ritual", label: t("galeriCatRitual", "Ritual") },
  ];

  const filteredItems =
    selectedCategory === "semua"
      ? uniqueItems
      : uniqueItems.filter((item) => item.category === selectedCategory);

  const getPlaceholderImage = (title) => {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 600, 400);
    gradient.addColorStop(0, "#8B4513");
    gradient.addColorStop(1, "#DAA520");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 400);

    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(title, 300, 200);

    return canvas.toDataURL();
  };

  return (
    <div className="galeri-page">
      <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
        <LanguageSwitcher />
      </div>
      {/* Header */}
      <section className="galeri-header">
        <div className="container">
          <h1>{t("galeriHeader", "Galeri Kegiatan")}</h1>
          <p>
            {t(
              "galeriSubheader",
              "Dokumentasi visual kegiatan budaya dan kehidupan sehari-hari di Kampung Pujokusuman"
            )}
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-btn ${
                  selectedCategory === category.key ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="galeri-content">
        <div className="container">
          <div className="galeri-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="galeri-item"
                onClick={() => setSelectedImage(item)}
              >
                <div className="galeri-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.target.src = getPlaceholderImage(item.title);
                    }}
                  />
                  <div className="galeri-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="view-icon">
                      👁️ {t("galeriLihat", "Lihat")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              onError={(e) => {
                e.target.src = getPlaceholderImage(selectedImage.title);
              }}
            />
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>{t("galeriCtaTitle", "Ingin Berpartisipasi?")}</h2>
          <p>
            {t(
              "galeriCtaDesc",
              "Bergabunglah dengan kegiatan-kegiatan menarik di kampung kami!"
            )}
          </p>
          <div className="cta-buttons">
            <a href="/#kontak" className="btn btn-primary">
              {t("galeriCtaContact", "Hubungi Kami")}
            </a>
            <a href="/" className="btn btn-outline">
              {t("galeriCtaBackHome", "Kembali ke Beranda")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galeri;
