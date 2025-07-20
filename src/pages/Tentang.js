import React from "react";
import { useTranslation } from "react-i18next";
import "./Tentang.css";
import { CloudinaryContext, Image } from "cloudinary-react";

const Tentang = () => {
  const { t } = useTranslation();
  const timelineData = [
    {
      year: t("timeline1Year"),
      title: t("timeline1Title"),
      description: (
        <>
          <p>{t("timeline1Desc1")}</p>
          <br />
          <p>{t("timeline1Desc2")}</p>
        </>
      ),
    },
    {
      year: t("timeline2Year"),
      title: t("timeline2Title"),
      description: (
        <>
          <p>{t("timeline2Desc1")}</p>
          <br />
          <p>{t("timeline2Desc2")}</p>
          <br />
          <p>{t("timeline2Desc3")}</p>
          <br />
          <p>{t("timeline2Desc4")}</p>
        </>
      ),
    },
    {
      year: t("timeline3Year"),
      title: t("timeline3Title"),
      description: (
        <>
          <p>{t("timeline3Desc1")}</p>
          <br />
          <p>{t("timeline3Desc2")}</p>
          <ul>
            <li>{t("timeline3List1")}</li>
            <li>{t("timeline3List2")}</li>
            <li>{t("timeline3List3")}</li>
            <li>{t("timeline3List4")}</li>
            <li>{t("timeline3List5")}</li>
          </ul>
          <br />
          <p>{t("timeline3Desc3")}</p>
        </>
      ),
    },
  ];

  const prestasi = [
    {
      icon: "🏆",
      title: t("prestasi1Title"),
      subtitle: t("prestasi1Subtitle"),
      description: t("prestasi1Desc"),
    },
    {
      icon: "🎨",
      title: t("prestasi2Title"),
      subtitle: t("prestasi2Subtitle"),
      description: t("prestasi2Desc"),
    },
    {
      icon: "🎭",
      title: t("prestasi3Title"),
      subtitle: t("prestasi3Subtitle"),
      description: t("prestasi3Desc"),
    },
    {
      icon: "🏹",
      title: t("prestasi4Title"),
      subtitle: t("prestasi4Subtitle"),
      description: t("prestasi4Desc"),
    },
  ];

  const tokohMasyarakat = [
    {
      nama: t("tokoh1Nama"),
      jabatan: t("tokoh1Jabatan"),
      deskripsi: t("tokoh1Deskripsi"),
      foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_300,h_300,c_fill/kampung-pujokusuman/pak-sutarno.jpg",
      publicId: "IMG_9429_zfk3p7",
    },
    {
      nama: t("tokoh2Nama"),
      jabatan: t("tokoh2Jabatan"),
      deskripsi: t("tokoh2Deskripsi"),
      foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_300,h_300,c_fill/kampung-pujokusuman/bu-sari.jpg",
      publicId: "WhatsApp_Image_2025-07-16_at_17.13.21_3c9f3f95_hadppt",
    },
    {
      nama: t("tokoh3Nama"),
      jabatan: t("tokoh3Jabatan"),
      deskripsi: t("tokoh3Deskripsi"),
      foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_300,h_300,c_fill/kampung-pujokusuman/ki-sukoco.jpg",
      publicId: "kampung-pujokusuman/ki-sukoco",
    },
    // Tokoh tambahan
    {
      nama: t("tokoh4Nama"),
      jabatan: t("tokoh4Jabatan"),
      deskripsi: t("tokoh4Deskripsi"),
      foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_300,h_300,c_fill/kampung-pujokusuman/budi-santosa.jpg",
      publicId: "kampung-pujokusuman/budi-santosa",
    },
    {
      nama: t("tokoh5Nama"),
      jabatan: t("tokoh5Jabatan"),
      deskripsi: t("tokoh5Deskripsi"),
      foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_300,h_300,c_fill/kampung-pujokusuman/siti-aminah.jpg",
      publicId: "kampung-pujokusuman/siti-aminah",
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
    <CloudinaryContext cloudName="ddfcjabrm">
      <div className="tentang-page">
        {/* Header */}
        <section className="tentang-header">
          <div className="container">
            <h1>{t("aboutHeader")}</h1>
            <p>{t("aboutHeaderDesc")}</p>
          </div>
        </section>

        {/* Sejarah Timeline */}
        <section className="sejarah-section">
          <div className="container">
            <h2>{t("timelineTitle")}</h2>
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
                <h2>🎯 {t("visiTitle")}</h2>
                <p>{t("visiDesc")}</p>
              </div>
              <div className="misi-card">
                <h2>🚀 {t("misiTitle")}</h2>
                <ul>
                  <li>{t("misi1")}</li>
                  <li>{t("misi2")}</li>
                  <li>{t("misi3")}</li>
                  <li>{t("misi4")}</li>
                  <li>{t("misi5")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prestasi */}
        <section className="prestasi-section">
          <div className="container">
            <h2>{t("prestasiTitle")}</h2>
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
            <h2>{t("tokohTitle")}</h2>
            <div className="tokoh-grid">
              {tokohMasyarakat.map((tokoh, index) => (
                <div key={index} className="tokoh-card">
                  <div className="tokoh-foto">
                    <Image
                      publicId={tokoh.publicId}
                      width="120"
                      height="120"
                      crop="fill"
                      alt={tokoh.nama}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "4px solid #daa520",
                      }}
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
            <h2>{t("ctaTitle")}</h2>
            <p>{t("ctaDesc")}</p>
            <div className="cta-buttons">
              <a href="#kontak" className="btn btn-primary">
                {t("ctaContact")}
              </a>
              <a href="/kebudayaan" className="btn btn-outline">
                {t("ctaCulture")}
              </a>
            </div>
          </div>
        </section>
      </div>
    </CloudinaryContext>
  );
};

export default Tentang;
