import React from "react";
import "./Kebudayaan.css";

const Kebudayaan = () => {
  const budayaItems = [
    {
      id: "sanggar-tari",
      title: "Sanggar Tari Tradisional",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/sanggar-tari.jpg",
      sejarah:
        "Sanggar Tari Pujokusuman didirikan pada tahun 1985 sebagai wadah pelestarian tari klasik Jawa. Sanggar ini telah melahirkan banyak penari profesional yang tersebar di berbagai daerah.",
      deskripsi:
        "Di sanggar ini, anak-anak dan remaja belajar berbagai jenis tarian tradisional Jawa seperti Tari Srimpi, Bedhaya, Gambyong, dan tarian rakyat lainnya. Pelatihan dilakukan oleh dalang dan penari senior yang berpengalaman puluhan tahun.",
      kegiatan: [
        "Latihan rutin setiap Selasa dan Kamis",
        "Pertunjukan bulanan di pendopo kampung",
        "Festival tari tahunan",
        "Workshop tari untuk umum",
      ],
      jadwal: "Selasa & Kamis: 19.00-21.00 WIB",
    },
    {
      id: "jemparingan",
      title: "Jemparingan (Panahan Tradisional)",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/jemparingan.jpg",
      sejarah:
        "Jemparingan adalah seni panahan tradisional Jawa yang berasal dari zaman Kerajaan Mataram. Di Pujokusuman, tradisi ini dihidupkan kembali sejak tahun 2000 sebagai upaya pelestarian budaya leluhur.",
      deskripsi:
        "Jemparingan menggunakan busur bambu dan anak panah kayu dengan target berupa bandul yang terbuat dari kulit. Filosofi jemparingan mengajarkan tentang ketenangan batin, fokus, dan keseimbangan hidup.",
      kegiatan: [
        "Latihan jemparingan setiap Minggu pagi",
        "Kompetisi antar kampung",
        "Pelatihan untuk pemula",
        "Pembuatan alat panahan tradisional",
      ],
      jadwal: "Minggu: 06.00-09.00 WIB",
    },
    {
      id: "jatilan",
      title: "Jathilan (Tari Kuda Lumping)",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/jathilan.jpg",
      sejarah:
        "Jathilan Pujokusuman telah ada sejak tahun 1970-an. Kesenian ini berasal dari tradisi rakyat Jawa yang menggambarkan prajurit berkuda dalam peperangan. Grup Jathilan kampung ini terkenal hingga ke luar kota.",
      deskripsi:
        "Pertunjukan jathilan melibatkan penari yang menggunakan kuda anyaman bambu (ebleg) diiringi musik gamelan. Pertunjukan ini sering disertai dengan atraksi kesurupan yang menjadi daya tarik tersendiri.",
      kegiatan: [
        "Pertunjukan pada acara hajatan warga",
        "Festival jathilan se-Yogyakarta",
        "Pelatihan menabuh gamelan",
        "Pemeliharaan kostum dan properti",
      ],
      jadwal: "Sabtu: 20.00-22.00 WIB",
    },
    {
      id: "pelukis",
      title: "Komunitas Pelukis Kampoeng",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/pelukis.jpg",
      sejarah:
        "Komunitas pelukis terbentuk pada tahun 2010 dari inisiatif beberapa seniman lokal yang ingin mengembangkan seni lukis dengan tema budaya Jawa. Kini telah memiliki lebih dari 30 anggota aktif.",
      deskripsi:
        "Komunitas ini fokus pada pelukisan dengan tema kehidupan kampung, budaya Jawa, dan alam sekitar. Teknik yang dikembangkan meliputi lukisan kanvas, lukisan tembok (mural), dan seni lukis batik.",
      kegiatan: [
        "Workshop melukis mingguan",
        "Pameran lukisan setiap 6 bulan",
        "Mural di dinding-dinding kampung",
        "Kolaborasi dengan sekolah-sekolah",
      ],
      jadwal: "Rabu: 16.00-18.00 WIB",
    },
    {
      id: "ruwatan",
      title: "Upacara Ruwatan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/ruwatan.jpg",
      sejarah:
        "Tradisi ruwatan di Pujokusuman telah berlangsung turun temurun sejak ratusan tahun lalu. Upacara ini merupakan ritual pembersihan spiritual menurut kepercayaan Jawa untuk menolak bala dan mendatangkan keselamatan.",
      deskripsi:
        "Ruwatan dilaksanakan dengan pertunjukan wayang kulit semalam suntuk yang dipimpin oleh dalang senior. Cerita yang dibawakan biasanya adalah Lakon Murwakala atau cerita lain yang berkaitan dengan pembebasan dari kutukan.",
      kegiatan: [
        "Upacara ruwatan massal setiap Sura",
        "Ruwatan pribadi sesuai permintaan",
        "Pelatihan dalang muda",
        "Pemeliharaan wayang dan gamelan",
      ],
      jadwal: "Bulan Sura (sesuai kalender Jawa)",
    },
    {
      id: "pujokusuman-creative-lab",
      title: "Pujokusuman Creative Lab",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/WhatsApp_Image_2025-07-10_at_19.13.54_0f817fc4_mwpwlp.jpg",
      sejarah:
        "Pujokusuman Creative Lab didirikan pada tahun 2022 sebagai ruang kolaborasi kreatif bagi generasi muda kampung. Komunitas ini menjadi wadah untuk mengembangkan ide-ide inovatif di bidang seni, teknologi, dan kewirausahaan.",
      deskripsi:
        "Anggota Creative Lab aktif dalam berbagai proyek seperti pembuatan konten digital, pelatihan desain grafis, pengembangan website, hingga produksi video dokumenter tentang budaya kampung. Komunitas ini terbuka untuk siapa saja yang ingin belajar dan berbagi kreativitas.",
      kegiatan: [
        "Pelatihan desain grafis dan multimedia",
        "Workshop pembuatan website dan aplikasi sederhana",
        "Produksi video dokumenter budaya",
        "Kolaborasi dengan komunitas seni dan UMKM lokal",
      ],
      jadwal: "Setiap Sabtu: 15.00-17.00 WIB",
    },
  ];

  const getPlaceholderImage = (title) => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 800, 500);
    gradient.addColorStop(0, "#8B4513");
    gradient.addColorStop(1, "#DAA520");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 500);

    ctx.fillStyle = "white";
    ctx.font = "bold 32px Arial";
    ctx.textAlign = "center";
    ctx.fillText(title, 400, 250);

    return canvas.toDataURL();
  };

  return (
    <div className="kebudayaan-page">
      {/* Header */}
      <section className="kebudayaan-header">
        <div className="container">
          <h1>Kebudayaan & Sosial Kampung Pujokusuman</h1>
          <p>Warisan budaya yang hidup dan berkembang di tengah masyarakat</p>
        </div>
      </section>

      {/* Budaya Items */}
      <section className="budaya-content">
        <div className="container">
          {budayaItems.map((item, index) => (
            <div
              key={item.id}
              className={`budaya-item ${index % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="budaya-image">
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = getPlaceholderImage(item.title);
                  }}
                />
              </div>
              <div className="budaya-content-text">
                <h2>{item.title}</h2>

                <div className="content-section">
                  <h3>📜 Sejarah</h3>
                  <p>{item.sejarah}</p>
                </div>

                <div className="content-section">
                  <h3>📝 Deskripsi</h3>
                  <p>{item.deskripsi}</p>
                </div>

                <div className="content-section">
                  <h3>🎯 Kegiatan</h3>
                  <ul>
                    {item.kegiatan.map((kegiatan, idx) => (
                      <li key={idx}>{kegiatan}</li>
                    ))}
                  </ul>
                </div>

                <div className="content-section jadwal">
                  <h3>⏰ Jadwal</h3>
                  <p className="jadwal-text">{item.jadwal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Tertarik Bergabung?</h2>
          <p>
            Ayo lestarikan budaya bersama kami! Hubungi kontak di bawah untuk
            informasi lebih lanjut.
          </p>
          <div className="cta-buttons">
            <a href="#kontak" className="btn btn-primary">
              Hubungi Kami
            </a>
            <a href="/" className="btn btn-outline">
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kebudayaan;
