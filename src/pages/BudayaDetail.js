import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./BudayaDetail.css";

const BudayaDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const budayaData = {
    "sanggar-tari-tradisional": {
      title: t("budaya1Title", "Sanggar Tari Tradisional"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/IMG_9508_fqelvn.jpg",
      gallery: [
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC07541_gcmnuy",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC07503_ysmria",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_0161_zojodk",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC07518_bgcqsq",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0111_hzrbnj",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0006_jsfh7o",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0001_niid2c",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0005_mr2sbn",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0003_yitjed", //////////ed",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0109_qgl1om",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0110_k3hgbt",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0004_khtwjd",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0108_jxgfv0",
      ],
      sejarah: [
        t("budaya1Sejarah1"),
        t("budaya1Sejarah2"),
        t("budaya1Sejarah3"),
        t("budaya1Sejarah4"),
        t("budaya1Sejarah5"),
        t("budaya1Sejarah6"),
        t("budaya1Sejarah7"),
        t("budaya1Sejarah8"),
        t("budaya1Sejarah9"),
        t("budaya1Sejarah10"),
        t("budaya1Sejarah11"),
        t("budaya1Sejarah12"),
      ],
      deskripsi: [
        t("budaya1Deskripsi1"),
        t("budaya1Deskripsi2"),
        t("budaya1Deskripsi3"),
      ],
      kegiatan: [
        t("budaya1Kegiatan1"),
        t("budaya1Kegiatan2"),
        t("budaya1Kegiatan3"),
        t("budaya1Kegiatan4"),
      ],
      jadwal: t("budaya1Jadwal"),
      prestasi: [
        "Juara 1 Festival Tari Tradisional DIY 2023",
        "Pertunjukan di Istana Negara Jakarta 2022",
        "Kolaborasi dengan Sanggar Tari Keraton Yogyakarta",
        "Workshop Internasional dengan Seniman Jepang 2021",
      ],
      tokoh: [
        {
          nama: "Bu Sari Wulandari",
          jabatan: "Pelatih Senior",
          deskripsi:
            "Seniman tari dengan pengalaman 25 tahun, pendiri Sanggar Tari Pujokusuman",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/tokoh1.jpg",
        },
        {
          nama: "Pak Sutarno",
          jabatan: "Ketua Sanggar",
          deskripsi:
            "Memimpin sanggar selama 15 tahun dan aktif melestarikan budaya tradisional",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/tokoh2.jpg",
        },
      ],
    },
    jemparingan: {
      title: t("budaya2Title", "Jemparingan (Panahan Tradisional)"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/IMG_20220101_085413_hfoz4e",
      gallery: [
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20200308-WA0041_braskp",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20210331_161935_rokjjw",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20210322_162956_b7fqkw",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20210324_161230_ediapj",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20200115-WA0037_ryo6sf",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20220101_084932_ceidpt",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20211127-WA0006_xwggfs",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20240107-WA0007_skrfxy",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20220101_085413_hfoz4e",
      ],
      sejarah: [
        t("budaya2Sejarah1"),
        t("budaya2Sejarah2"),
        t("budaya2Sejarah3"),
        t("budaya2Sejarah4"),
        t("budaya2Sejarah5"),
        t("budaya2Sejarah6"),
        t("budaya2Sejarah7"),
        t("budaya2Sejarah8"),
        t("budaya2Sejarah9"),
        t("budaya2Sejarah10"),
        t("budaya2Sejarah11"),
        t("budaya2Sejarah12"),
        t("budaya2Sejarah13"),
        t("budaya2Sejarah14"),
      ],
      deskripsi: t("budaya2Deskripsi"),
      kegiatan: [
        t("budaya2Kegiatan1"),
        t("budaya2Kegiatan2"),
        t("budaya2Kegiatan3"),
        t("budaya2Kegiatan4"),
      ],
      jadwal: t("budaya2Jadwal"),
      prestasi: [
        "Rekor MURI Peserta Jemparingan Terbanyak 2020",
        "Juara 1 Kompetisi Jemparingan DIY 2023",
        "Pertunjukan di Festival Budaya Nasional 2022",
        "Pelatihan untuk Sekolah-sekolah di Yogyakarta",
      ],
      tokoh: [
        {
          nama: "Pak Bambang",
          jabatan: "Pelatih Jemparingan",
          deskripsi:
            "Ahli jemparingan dengan pengalaman 20 tahun, melatih lebih dari 100 murid",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/tokoh-jemparingan.jpg",
        },
      ],
    },
    jatilan: {
      title: t("budaya3Title", "Jathilan (Tari Kuda Lumping)"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/jatilan_qsmvtj",
      gallery: [
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/jatilan_qsmvtj",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/jathilan2.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/jathilan3.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/jathilan4.jpg",
      ],
      sejarah: [t("budaya3Sejarah1"), t("budaya3Sejarah2")],
      deskripsi: t("budaya3Deskripsi"),
      kegiatan: [
        t("budaya3Kegiatan1"),
        t("budaya3Kegiatan2"),
        t("budaya3Kegiatan3"),
        t("budaya3Kegiatan4"),
      ],
      jadwal: t("budaya3Jadwal"),
      prestasi: [
        "Juara 1 Festival Jathilan Se-Yogyakarta 2023",
        "Pertunjukan di Taman Mini Indonesia Indah 2022",
        "Kolaborasi dengan Grup Jathilan dari Solo 2021",
        "Pelatihan untuk Komunitas Jathilan Muda",
      ],
      tokoh: [
        {
          nama: "Ki Dalang Sukoco",
          jabatan: "Dalang Senior",
          deskripsi:
            "Dalang wayang kulit yang sering memimpin upacara ruwatan dan pertunjukan wayang",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/tokoh-jathilan.jpg",
        },
      ],
    },
    teater: {
      title: t("budaya4Title", "Teater – Sanggar Obah"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/Screenshot_2025-07-20_164214_a9vybk",
      gallery: [
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/Screenshot_2025-07-20_164214_a9vybk",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC06929_xup9mq",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/pelukis3.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/pelukis4.jpg",
      ],
      sejarah: [
        t("budaya4Sejarah1"),
        t("budaya4Sejarah2"),
        t("budaya4Sejarah3"),
      ],
      deskripsi: t("budaya4Deskripsi"),
      kegiatan: [
        t("budaya4Kegiatan1"),
        t("budaya4Kegiatan2"),
        t("budaya4Kegiatan3"),
        t("budaya4Kegiatan4"),
      ],
      jadwal: t("budaya4Jadwal"),
      prestasi: [
        "Pameran Lukisan Nasional Jakarta 2022",
        "Kolaborasi dengan Galeri Seni Yogyakarta 2023",
        "Workshop Seni untuk Anak-anak Sekolah 2021",
        "Mural Bersama di Dinding Kampung 2023",
      ],
      tokoh: [
        {
          nama: "Pak Agus",
          jabatan: "Ketua Komunitas",
          deskripsi:
            "Seniman lukis dengan pengalaman 15 tahun, pendiri komunitas pelukis kampung",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/tokoh-pelukis.jpg",
        },
      ],
    },
    ruwatan: {
      title: t("budaya5Title", "Upacara Ruwatan"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/IMG_1381_1_fcfupy.jpg",
      gallery: [
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/ruwatan1.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/ruwatan2.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/ruwatan3.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/ruwatan4.jpg",
      ],
      sejarah: [t("budaya5Sejarah")],
      deskripsi: t("budaya5Deskripsi"),
      kegiatan: [
        t("budaya5Kegiatan1"),
        t("budaya5Kegiatan2"),
        t("budaya5Kegiatan3"),
        t("budaya5Kegiatan4"),
      ],
      jadwal: t("budaya5Jadwal"),
      prestasi: [
        "Upacara Ruwatan Massal 2023 dengan 1000 peserta",
        "Kolaborasi dengan Keraton Yogyakarta 2022",
        "Dokumentasi UNESCO untuk Pelestarian Budaya 2021",
        "Pelatihan Dalang Muda untuk Regenerasi",
      ],
      tokoh: [
        {
          nama: "Ki Dalang Sukoco",
          jabatan: "Dalang Senior",
          deskripsi:
            "Dalang wayang kulit yang sering memimpin upacara ruwatan dan pertunjukan wayang",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/tokoh-ruwatan.jpg",
        },
      ],
    },
    "pujokusuman-creative-lab": {
      title: t("budaya6Title", "Pujokusuman Creative Lab"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/WhatsApp_Image_2025-07-10_at_19.13.54_0f817fc4_mwpwlp.jpg",
      gallery: [
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/creative1.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/creative2.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/creative3.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/creative4.jpg",
      ],
      sejarah: [t("budaya6Sejarah")],
      deskripsi: t("budaya6Deskripsi"),
      kegiatan: [
        t("budaya6Kegiatan1"),
        t("budaya6Kegiatan2"),
        t("budaya6Kegiatan3"),
        t("budaya6Kegiatan4"),
      ],
      jadwal: t("budaya6Jadwal"),
      prestasi: [
        "Website Kampung Pujokusuman - Juara 1 Kompetisi Digital 2023",
        "Video Dokumenter Budaya - Tampil di Festival Film Yogyakarta 2022",
        "Kolaborasi dengan Universitas Gadjah Mada 2023",
        "Pelatihan Digital untuk UMKM Kampung 2022",
      ],
      tokoh: [
        {
          nama: "Pak Rudi",
          jabatan: "Koordinator Creative Lab",
          deskripsi:
            "Ahli teknologi dengan passion di bidang budaya, pendiri Creative Lab",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/tokoh-creative.jpg",
        },
      ],
    },
    "pasar-pujokusuman": {
      title: t("budaya7Title", "Pasar Pujokusuman"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/IMG_9786_cdl0tt.jpg",
      gallery: [
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/pasar1.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/pasar2.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/pasar3.jpg",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/pasar4.jpg",
      ],
      sejarah: [
        t("budaya7Sejarah"),
        t("budaya7Sejarah1"),
        t("budaya7Sejarah2"),
        t("budaya7Sejarah3"),
        t("budaya7Sejarah4"),
      ],
      deskripsi: t("budaya7Deskripsi"),
      jadwal: t("budaya7Jadwal"),
      // Tidak ada lagi: kegiatan, prestasi, tokoh
    },
    
  };

  const budaya = budayaData[id];

  if (!budaya) {
    return (
      <div className="budaya-detail-page">
        <div className="container">
          <h1>Budaya tidak ditemukan</h1>
          <Link to="/kebudayaan" className="btn btn-primary">
            Kembali ke Kebudayaan
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === budaya.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? budaya.gallery.length - 1 : prev - 1
    );
  };

  const getPlaceholderImage = (title) => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, "#8B4513");
    gradient.addColorStop(1, "#DAA520");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(title, 400, 300);

    return canvas.toDataURL();
  };

  return (
    <div className="budaya-detail-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img
            src={budaya.heroImage}
            alt={budaya.title}
            onError={(e) => {
              e.target.src = getPlaceholderImage(budaya.title);
            }}
          />
          <div className="hero-overlay">
            <div className="container">
              <h1>{budaya.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="breadcrumb-section">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/kebudayaan">Kebudayaan</Link>
            <span>/</span>
            <span>{budaya.title}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Left Column - Text Content */}
            <div className="content-text">
              {/* Sejarah Section */}
              <div className="content-section">
                <h2>📜 {t("labelSejarah", "Sejarah")}</h2>
                {id === "jemparingan" ? (
                  <>
                    <p>{t("budaya2Sejarah1")}</p>
                    <p>{t("budaya2Sejarah2")}</p>
                    <b>Sejarah Jemparingan</b>
                    <div style={{ marginTop: 4 }}>{t("budaya2Sejarah3")}</div>
                    <b>Perkembangan Gaya Jemparingan</b>
                    <ol type="1" style={{ marginTop: 4 }}>
                      <li>
                        <b>Gagrag Mataram Ngayogyakarta</b>
                        <div>{t("budaya2Sejarah4")}</div>
                      </li>
                      <li>
                        <b>Gaya Bidikan (1953)</b>
                        <div>{t("budaya2Sejarah5")}</div>
                      </li>
                    </ol>
                  </>
                ) : (
                  budaya.sejarah.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                )}
              </div>

              {/* Deskripsi Section */}
              <div className="content-section">
                <h2>📝 {t("labelDeskripsi", "Deskripsi")}</h2>
                {id === "jemparingan" ? (
                  <>
                    <p>{t("budaya2Deskripsi")}</p>
                    <b>Tata Cara Bermain</b>
                    <ol type="1" style={{ marginTop: 4 }}>
                      <li>
                        <b>Posisi Duduk Bersila Miring ke Kiri</b>
                        <div>{t("budaya2Sejarah7")}</div>
                      </li>
                      <li>
                        <b>Pegangan Busur dan Tarik Anak Panah</b>
                        <div>{t("budaya2Sejarah8")}</div>
                      </li>
                      <li>
                        <b>Jarak Sasaran: 10–20 Meter</b>
                        <div>{t("budaya2Sejarah9")}</div>
                      </li>
                      <li>
                        <b>Sistem Nilai: Lonceng Tanda Sasaran</b>
                        <div>{t("budaya2Sejarah10")}</div>
                      </li>
                    </ol>
                    <b>Nilai Kemataraman dalam Jemparingan</b>
                    <div style={{ marginTop: 4 }}>{t("budaya2Sejarah11")}</div>
                    <ul style={{ marginTop: 4 }}>
                      <li>
                        <b>Untuk Laki-laki:</b>
                        <div>
                          {t("budaya2Sejarah11").split("Untuk Laki-laki:")[1]}
                        </div>
                      </li>
                      <li>
                        <b>Untuk Perempuan:</b>
                        <div>
                          {t("budaya2Sejarah12").split("Untuk Perempuan:")[1]}
                        </div>
                      </li>
                    </ul>
                    <b>Manfaat dan Keutamaan Berlatih Jemparingan</b>
                    <ol type="1" style={{ marginTop: 4 }}>
                      {t("budaya2Sejarah13")
                        .split("\n")
                        .slice(1, 7)
                        .map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                    </ol>
                    <b>Pendidikan Karakter dalam Jemparingan</b>
                    <div style={{ marginTop: 4 }}>
                      Jiwa Ksatria Mataram sebagaimana diajarkan oleh Pangeran
                      Mangkubumi (Sri Sultan Hamengku Buwono I):
                    </div>
                    <ol type="1" style={{ marginTop: 4 }}>
                      {t("budaya2Sejarah14")
                        .split("\n")
                        .slice(1, 5)
                        .map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                    </ol>
                  </>
                ) : id === "pasar-pujokusuman" ? (
                  // Tampilkan deskripsi dengan format paragraf dan list jika ada, tanpa <li>
                  <div>
                    {budaya.deskripsi.split("\n").map((line, idx) => {
                      // List item: tampilkan sebagai <div> dengan indentasi, tanpa <li>
                      if (line.startsWith("- ")) {
                        return (
                          <div
                            key={idx}
                            style={{ marginLeft: 20, marginBottom: 4 }}
                          >
                            • {line.replace("- ", "")}
                          </div>
                        );
                      }
                      // Heading
                      if (
                        line.endsWith(":") &&
                        !line.startsWith("-") &&
                        line.trim().length > 1
                      ) {
                        return (
                          <b
                            key={idx}
                            style={{ display: "block", marginTop: 12 }}
                          >
                            {line.replace(":", "")}
                          </b>
                        );
                      }
                      // Empty line
                      if (line.trim() === "") {
                        return <br key={idx} />;
                      }
                      // Normal paragraph
                      return (
                        <p key={idx} style={{ marginBottom: 8 }}>
                          {line}
                        </p>
                      );
                    })}
                  </div>
                ) : Array.isArray(budaya.deskripsi) ? (
                  budaya.deskripsi.map((desc, idx) => <p key={idx}>{desc}</p>)
                ) : (
                  <p>{budaya.deskripsi}</p>
                )}
              </div>

              {/* Kegiatan Section */}
              {id !== "pasar-pujokusuman" && (
                <div className="content-section">
                  <h2>🎯 {t("labelKegiatan", "Kegiatan")}</h2>
                  <ul>
                    {budaya.kegiatan.map((kegiatan, index) => (
                      <li key={index}>{kegiatan}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Jadwal Section */}
              <div className="content-section">
                <h2>⏰ {t("labelJadwal", "Jadwal")}</h2>
                <p className="jadwal-text">{budaya.jadwal}</p>
              </div>

              {/* Prestasi Section */}
              {id !== "pasar-pujokusuman" && (
                <div className="content-section">
                  <h2>🏆 {t("prestasiPencapaian", "Prestasi & Pencapaian")}</h2>
                  <ul>
                    {budaya.prestasi.map((prestasi, index) => (
                      <li key={index}>{prestasi}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tokoh Section */}
              {id !== "pasar-pujokusuman" && (
                <div className="content-section">
                  <h2>👥 {t("tokohUtama", "Tokoh Utama")}</h2>
                  <div className="tokoh-grid">
                    {budaya.tokoh.map((tokoh, index) => (
                      <div key={index} className="tokoh-card">
                        <div className="tokoh-image">
                          <img
                            src={tokoh.foto}
                            alt={tokoh.nama}
                            onError={(e) => {
                              e.target.src = getPlaceholderImage(tokoh.nama);
                            }}
                          />
                        </div>
                        <div className="tokoh-info">
                          <h3>{tokoh.nama}</h3>
                          <p className="tokoh-jabatan">{tokoh.jabatan}</p>
                          <p className="tokoh-deskripsi">{tokoh.deskripsi}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Gallery */}
            <div className="content-gallery">
              <h2>📸 {t("galeriFoto", "Galeri Foto")}</h2>
              <div className="gallery-container">
                <div className="main-image">
                  <img
                    src={budaya.gallery[currentImageIndex]}
                    alt={`${budaya.title} - Foto ${currentImageIndex + 1}`}
                    onError={(e) => {
                      e.target.src = getPlaceholderImage(
                        `Foto ${currentImageIndex + 1}`
                      );
                    }}
                    style={{ cursor: "zoom-in" }}
                    onClick={() => setIsModalOpen(true)}
                  />
                  <button className="gallery-nav prev" onClick={prevImage}>
                    ‹
                  </button>
                  <button className="gallery-nav next" onClick={nextImage}>
                    ›
                  </button>
                </div>
                <div className="thumbnail-grid">
                  {budaya.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${budaya.title} - Thumbnail ${index + 1}`}
                      className={`thumbnail ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      onError={(e) => {
                        e.target.src = getPlaceholderImage(
                          `Thumbnail ${index + 1}`
                        );
                      }}
                    />
                  ))}
                </div>
                {/* Modal for fullscreen image */}
                {isModalOpen && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100vw",
                      height: "100vh",
                      background: "rgba(0,0,0,0.8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2000,
                    }}
                    onClick={() => setIsModalOpen(false)}
                  >
                    <img
                      src={budaya.gallery[currentImageIndex]}
                      alt="Fullsize"
                      style={{
                        maxWidth: "90vw",
                        maxHeight: "90vh",
                        borderRadius: "12px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                        background: "#fff",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <button
                      onClick={() => setIsModalOpen(false)}
                      style={{
                        position: "fixed",
                        top: 32,
                        right: 32,
                        background: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        fontSize: 24,
                        cursor: "pointer",
                        zIndex: 2100,
                      }}
                      aria-label="Tutup"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>{t("ctaTitleKebudayaan", "Tertarik Bergabung?")}</h2>
          <p>
            {t(
              "ctaDescKebudayaan",
              "Ayo lestarikan budaya bersama kami! Hubungi kontak di bawah untuk informasi lebih lanjut."
            )}
          </p>
          <div className="cta-buttons">
            <a href="#kontak" className="btn btn-primary">
              {t("ctaContactKebudayaan", "Hubungi Kami")}
            </a>
            <Link to="/kebudayaan" className="btn btn-outline">
              {t("kembaliKeKebudayaan", "Kembali ke Kebudayaan")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BudayaDetail;
