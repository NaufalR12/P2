import React from "react";
import "./Tentang.css";

const Tentang = () => {
  const timelineData = [
    {
      year: "1945",
      title: "Awal Pembentukan",
      description:
        "Kampung Pujokusuman mulai terbentuk pasca kemerdekaan Indonesia sebagai permukiman masyarakat Jawa.",
    },
    {
      year: "1965",
      title: "Era Budaya",
      description:
        "Mulai berkembangnya kesenian tradisional seperti gamelan dan tari klasik Jawa di kampung ini.",
    },
    {
      year: "1985",
      title: "Sanggar Tari Berdiri",
      description:
        "Didirikannya Sanggar Tari Pujokusuman yang menjadi cikal bakal pelestarian budaya formal.",
    },
    {
      year: "2000",
      title: "Revitalisasi Jemparingan",
      description:
        "Kebangkitan kembali tradisi jemparingan sebagai olahraga dan seni tradisional.",
    },
    {
      year: "2010",
      title: "Komunitas Seni Modern",
      description:
        "Terbentuknya komunitas pelukis dan seniman modern yang memadukan tradisi dengan kontemporer.",
    },
    {
      year: "2020",
      title: "Kampung Budaya Digital",
      description:
        "Transformasi digital dalam pelestarian dan promosi budaya melalui media sosial dan teknologi.",
    },
  ];

  const prestasi = [
    {
      icon: "🏆",
      title: "Juara 1 Festival Jathilan",
      subtitle: "Se-Yogyakarta 2023",
      description:
        "Grup Jathilan Pujokusuman berhasil meraih juara pertama dalam kompetisi tingkat provinsi.",
    },
    {
      icon: "🎨",
      title: "Pameran Lukisan Nasional",
      subtitle: "Jakarta 2022",
      description:
        "Komunitas pelukis kampung berpartisipasi dalam pameran seni nasional di Jakarta.",
    },
    {
      icon: "🎭",
      title: "Pentas Wayang Internasional",
      subtitle: "Malaysia 2021",
      description:
        "Dalang kampung tampil dalam festival wayang internasional di Kuala Lumpur.",
    },
    {
      icon: "🏹",
      title: "Rekor MURI Jemparingan",
      subtitle: "Peserta Terbanyak 2020",
      description:
        "Berhasil memecahkan rekor MURI untuk peserta jemparingan terbanyak dalam satu acara.",
    },
  ];

  const tokohMasyarakat = [
    {
      nama: "Pak Sutarno",
      jabatan: "Ketua RT Pujokusuman",
      deskripsi:
        "Memimpin kampung selama 15 tahun dan aktif melestarikan budaya tradisional.",
      foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_300,h_300,c_fill/kampung-pujokusuman/pak-sutarno.jpg",
    },
    {
      nama: "Bu Sari Wulandari",
      jabatan: "Pelatih Tari Tradisional",
      deskripsi:
        "Seniman tari dengan pengalaman 25 tahun, pendiri Sanggar Tari Pujokusuman.",
      foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_300,h_300,c_fill/kampung-pujokusuman/bu-sari.jpg",
    },
    {
      nama: "Ki Dalang Sukoco",
      jabatan: "Dalang Senior",
      deskripsi:
        "Dalang wayang kulit yang sering memimpin upacara ruwatan dan pertunjukan wayang.",
      foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_300,h_300,c_fill/kampung-pujokusuman/ki-sukoco.jpg",
    },
  ];

  const getPlaceholderImage = (nama) => {
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 300, 300);
    gradient.addColorStop(0, "#8B4513");
    gradient.addColorStop(1, "#DAA520");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 300);

    ctx.fillStyle = "white";
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(nama, 150, 150);

    return canvas.toDataURL();
  };

  return (
    <div className="tentang-page">
      {/* Header */}
      <section className="tentang-header">
        <div className="container">
          <h1>Tentang Kampung Pujokusuman</h1>
          <p>
            Mengenal lebih dalam sejarah, visi misi, dan orang-orang di balik
            kelestarian budaya kampung kami
          </p>
        </div>
      </section>

      {/* Sejarah Timeline */}
      <section className="sejarah-section">
        <div className="container">
          <h2>Sejarah Perkembangan</h2>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="visi-misi-section">
        <div className="container">
          <div className="visi-misi-grid">
            <div className="visi-card">
              <h2>🎯 Visi</h2>
              <p>
                Menjadi kampung budaya terdepan dalam pelestarian dan
                pengembangan budaya tradisional Indonesia yang berkelanjutan dan
                inklusif.
              </p>
            </div>
            <div className="misi-card">
              <h2>🚀 Misi</h2>
              <ul>
                <li>
                  Melestarikan warisan budaya tradisional untuk generasi
                  mendatang
                </li>
                <li>
                  Mengembangkan potensi seni dan budaya masyarakat secara
                  berkelanjutan
                </li>
                <li>
                  Menciptakan ruang pembelajaran budaya yang terbuka dan
                  inklusif
                </li>
                <li>
                  Membangun ekonomi kreatif berbasis budaya untuk kesejahteraan
                  masyarakat
                </li>
                <li>
                  Mempromosikan budaya lokal ke tingkat nasional dan
                  internasional
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prestasi */}
      <section className="prestasi-section">
        <div className="container">
          <h2>Prestasi & Pencapaian</h2>
          <div className="prestasi-grid">
            {prestasi.map((item, index) => (
              <div key={index} className="prestasi-card">
                <div className="prestasi-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p className="prestasi-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokoh Masyarakat */}
      <section className="tokoh-section">
        <div className="container">
          <h2>Tokoh Masyarakat</h2>
          <div className="tokoh-grid">
            {tokohMasyarakat.map((tokoh, index) => (
              <div key={index} className="tokoh-card">
                <div className="tokoh-foto">
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
                  <p>{tokoh.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Bergabunglah Dengan Kami</h2>
          <p>
            Mari bersama-sama melestarikan budaya Indonesia dan membangun
            kampung yang lebih baik.
          </p>
          <div className="cta-buttons">
            <a href="#kontak" className="btn btn-primary">
              Hubungi Kami
            </a>
            <a href="/kebudayaan" className="btn btn-outline">
              Lihat Kebudayaan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
