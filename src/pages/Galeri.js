import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../Galeri.css";
import "./Galeri.css";

const Galeri = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedImage, setSelectedImage] = useState(null);

  // Modified to ensure no duplicate items with the same title
  const galeriItems = [
    // Sanggar Tari
    {
      id: 1,
      title: "Latihan Sanggar Tari 1",
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-tari1.jpg",
      description: "Latihan tari klasik di sanggar, sesi 1.",
    },
    {
      id: 2,
      title: "Latihan Sanggar Tari 2",
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-tari2.jpg",
      description: "Latihan tari klasik di sanggar, sesi 2.",
    },
    {
      id: 3,
      title: "Pentas Sanggar Tari 1",
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-tari3.jpg",
      description: "Pentas tari oleh anak-anak sanggar, sesi 1.",
    },
    {
      id: 4,
      title: "Pentas Sanggar Tari 2",
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-tari4.jpg",
      description: "Pentas tari oleh anak-anak sanggar, sesi 2.",
    },
    {
      id: 5,
      title: "Pentas Sanggar Tari 3",
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-tari5.jpg",
      description: "Pentas tari oleh anak-anak sanggar, sesi 3.",
    },
    // Jemparingan
    {
      id: 6,
      title: "Latihan Jemparingan 1",
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-jemparingan1.jpg",
      description: "Latihan jemparingan di lapangan, sesi 1.",
    },
    {
      id: 7,
      title: "Latihan Jemparingan 2",
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-jemparingan2.jpg",
      description: "Latihan jemparingan di lapangan, sesi 2.",
    },
    {
      id: 8,
      title: "Lomba Jemparingan 1",
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-jemparingan3.jpg",
      description: "Lomba jemparingan antar kampung, sesi 1.",
    },
    {
      id: 9,
      title: "Lomba Jemparingan 2",
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-jemparingan4.jpg",
      description: "Lomba jemparingan antar kampung, sesi 2.",
    },
    {
      id: 10,
      title: "Lomba Jemparingan 3",
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-jemparingan5.jpg",
      description: "Lomba jemparingan antar kampung, sesi 3.",
    },
    // Ketoprak
    {
      id: 11,
      title: "Pentas Ketoprak 1",
      category: "ketoprak",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-ketoprak1.jpg",
      description: "Pentas seni ketoprak di balai kampung, sesi 1.",
    },
    {
      id: 12,
      title: "Pentas Ketoprak 2",
      category: "ketoprak",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-ketoprak2.jpg",
      description: "Pentas seni ketoprak di balai kampung, sesi 2.",
    },
    {
      id: 13,
      title: "Latihan Ketoprak 1",
      category: "ketoprak",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-ketoprak3.jpg",
      description: "Latihan rutin kelompok ketoprak, sesi 1.",
    },
    {
      id: 14,
      title: "Latihan Ketoprak 2",
      category: "ketoprak",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-ketoprak4.jpg",
      description: "Latihan rutin kelompok ketoprak, sesi 2.",
    },
    {
      id: 15,
      title: "Latihan Ketoprak 3",
      category: "ketoprak",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-ketoprak5.jpg",
      description: "Latihan rutin kelompok ketoprak, sesi 3.",
    },
    // Teater
    {
      id: 16,
      title: "Pentas Teater 1",
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-teater1.jpg",
      description: "Pentas teater remaja kampung, sesi 1.",
    },
    {
      id: 17,
      title: "Pentas Teater 2",
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-teater2.jpg",
      description: "Pentas teater remaja kampung, sesi 2.",
    },
    {
      id: 18,
      title: "Latihan Teater 1",
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-teater3.jpg",
      description: "Latihan teater di aula kampung, sesi 1.",
    },
    {
      id: 19,
      title: "Latihan Teater 2",
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-teater4.jpg",
      description: "Latihan teater di aula kampung, sesi 2.",
    },
    {
      id: 20,
      title: "Latihan Teater 3",
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-teater5.jpg",
      description: "Latihan teater di aula kampung, sesi 3.",
    },
    // PCL
    {
      id: 21,
      title: "Kegiatan PCL 1",
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-pcl1.jpg",
      description: "Workshop PCL, sesi 1.",
    },
    {
      id: 22,
      title: "Kegiatan PCL 2",
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-pcl2.jpg",
      description: "Workshop PCL, sesi 2.",
    },
    {
      id: 23,
      title: "PCL Digital 1",
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-pcl3.jpg",
      description: "Kegiatan digitalisasi budaya oleh PCL, sesi 1.",
    },
    {
      id: 24,
      title: "PCL Digital 2",
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-pcl4.jpg",
      description: "Kegiatan digitalisasi budaya oleh PCL, sesi 2.",
    },
    {
      id: 25,
      title: "PCL Digital 3",
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-pcl5.jpg",
      description: "Kegiatan digitalisasi budaya oleh PCL, sesi 3.",
    },
    // Kringmen
    {
      id: 26,
      title: "Kegiatan Kringmen 1",
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-kringmen1.jpg",
      description: "Kegiatan ronda malam kringmen, sesi 1.",
    },
    {
      id: 27,
      title: "Kegiatan Kringmen 2",
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-kringmen2.jpg",
      description: "Kegiatan ronda malam kringmen, sesi 2.",
    },
    {
      id: 28,
      title: "Rapat Kringmen 1",
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-kringmen3.jpg",
      description: "Rapat koordinasi kringmen kampung, sesi 1.",
    },
    {
      id: 29,
      title: "Rapat Kringmen 2",
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-kringmen4.jpg",
      description: "Rapat koordinasi kringmen kampung, sesi 2.",
    },
    {
      id: 30,
      title: "Rapat Kringmen 3",
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/dummy-kringmen5.jpg",
      description: "Rapat koordinasi kringmen kampung, sesi 3.",
    },
  ];

  // Remove any duplicates from the array by title
  const uniqueItems = [
    ...new Map(galeriItems.map((item) => [item.title, item])).values(),
  ];

  const categories = [
    { key: "semua", label: "Semua" },
    { key: "sanggar-tari", label: "Sanggar Tari" },
    { key: "jemparingan", label: "Jemparingan" },
    { key: "ketoprak", label: "Ketoprak" },
    { key: "teater", label: "Teater" },
    { key: "pcl", label: "PCL" },
    { key: "kringmen", label: "Kringmen" },
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
              aria-label="Tutup"
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
