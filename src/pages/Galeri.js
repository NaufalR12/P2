import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../Galeri.css";
import "./Galeri.css";

const Galeri = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

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
      title: "Pentas Teater Sanggar Obah 1",
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/Screenshot_2025-07-20_164214_a9vybk",
      description: "Pentas teater Sanggar Obah di kampung.",
    },
    {
      id: 17,
      title: "Pentas Teater Sanggar Obah 2",
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC06929_xup9mq",
      description: "Kegiatan teater remaja Sanggar Obah.",
    },
    {
      id: 18,
      title: "Pentas Teater Sanggar Obah 3",
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC08741_eq0tjd",
      description: "Pertunjukan teater Sanggar Obah.",
    },
    {
      id: 19,
      title: "Pentas Teater Sanggar Obah 4",
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/Screenshot_2025-07-25_135643_kjewzq",
      description: "Aktivitas teater di Sanggar Obah kampung.",
    },
    // PCL
    {
      id: 21,
      title: "Logo PCL",
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-28_at_22.08.09_b843c2b3_kec36u",
      description: "Logo PCL",
    },
    {
      id: 22,
      title: "Sosial media PCL",
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-28_at_21.25.44_f17ee83a_g8anzj",
      description: "Sosial media PCL.",
    },
    {
      id: 23,
      title: "Kegiatan PCL 1",
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-28_at_21.25.44_dafe0131_p3smuj",
      description: "Kegiatan belajar aksara jawa",
    },
    {
      id: 24,
      title: "Workshop",
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-28_at_21.25.45_984a5ba5_po4gjo",
      description: "Kegiatan workshop yang diadakan oleh PCL.",
    },
    // Kringmen
    {
      id: 26,
      title: "Kegiatan Kringmen 1",
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/IMG_20180304_102302_arsnaw",
      description: "Foto bersama anggota kringmen.",
    },
    {
      id: 27,
      title: "Kegiatan Kringmen 2",
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/IMG_20180304_111331_wjynfq",
      description: "Salah satu anggota kringmen.",
    },
    {
      id: 28,
      title: "Kegiatan Kringmen 3",
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/IMG_20240204_082135_duszw6",
      description: "Sepeda yang digunakan.",
    },
    {
      id: 29,
      title: "Kegiatan Kringmen 4",
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/IMG-20240204-WA0021_l2gs9q",
      description: "Anggota kringmen sedang menikmati keindahan alam.",
    },
    {
      id: 30,
      title: "Kegiatan Kringmen 5",
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_20180304_102139_u6vemv",
      description: "Momen saat melintasi sebuah jembatan.",
    },
    // Ndalem Pujokusuman
    {
      id: 31,
      title: "Pemilik dan pengelola ndalem pujokusuman",
      category: "ndalem-pujokusuman",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_9508_fqelvn.jpg",
      description:
        "Wawancara dengan KRT Jati Hadiningrat",
    },
    {
      id: 32,
      title: "Ndalem Pujokusuman",
      category: "ndalem-pujokusuman",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC07332_cjzicy",
      description:
        "Bagian dalam",
    },
    {
      id: 33,
      title: "Tempat Latihan Tari di Ndalem",
      category: "ndalem-pujokusuman",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC07330_s54gvu",
      description:
        "Kegiatan latihan tari klasik di pendopo Ndalem Pujokusuman.",
    },
    {
      id: 34,
      title: "Alat musik gamelan di Ndalem",
      category: "ndalem-pujokusuman",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC07350_ne5pgq",
      description:
        "Alat musik gamelan di Ndalem Pujokusuman.",
    },
    {
      id: 35,
      title: "Pusaka",
      category: "ndalem-pujokusuman",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_9599_jy20kg",
      description:
        "Salah satu pusaka yang disimpan oleh KRT Jati Hadiningrat.",
    },
    // Pasar
    {
      id: 36,
      title: "Pasar Pujokusuman Pagi",
      category: "pasar",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_9786_cdl0tt",
      description:
        "Suasana pasar Pujokusuman di pagi hari yang ramai dengan pedagang dan pembeli.",
    },
    {
      id: 37,
      title: "Prasasti HUT RI ke-2",
      category: "pasar",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/DSC09321_axby6x",
      description:
        "tugu peringatan Hari Ulang Tahun Kemerdekaan Republik Indonesia ke-2, yang dibangun pada Juli 1947, tepat saat pecahnya Agresi Militer Belanda I. Tugu ini menjadi simbol semangat patriotik para pemuda Pujokusuman yang aktif dalam perjuangan mempertahankan kemerdekaan. Namun pada Agresi Militer Belanda II, 19 Desember 1948, pasukan pemuda Pujokusuman mengalami kekalahan. Meski begitu, tugu tersebut tetap berdiri kokoh, menjadi penanda sejarah di tengah keramaian pasar.",
    },
    {
      id: 38,
      title: "Pemakaman",
      category: "pasar",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/DSC09350_qrukym",
      description:
        "Di area pasar ini juga terdapat sebuah makam tua, yang keberadaannya masih menyimpan tanda tanya besar hingga hari ini. Tidak ada penanda nama yang jelas, dan belum ada catatan pasti siapa yang dimakamkan di sana. Makam tersebut menjadi bagian dari wajah otentik Pasar Pujokusuman yang menyatukan aktivitas harian dengan lapisan memori masa lampau.",
    },
    {
      id: 39,
      title: "Makanan Pasar",
      category: "pasar",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/IMG_9810_gpo1pp",
      description:
        "Warung makanan tradisional yang menyajikan kuliner khas Yogyakarta.",
    },
    {
      id: 40,
      title: "Kedai Poedjan",
      category: "pasar",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/DSC07279_ksjh8y",
      description:
        "Kedai Poedjan, sebuah kedai kopi yang menjadi tempat berkumpul anak muda Pujokusuman.",
    },
    // Ruwahan
    {
      id: 41,
      title: "Ruwahan 2025",
      category: "ruwahan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_1381_1_fcfupy.jpg",
      description: "Kegiatan ruwahan di ndalem pujokusuman.",
    },
    {
      id: 42,
      title: "Kegiatan Ruwahan 1",
      category: "ruwahan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_1402_o1kstj",
      description: "Kegiatan ruwahan di ndalem pujokusuman.",
    },
    {
      id: 43,
      title: "Kegiatan Ruwahan 2",
      category: "ruwahan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_1363_zvjtnc",
      description: "Kegiatan ruwahan di ndalem pujokusuman.",
    },
    {
      id: 44,
      title: "Kegiatan Ruwahan 3",
      category: "ruwahan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_1376_i9qnhl",
      description: "Kegiatan ruwahan di ndalem pujokusuman.",
    },
    {
      id: 45,
      title: "Kegiatan Ruwahan 4",
      category: "ruwahan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_1384_jahwco",
      description:
        "Para peserta yang mengikuti upacara ruwahan untuk mendapatkan keberkahan.",
    },
    // Komunitas Pohon
    {
      id: 46,
      title: "Kegiatan Komunitas POHON",
      category: "komunitas-pohon",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_8593_r0h8vi",
      description:
        "Kegiatan Komunitas POHON (Pedjoeang Heritage Pujokusuman) dalam melestarikan warisan budaya kampung.",
    },
    {
      id: 47,
      title: "Workshop Komunitas POHON",
      category: "komunitas-pohon",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/WhatsApp_Image_2025-07-28_at_11.40.19_152260bc_hkyxf7",
      description:
        "Workshop dan diskusi yang diselenggarakan oleh Komunitas POHON untuk mengembangkan potensi heritage Pujokusuman.",
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
    { key: "ndalem-pujokusuman", label: "Ndalem Pujokusuman" },
    { key: "pasar", label: "Pasar" },
    { key: "ruwahan", label: "Ruwahan" },
    { key: "komunitas-pohon", label: "Komunitas POHON" },
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

            {/* Zoom Controls */}
            <div
              className="zoom-controls"
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                display: "flex",
                gap: "10px",
                zIndex: 1001,
                background: "rgba(0,0,0,0.7)",
                borderRadius: "8px",
                padding: "8px",
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => Math.max(0.5, prev - 0.25));
                }}
                style={{
                  background: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
                aria-label="Zoom Out"
              >
                -
              </button>
              <span style={{ color: "#fff", padding: "8px", fontSize: "14px" }}>
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => Math.min(3, prev + 0.25));
                }}
                style={{
                  background: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
                aria-label="Zoom In"
              >
                +
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(1);
                }}
                style={{
                  background: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "6px 10px",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
                aria-label="Reset Zoom"
              >
                Reset
              </button>
            </div>

            <div
              className="modal-image-container"
              style={{
                overflow: "auto",
                maxHeight: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "20px",
              }}
            >
              <img
                src={selectedImage.image.replace(
                  "/q_auto,f_auto,w_600,h_400,c_fill/",
                  "/q_auto,f_auto/"
                )}
                alt={selectedImage.title}
                onError={(e) => {
                  e.target.src = getPlaceholderImage(selectedImage.title);
                }}
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "center",
                  transition: "transform 0.2s ease",
                  display: "block",
                  cursor: zoomLevel < 3 ? "zoom-in" : "zoom-out",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (zoomLevel < 3) {
                    setZoomLevel((prev) => Math.min(3, prev + 0.25));
                  } else {
                    setZoomLevel(1);
                  }
                }}
              />
            </div>

            <div
              className="modal-info"
              style={{
                maxHeight: "25vh",
                overflowY: "auto",
                padding: "20px",
                background: "#f9f9f9",
                borderTop: "1px solid #ddd",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>{selectedImage.title}</h2>
              <p style={{ marginBottom: "10px", lineHeight: "1.5" }}>
                {selectedImage.description}
              </p>
              <small style={{ color: "#666", fontStyle: "italic" }}>
                Gunakan tombol zoom atau klik gambar untuk
                memperbesar/memperkecil
              </small>
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
