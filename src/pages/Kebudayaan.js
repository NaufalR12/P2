import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Kebudayaan.css";

const Kebudayaan = () => {
  const { t } = useTranslation();
  const budayaItems = [
    {
      id: "sanggar-tari-tradisional",
      title: t("budaya1Title", "Sanggar Tari Tradisional"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_9508_fqelvn.jpg",
      sejarah: t(
        "budaya1SejarahSingkat",
        "Sanggar Tari di Ndalem Pujokusuman adalah pusat pelestarian tari klasik gaya Yogyakarta yang memiliki akar kuat dari keraton. Didirikan sejak era GBPH Pujokusumo pada tahun 1901, sanggar ini telah menjadi rumah bagi tradisi tari yang penuh filosofi dan estetika. Kini, melalui Yayasan Pamulangan Beksa Sasminta Mardawa (YPBSM), sanggar ini terus melestarikan warisan ratusan tahun sejarah sambil membuka ruang bagi perkembangan baru di era modern."
      ),
    },
    {
      id: "jemparingan",
      title: t("budaya2Title", "Jemparingan (Panahan Tradisional)"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/jemparingan.jpg",
      sejarah: t(
        "budaya2SejarahSingkat",
        "Jemparingan adalah seni panahan tradisional Jawa yang berasal dari zaman Kerajaan Mataram. Di Pujokusuman, tradisi ini dihidupkan kembali sejak tahun 2000 sebagai upaya pelestarian budaya leluhur. Menggunakan busur bambu dan anak panah kayu dengan target bandul kulit, jemparingan mengajarkan filosofi ketenangan batin, fokus, dan keseimbangan hidup."
      ),
    },
    {
      id: "jatilan",
      title: t("budaya3Title", "Jathilan (Tari Kuda Lumping)"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/jathilan.jpg",
      sejarah: t(
        "budaya3SejarahSingkat",
        "Jathilan Pujokusuman telah ada sejak tahun 1970-an. Kesenian ini berasal dari tradisi rakyat Jawa yang menggambarkan prajurit berkuda dalam peperangan. Pertunjukan melibatkan penari dengan kuda anyaman bambu (ebleg) diiringi musik gamelan, sering disertai atraksi kesurupan yang menjadi daya tarik tersendiri. Grup Jathilan kampung ini terkenal hingga ke luar kota."
      ),
    },
    {
      id: "pelukis",
      title: t("budaya4Title", "Komunitas Pelukis Kampoeng"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/kampung-pujokusuman/pelukis.jpg",
      sejarah: t(
        "budaya4SejarahSingkat",
        "Komunitas pelukis terbentuk pada tahun 2010 dari inisiatif beberapa seniman lokal yang ingin mengembangkan seni lukis dengan tema budaya Jawa. Kini telah memiliki lebih dari 30 anggota aktif. Komunitas ini fokus pada pelukisan dengan tema kehidupan kampung, budaya Jawa, dan alam sekitar, dengan teknik meliputi lukisan kanvas, mural, dan seni lukis batik."
      ),
    },
    {
      id: "ruwatan",
      title: t("budaya5Title", "Upacara Ruwatan"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_1381_1_fcfupy.jpg",
      sejarah: t(
        "budaya5SejarahSingkat",
        "Tradisi ruwatan di Pujokusuman telah berlangsung turun temurun sejak ratusan tahun lalu. Upacara ini merupakan ritual pembersihan spiritual menurut kepercayaan Jawa untuk menolak bala dan mendatangkan keselamatan. Ruwatan dilaksanakan dengan pertunjukan wayang kulit semalam suntuk yang dipimpin oleh dalang senior, biasanya membawakan Lakon Murwakala atau cerita pembebasan dari kutukan."
      ),
    },
    {
      id: "pujokusuman-creative-lab",
      title: t("budaya6Title", "Pujokusuman Creative Lab"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/WhatsApp_Image_2025-07-10_at_19.13.54_0f817fc4_mwpwlp.jpg",
      sejarah: t(
        "budaya6SejarahSingkat",
        "Pujokusuman Creative Lab didirikan pada tahun 2022 sebagai ruang kolaborasi kreatif bagi generasi muda kampung. Komunitas ini menjadi wadah untuk mengembangkan ide-ide inovatif di bidang seni, teknologi, dan kewirausahaan. Anggota aktif dalam berbagai proyek seperti pembuatan konten digital, desain grafis, pengembangan website, hingga produksi video dokumenter tentang budaya kampung."
      ),
    },
    {
      id: "pasar-pujokusuman",
      title: t("budaya7Title", "Pasar Pujokusuman"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_9786_cdl0tt.jpg",
      sejarah: t(
        "budaya7SejarahSingkat",
        "Pasar Pujokusuman telah menjadi pusat perdagangan lokal sejak tahun 1960-an. Pasar ini berkembang dari kebutuhan warga sekitar untuk memiliki tempat jual beli yang dekat dengan rumah. Hingga kini, pasar ini tetap mempertahankan karakteristik pasar tradisional dengan nuansa kekeluargaan yang kental. Pasar menawarkan berbagai kebutuhan sehari-hari dan makanan tradisional yang sulit ditemukan di tempat lain."
      ),
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
                  <p>{item.sejarah}</p>
                </div>

                <div className="content-section">
                  <Link
                    to={`/kebudayaan/${item.id}`}
                    className="btn btn-primary"
                  >
                    {t("selengkapnya", "Selengkapnya")}
                  </Link>
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
            <a href="/#kontak" className="btn btn-primary">
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
