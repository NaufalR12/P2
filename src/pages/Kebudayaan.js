import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "./Kebudayaan.css";

const Kebudayaan = () => {
  const { t } = useTranslation();
  const budayaItems = [
    {
      id: "sanggar-tari-tradisional",
      title: t("budaya1Title", "Sanggar Tari Tradisional"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_9508_fqelvn.jpg",
      gallery: [
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_300,c_fill/DSC07541_gcmnuy",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_300,c_fill/DSC07503_ysmria",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_300,c_fill/IMG_0161_zojodk",
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_300,c_fill/kampung-pujokusuman/sanggar-tari-4.jpg",
      ],
      sejarah: (
        <>
          <p>
            {t(
              "budaya1Sejarah1",
              "Ndalem Pujokusuman bukan sekadar bangunan cagar budaya. Ia adalah pusaka hidup yang menjadi fondasi fisik dan spiritual bagi tradisi tari klasik gaya Yogyakarta. Terletak di Kelurahan Keparakan, Kemantren Mergangsan, Kota Yogyakarta, bangunan ini menjadi saksi perjalanan kota dari era kesultanan, perjuangan kemerdekaan, hingga era modern sebagai pusat pengembangan seni budaya."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah2",
              "Bangunan yang kini dikenal sebagai Ndalem Pujokusuman awalnya disebut Ndalem Danudiningrat, kediaman dari KRT Danudiningrat, menantu Sri Sultan Hamengku Buwana VII. Pada tahun 1901, dalem ini resmi berpindah kepemilikan kepada GBPH Pujokusumo, salah satu putra dari Sultan Hamengku Buwana VIII. Hubungan langsung dengan garis darah keraton menjadikan Dalem ini tidak hanya prestisius secara sosial, tetapi juga kaya secara budaya."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah3",
              "Sebagai sosok penting di lingkungan Keraton, GBPH Pujokusumo menjabat sebagai pemimpin Kridhamardawa — lembaga tari resmi di bawah Kesultanan Yogyakarta. Kecintaannya terhadap seni tari menjadikan Dalem ini tak ubahnya pusat latihan dan pewarisan seni gerak klasik yang penuh filosofi dan estetika. Dari sinilah benih keberadaan sanggar tari tumbuh, sejalan dengan aura spiritual dan legitimasi kultural dari sang pemilik."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah4",
              "Uniknya, Ndalem Pujokusuman tidak hanya mencerminkan kelembutan budaya, tetapi juga pernah menjadi benteng perjuangan. Pada masa revolusi fisik, bangunan ini difungsikan sebagai Markas Laskar Hantu Maut, pasukan gerilya yang bertugas di malam hari. GBPH Pujokusumo dikenal pula sebagai pejuang yang keras kepala terhadap penjajah — sebuah dualitas yang melekat kuat pada karakter kampung dan dalem ini: lembut dalam seni, gigih dalam perjuangan."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah5",
              "Pengakuan terhadap peran budaya Ndalem ini semakin kuat ketika pada tahun 2011, Pemerintah Provinsi DIY resmi menetapkan Ndalem Pujokusuman sebagai Pusat Seni Tari Gaya Yogyakarta. Bukan semata keputusan administratif, melainkan penegasan terhadap realitas historis dan kultural yang sudah berlangsung selama puluhan tahun."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah6",
              "Aktivitas tari di Ndalem Pujokusuman bermula dari komunitas kecil bernama Mardawa Budaya. Berbeda dari bayangan umum, kelompok ini justru lahir dari semangat lintas budaya. Salah satu tokoh pentingnya adalah Honsche, seorang warga negara Inggris yang tertarik pada seni tari Jawa klasik. Kehadiran Honsche menunjukkan bahwa sejak awal, Ndalem Pujokusuman sudah membuka diri terhadap dunia luar — menjadikannya ruang interkultural yang hidup."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah7",
              "Mardawa Budaya fokus pada pendidikan tari untuk anak-anak dan generasi muda, menyadari pentingnya regenerasi sejak dini. Kelompok ini perlahan tumbuh dan terstruktur, hingga pada akhirnya bertransformasi menjadi Yayasan Pamulangan Beksa Sasminta Mardawa (YPBSM)."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah8",
              "Transformasi ini dipicu oleh momen penting wafatnya GBPH Pujokusumo pada tahun 1961. Sebelum berpulang, beliau meninggalkan pesan kepada putranya, KRT Sasminta Dipura (Romo Sas), untuk mendirikan sebuah yayasan formal yang mewadahi pembelajaran berbagai macam tari. Amanat ini menjadi landasan berdirinya YPBSM, yang hingga kini menjadi rumah bagi pelestarian tari klasik gaya Yogyakarta."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah9",
              "YPBSM berdiri atas dua kekuatan: Inisiatif komunitas dari bawah (bottom-up) yang memberikan semangat kolektif, keaslian, dan keterbukaan lintas budaya, serta dukungan otoritatif dari atas (top-down) melalui garis keturunan keraton, yang memberikan legitimasi tradisi dan akses langsung ke sumber-sumber pengetahuan tari klasik."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah10",
              "Romo Sas adalah figur sentral yang menjembatani keduanya — seorang seniman yang juga pemegang mandat. Perannya mengokohkan posisi YPBSM sebagai institusi tari yang tidak hanya memiliki akar komunitas kuat, tetapi juga memiliki otoritas tradisi dari dalam lingkungan keraton."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah11",
              "Kini, sanggar tari di Ndalem Pujokusuman terus berperan aktif dalam pelatihan tari klasik, pertunjukan, lokakarya, dan regenerasi seniman muda. Setiap gerakan tari yang diajarkan di sini membawa warisan ratusan tahun sejarah, sekaligus membuka ruang bagi perkembangan baru di era digital dan global."
            )}
          </p>
          <br />
          <p>
            {t(
              "budaya1Sejarah12",
              "Ndalem Pujokusuman bukan hanya tempat berlatih — ia adalah ruang spiritual, tempat nilai luhur, estetika, dan nasionalisme bertemu. Sebuah rumah budaya yang tetap hidup, relevan, dan berakar kuat di hati masyarakat Yogyakarta."
            )}
          </p>
        </>
      ),
      deskripsi: t(
        "budaya1Deskripsi",
        "Di sanggar ini, anak-anak dan remaja belajar berbagai jenis tarian tradisional Jawa seperti Tari Srimpi, Bedhaya, Gambyong, dan tarian rakyat lainnya. Pelatihan dilakukan oleh dalang dan penari senior yang berpengalaman puluhan tahun."
      ),
      kegiatan: [
        t("budaya1Kegiatan1", "Latihan rutin setiap Selasa dan Kamis"),
        t("budaya1Kegiatan2", "Pertunjukan bulanan di pendopo kampung"),
        t("budaya1Kegiatan3", "Festival tari tahunan"),
        t("budaya1Kegiatan4", "Workshop tari untuk umum"),
      ],
      jadwal: t("budaya1Jadwal", "Selasa & Kamis: 19.00-21.00 WIB"),
    },
    {
      id: "jemparingan",
      title: t("budaya2Title", "Jemparingan (Panahan Tradisional)"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/jemparingan.jpg",
      sejarah: t(
        "budaya2Sejarah",
        "Jemparingan adalah seni panahan tradisional Jawa yang berasal dari zaman Kerajaan Mataram. Di Pujokusuman, tradisi ini dihidupkan kembali sejak tahun 2000 sebagai upaya pelestarian budaya leluhur."
      ),
      deskripsi: t(
        "budaya2Deskripsi",
        "Jemparingan menggunakan busur bambu dan anak panah kayu dengan target berupa bandul yang terbuat dari kulit. Filosofi jemparingan mengajarkan tentang ketenangan batin, fokus, dan keseimbangan hidup."
      ),
      kegiatan: [
        t("budaya2Kegiatan1", "Latihan jemparingan setiap Minggu pagi"),
        t("budaya2Kegiatan2", "Kompetisi antar kampung"),
        t("budaya2Kegiatan3", "Pelatihan untuk pemula"),
        t("budaya2Kegiatan4", "Pembuatan alat panahan tradisional"),
      ],
      jadwal: t("budaya2Jadwal", "Minggu: 06.00-09.00 WIB"),
    },
    {
      id: "jatilan",
      title: t("budaya3Title", "Jathilan (Tari Kuda Lumping)"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/jathilan.jpg",
      sejarah: t(
        "budaya3Sejarah",
        "Jathilan Pujokusuman telah ada sejak tahun 1970-an. Kesenian ini berasal dari tradisi rakyat Jawa yang menggambarkan prajurit berkuda dalam peperangan. Grup Jathilan kampung ini terkenal hingga ke luar kota."
      ),
      deskripsi: t(
        "budaya3Deskripsi",
        "Pertunjukan jathilan melibatkan penari yang menggunakan kuda anyaman bambu (ebleg) diiringi musik gamelan. Pertunjukan ini sering disertai dengan atraksi kesurupan yang menjadi daya tarik tersendiri."
      ),
      kegiatan: [
        t("budaya3Kegiatan1", "Pertunjukan pada acara hajatan warga"),
        t("budaya3Kegiatan2", "Festival jathilan se-Yogyakarta"),
        t("budaya3Kegiatan3", "Pelatihan menabuh gamelan"),
        t("budaya3Kegiatan4", "Pemeliharaan kostum dan properti"),
      ],
      jadwal: t("budaya3Jadwal", "Sabtu: 20.00-22.00 WIB"),
    },
    {
      id: "pelukis",
      title: t("budaya4Title", "Komunitas Pelukis Kampoeng"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/pelukis.jpg",
      sejarah: t(
        "budaya4Sejarah",
        "Komunitas pelukis terbentuk pada tahun 2010 dari inisiatif beberapa seniman lokal yang ingin mengembangkan seni lukis dengan tema budaya Jawa. Kini telah memiliki lebih dari 30 anggota aktif."
      ),
      deskripsi: t(
        "budaya4Deskripsi",
        "Komunitas ini fokus pada pelukisan dengan tema kehidupan kampung, budaya Jawa, dan alam sekitar. Teknik yang dikembangkan meliputi lukisan kanvas, lukisan tembok (mural), dan seni lukis batik."
      ),
      kegiatan: [
        t("budaya4Kegiatan1", "Workshop melukis mingguan"),
        t("budaya4Kegiatan2", "Pameran lukisan setiap 6 bulan"),
        t("budaya4Kegiatan3", "Mural di dinding-dinding kampung"),
        t("budaya4Kegiatan4", "Kolaborasi dengan sekolah-sekolah"),
      ],
      jadwal: t("budaya4Jadwal", "Rabu: 16.00-18.00 WIB"),
    },
    {
      id: "ruwatan",
      title: t("budaya5Title", "Upacara Ruwatan"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_1381_1_fcfupy.jpg",
      sejarah: t(
        "budaya5Sejarah",
        "Tradisi ruwatan di Pujokusuman telah berlangsung turun temurun sejak ratusan tahun lalu. Upacara ini merupakan ritual pembersihan spiritual menurut kepercayaan Jawa untuk menolak bala dan mendatangkan keselamatan."
      ),
      deskripsi: t(
        "budaya5Deskripsi",
        "Ruwatan dilaksanakan dengan pertunjukan wayang kulit semalam suntuk yang dipimpin oleh dalang senior. Cerita yang dibawakan biasanya adalah Lakon Murwakala atau cerita lain yang berkaitan dengan pembebasan dari kutukan."
      ),
      kegiatan: [
        t("budaya5Kegiatan1", "Upacara ruwatan massal setiap Sura"),
        t("budaya5Kegiatan2", "Ruwatan pribadi sesuai permintaan"),
        t("budaya5Kegiatan3", "Pelatihan dalang muda"),
        t("budaya5Kegiatan4", "Pemeliharaan wayang dan gamelan"),
      ],
      jadwal: t("budaya5Jadwal", "Bulan Sura (sesuai kalender Jawa)"),
    },
    {
      id: "pujokusuman-creative-lab",
      title: t("budaya6Title", "Pujokusuman Creative Lab"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/WhatsApp_Image_2025-07-10_at_19.13.54_0f817fc4_mwpwlp.jpg",
      sejarah: t(
        "budaya6Sejarah",
        "Pujokusuman Creative Lab didirikan pada tahun 2022 sebagai ruang kolaborasi kreatif bagi generasi muda kampung. Komunitas ini menjadi wadah untuk mengembangkan ide-ide inovatif di bidang seni, teknologi, dan kewirausahaan."
      ),
      deskripsi: t(
        "budaya6Deskripsi",
        "Anggota Creative Lab aktif dalam berbagai proyek seperti pembuatan konten digital, pelatihan desain grafis, pengembangan website, hingga produksi video dokumenter tentang budaya kampung. Komunitas ini terbuka untuk siapa saja yang ingin belajar dan berbagi kreativitas."
      ),
      kegiatan: [
        t("budaya6Kegiatan1", "Pelatihan desain grafis dan multimedia"),
        t(
          "budaya6Kegiatan2",
          "Workshop pembuatan website dan aplikasi sederhana"
        ),
        t("budaya6Kegiatan3", "Produksi video dokumenter budaya"),
        t(
          "budaya6Kegiatan4",
          "Kolaborasi dengan komunitas seni dan UMKM lokal"
        ),
      ],
      jadwal: t("budaya6Jadwal", "Setiap Sabtu: 15.00-17.00 WIB"),
    },
    {
      id: "pasar-pujokusuman",
      title: t("budaya7Title", "Pasar Pujokusuman"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_9786_cdl0tt.jpg",
      sejarah: t(
        "budaya7Sejarah",
        "Pasar Pujokusuman telah menjadi pusat perdagangan lokal sejak tahun 1960-an. Pasar ini berkembang dari kebutuhan warga sekitar untuk memiliki tempat jual beli yang dekat dengan rumah. Hingga kini, pasar ini tetap mempertahankan karakteristik pasar tradisional dengan nuansa kekeluargaan yang kental."
      ),
      deskripsi: t(
        "budaya7Deskripsi",
        "Pasar Pujokusuman menawarkan berbagai kebutuhan sehari-hari mulai dari sayuran segar, buah-buahan, bumbu dapur, hingga makanan tradisional. Yang membuat pasar ini istimewa adalah suasana kekeluargaan antara pedagang dan pembeli, serta masih dijumpainya jajanan dan makanan tradisional yang sulit ditemukan di tempat lain."
      ),
      kegiatan: [
        t("budaya7Kegiatan1", "Operasional pasar setiap hari kecuali Minggu"),
        t("budaya7Kegiatan2", "Bazar kuliner tradisional setiap Sabtu"),
        t("budaya7Kegiatan3", "Festival pasar rakyat pada hari-hari besar"),
        t("budaya7Kegiatan4", "Pelatihan UMKM untuk pedagang kecil"),
      ],
      jadwal: t("budaya7Jadwal", "Senin-Sabtu: 05.00-12.00 WIB"),
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
      <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
        <LanguageSwitcher />
      </div>
      {/* Header */}
      <section className="kebudayaan-header">
        <div className="container">
          <h1>
            {t("kebudayaanHeader", "Kebudayaan & Sosial Kampung Pujokusuman")}
          </h1>
          <p>
            {t(
              "kebudayaanSubheader",
              "Warisan budaya yang hidup dan berkembang di tengah masyarakat"
            )}
          </p>
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
                {item.gallery && (
                  <div className="photo-gallery">
                    {item.gallery.map((photo, idx) => (
                      <img
                        key={idx}
                        src={photo}
                        alt={`${item.title} foto ${idx + 1}`}
                        className="gallery-photo"
                        onError={(e) => {
                          e.target.src = getPlaceholderImage(`Foto ${idx + 1}`);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="budaya-content-text">
                <h2>{item.title}</h2>

                <div className="content-section">
                  <h3>📜 {t("labelSejarah", "Sejarah")}</h3>
                  <div>{item.sejarah}</div>
                </div>

                <div className="content-section">
                  <h3>📝 {t("labelDeskripsi", "Deskripsi")}</h3>
                  <p>{item.deskripsi}</p>
                </div>

                <div className="content-section">
                  <h3>🎯 {t("labelKegiatan", "Kegiatan")}</h3>
                  <ul>
                    {item.kegiatan.map((kegiatan, idx) => (
                      <li key={idx}>{kegiatan}</li>
                    ))}
                  </ul>
                </div>

                <div className="content-section jadwal">
                  <h3>⏰ {t("labelJadwal", "Jadwal")}</h3>
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
            <a href="/" className="btn btn-outline">
              {t("ctaBackHome", "Kembali ke Beranda")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kebudayaan;
