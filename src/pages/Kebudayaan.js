import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Kebudayaan.css";
import SEOHead from "../components/SEOHead";

const Kebudayaan = () => {
  const { t } = useTranslation();
  const budayaItems = [
    {
      id: "sanggar-tari-tradisional",
      title: t("budaya1Title", "Sanggar Tari Tradisional"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_9508_fqelvn.jpg",
      sejarah: t("budaya1SejarahSingkat"),
    },
    {
      id: "jemparingan",
      title: t("budaya2Title", "Jemparingan (Panahan Tradisional)"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_20220101_085413_hfoz4e",
      sejarah: t("budaya2SejarahSingkat"),
    },
    {
      id: "jatilan",
      title: t("budaya3Title", "Jathilan (Tari Kuda Lumping)"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/jatilan_qsmvtj",
      sejarah: t("budaya3SejarahSingkat"),
    },
    {
      id: "teater",
      title: t("budaya4Title", "Teater Sanggar Obah"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/Screenshot_2025-07-20_164214_a9vybk",
      sejarah: t("budaya4SejarahSingkat"),
    },
    {
      id: "ketoprak",
      title: t("budayaKetoprakTitle", "Ketoprak"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/v1710000000/IMG-20250716-WA0048_zfueb5",
      sejarah: t("budayaKetoprakSejarahSingkat"),
    },
    {
      id: "ruwatan",
      title: t("budaya5Title", "Upacara Ruwatan"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_1381_1_fcfupy.jpg",
      sejarah: t("budaya5SejarahSingkat"),
    },
    {
      id: "pujokusuman-creative-lab",
      title: t("budaya6Title", "Pujokusuman Creative Lab"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/WhatsApp_Image_2025-07-28_at_22.08.09_b16e4f55_wwom4p",
      sejarah: t("budaya6SejarahSingkat"),
    },
    {
      id: "pasar-pujokusuman",
      title: t("budaya7Title", "Pasar Pujokusuman"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_9786_cdl0tt.jpg",
      sejarah: t("budaya7SejarahSingkat"),
    },
    {
      id: "komunitas-kringmen",
      title: t("budaya8Title", "Komunitas Kringmen"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_20180304_102302_arsnaw",
      sejarah: t("budaya8SejarahSingkat"),
    },
    {
      id: "orkes-kentongan-sukarena",
      title: t("budaya9Title", "Orkes Kentongan SUKA RENA"),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/orkes_gypwn2",
      sejarah: t("budaya9SejarahSingkat"),
    },
    {
      id: "komunitas-pohon",
      title: t(
        "budaya10Title",
        "Komunitas POHON (Pedjoeang Heritage Pujokusuman)"
      ),
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_500,c_fill/IMG_8593_r0h8vi",
      sejarah: t("budaya10SejarahSingkat"),
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

  // SEO Data
  const seoData = {
    title: "Kebudayaan Pujokusuman - Seni Tradisional dan Warisan Budaya",
    description:
      "Jelajahi kekayaan budaya Kampung Pujokusuman: sanggar tari, jemparingan, ketoprak, teater, dan berbagai kesenian tradisional yang masih hidup dan berkembang.",
    keywords:
      "kebudayaan pujokusuman, seni tradisional, sanggar tari, jemparingan, ketoprak, teater, budaya yogyakarta, warisan budaya",
    url: "https://djelajahpujoku.netlify.app/kebudayaan",
    image:
      "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_630,c_fill/IMG_9508_fqelvn.jpg",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Kebudayaan Kampung Pujokusuman",
    description: seoData.description,
    url: seoData.url,
    image: seoData.image,
    creator: {
      "@type": "Organization",
      name: "Kampung Kebudayaan Pujokusuman",
    },
    about: [
      "Seni Tari Tradisional",
      "Jemparingan",
      "Ketoprak",
      "Teater",
      "Budaya Jawa",
    ],
  };

  return (
    <>
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        image={seoData.image}
        structuredData={structuredData}
      />
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
                            e.target.src = getPlaceholderImage(
                              `Foto ${idx + 1}`
                            );
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
    </>
  );
};

export default Kebudayaan;
