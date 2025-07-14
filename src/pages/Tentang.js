import React from "react";
import "./Tentang.css";

const Tentang = () => {
  const timelineData = [
    {
      year: "Era Mataram",
      title: "Warisan Sejarah yang Kaya",
      description: (
        <>
          <p>
            Kampung Pujokusuman menyimpan jejak panjang sejarah dari era
            Kesultanan Mataram. Wilayah ini pada mulanya bukanlah milik GBPH
            Pujokusuman, melainkan merupakan tempat tinggal Pangeran Dipokusumo,
            salah satu tokoh penting di era tersebut. Data dan arsip digital
            yang kini tersimpan di koleksi Leiden University menyebutkan adanya
            penyerahan resmi wilayah ini dari seorang pangeran lain (diduga
            masih dalam satu lingkar keraton) kepada Pangeran Dipokusumo, yang
            merupakan putra dari Sri Sultan Hamengkubuwono VIII.
          </p>
          <br />
          <p>
            Pada masa itu, Keraton Yogyakarta telah berkembang dan pusat
            kekuasaan telah berpindah ke kawasan Alun-Alun Utara, menjadikan
            kawasan di sekitarnya sebagai basis para bangsawan dan pengikut
            setia kesultanan. Kampung ini pun lambat laun berkembang menjadi
            salah satu simpul penting bagi kegiatan budaya dan pertahanan
            keraton.
          </p>
        </>
      ),
    },
    {
      year: "Era Kemerdekaan",
      title: "Hantu Maut dan Jejak Gerilya",
      description: (
        <>
          <p>
            Memasuki masa kemerdekaan, Kampung Pujokusuman tidak hanya dikenal
            karena nilai budayanya, tapi juga karena kontribusi nyatanya dalam
            perjuangan rakyat Yogyakarta. Pada masa Sultan Hamengkubuwono IX,
            terbentuklah kelompok pejuang rakyat bernama Pasukan Hantu Maut.
            Nama ini diberikan karena strategi gerilya mereka yang dilakukan di
            malam hari — menyusup lewat selokan-selokan dan gorong-gorong
            peninggalan Belanda, termasuk yang masih ada hingga kini di sekitar
            Rumah Sakit Pratama.
          </p>
          <br />
          <p>
            Awalnya, kampung-kampung di sekitar Pujokusuman seperti Keparakan
            dan Brontokusuman membentuk pasukan rakyat masing-masing. Namun pada
            tahun 1949, berbagai kelompok ini bergabung dan Pujokusuman menjadi
            basis utama Pasukan Hantu Maut. Salah satu jalur rahasia yang mereka
            gunakan konon masih bisa ditelusuri — termasuk lorong-lorong di
            bawah jalan bergelombang di titik nol kilometer. Di tempat ini,
            banyak ditemukan bekas lubang angin dan fitting lampu yang diduga
            dulunya menjadi bagian dari jalur persembunyian bawah tanah.
          </p>
          <br />
          <p>
            Salah satu cerita legendaris dari masa ini datang dari Doro Pujo,
            tokoh sentral dari keluarga bangsawan Pujokusuman. Demi mendukung
            perjuangan rakyat, beliau menyerahkan sebilah keris untuk ditukar
            dengan logistik dapur umum pejuang di Keparakan.
          </p>
          <br />
          <p>
            Sosok lain yang tak kalah penting adalah Romo Ditik Suhardi, pejuang
            muda berusia 15 tahun yang pernah dikirim ke medan tempur di
            Ambarawa dan sempat menjadi tahanan politik. Di masa pengasingannya,
            ia bertemu dan menjalin kedekatan dengan keluarga Doro Pujo. Dari
            hubungan ini, Romo Ditik kemudian menikahi adik dari istri Doro
            Pujo. Dari pasangan ini lahirlah dua tokoh yang juga berpengaruh
            dalam kehidupan budaya kampung ini: Romo Ibnu Suhardi dan Romo
            Titik.
          </p>
        </>
      ),
    },
    {
      year: "Era Modern",
      title: "Menjaga Tradisi di Tengah Perubahan",
      description: (
        <>
          <p>
            Kini, Kampung Pujokusuman terus melestarikan warisan budaya yang
            telah mengakar selama ratusan tahun. Di kampung ini berdiri Sanggar
            Wabanah, organisasi yang dirintis oleh Romo Ibnu Suhardi, yang
            berfokus pada eksplorasi budaya lokal serta diskusi seputar
            perkembangan budaya dan teknologi dunia.
          </p>
          <br />
          <p>
            Kehidupan seni dan budaya masih sangat aktif di kampung ini.
            Beberapa kegiatan rutin yang masih sering digelar di antaranya:
          </p>
          <ul>
            <li>Seni Sendratari dan Tari Tradisional</li>
            <li>Jemparingan</li>
            <li>Jathilan</li>
            <li>Komunitas Pelukis dan Perupa</li>
            <li>Theater</li>
          </ul>
          <br />
          <p>
            Dengan segala warisan sejarah, perjuangan, dan semangat kebudayaan
            yang hidup hingga kini, Kampung Pujokusuman bukan hanya sekadar
            permukiman. Ia adalah titik simpul sejarah, seni, dan semangat
            rakyat Yogyakarta, yang terus mengalir dari masa ke masa.
          </p>
        </>
      ),
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
                  <div>{item.description}</div>
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
