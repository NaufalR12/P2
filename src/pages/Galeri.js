import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../Galeri.css";
import "./Galeri.css";
import SEOHead from "../components/SEOHead";

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
      title: t("galeri1Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC07541_gcmnuy",
      description: t("galeri1Desc"),
    },
    {
      id: 2,
      title: t("galeri2Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC07503_ysmria",
      description: t("galeri2Desc"),
    },
    {
      id: 3,
      title: t("galeri3Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_0161_zojodk",
      description: t("galeri3Desc"),
    },
    {
      id: 4,
      title: t("galeri4Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC07518_bgcqsq",
      description: t("galeri4Desc"),
    },
    {
      id: 5,
      title: t("galeri5Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20250723-WA0111_hzrbnj",
      description: t("galeri5Desc"),
    },
    {
      id: 105,
      title: t("galeri105Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20250723-WA0006_jsfh7o",
      description: t("galeri105Desc"),
    },
    {
      id: 106,
      title: t("galeri106Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20250723-WA0001_niid2c",
      description: t("galeri106Desc"),
    },
    {
      id: 107,
      title: t("galeri107Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20250723-WA0005_mr2sbn",
      description: t("galeri107Desc"),
    },
    {
      id: 108,
      title: t("galeri108Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20250723-WA0003_yitjed",
      description: t("galeri108Desc"),
    },
    {
      id: 109,
      title: t("galeri109Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20250723-WA0109_qgl1om",
      description: t("galeri109Desc"),
    },
    {
      id: 110,
      title: t("galeri110Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20250723-WA0110_k3hgbt",
      description: t("galeri110Desc"),
    },
    {
      id: 111,
      title: t("galeri111Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20250723-WA0004_khtwjd",
      description: t("galeri111Desc"),
    },
    {
      id: 112,
      title: t("galeri112Title"),
      category: "sanggar-tari",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20250723-WA0108_jxgfv0",
      description: t("galeri112Desc"),
    },
    // Jemparingan
    {
      id: 6,
      title: t("galeri6Title"),
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20200308-WA0041_braskp",
      description: t("galeri6Desc"),
    },
    {
      id: 7,
      title: t("galeri7Title"),
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_20210331_161935_rokjjw",
      description: t("galeri7Desc"),
    },
    {
      id: 8,
      title: t("galeri8Title"),
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_20210322_162956_b7fqkw",
      description: t("galeri8Desc"),
    },
    {
      id: 9,
      title: t("galeri9Title"),
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_20210324_161230_ediapj",
      description: t("galeri9Desc"),
    },
    {
      id: 10,
      title: t("galeri10Title"),
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20200115-WA0037_ryo6sf",
      description: t("galeri10Desc"),
    },
    {
      id: 101,
      title: t("galeri101Title"),
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_20220101_084932_ceidpt",
      description: t("galeri101Desc"),
    },
    {
      id: 102,
      title: t("galeri102Title"),
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20200115-WA0042_yfpdnf",
      description: t("galeri102Desc"),
    },
    {
      id: 103,
      title: t("galeri103Title"),
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG-20200115-WA0040_wk1og9",
      description: t("galeri103Desc"),
    },
    {
      id: 104,
      title: t("galeri104Title"),
      category: "jemparingan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_20220101_085413_hfoz4e",
      description: t("galeri104Desc"),
    },
    // Ketoprak
    {
      id: 11,
      title: t("galeri11Title"),
      category: "ketoprak",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.53_c5f2ce4c_lap9lo",
      description: t("galeri11Desc"),
    },
    {
      id: 12,
      title: t("galeri12Title"),
      category: "ketoprak",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.53_69bf7fc2_xxzjzu",
      description: t("galeri12Desc"),
    },
    {
      id: 13,
      title: t("galeri13Title"),
      category: "ketoprak",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.54_d07b9988_fqu0da",
      description: t("galeri13Desc"),
    },
    {
      id: 14,
      title: t("galeri14Title"),
      category: "ketoprak",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.54_a3bd186d_vig8hw",
      description: t("galeri14Desc"),
    },
    {
      id: 15,
      title: t("galeri15Title"),
      category: "ketoprak",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.53_f5d2d1c8_qlvf2q",
      description: t("galeri15Desc"),
    },
    // Teater
    {
      id: 16,
      title: t("galeri16Title"),
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/Screenshot_2025-07-20_164214_a9vybk",
      description: t("galeri16Desc"),
    },
    {
      id: 17,
      title: t("galeri17Title"),
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC06929_xup9mq",
      description: t("galeri17Desc"),
    },
    {
      id: 18,
      title: t("galeri18Title"),
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC08741_eq0tjd",
      description: t("galeri18Desc"),
    },
    {
      id: 19,
      title: t("galeri19Title"),
      category: "teater",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/Screenshot_2025-07-25_135643_kjewzq",
      description: t("galeri19Desc"),
    },
    // PCL
    {
      id: 21,
      title: t("galeri21Title"),
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-28_at_22.08.09_b843c2b3_kec36u",
      description: t("galeri21Desc"),
    },
    {
      id: 22,
      title: t("galeri22Title"),
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-28_at_21.25.44_f17ee83a_g8anzj",
      description: t("galeri22Desc"),
    },
    {
      id: 23,
      title: t("galeri23Title"),
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-28_at_21.25.44_dafe0131_p3smuj",
      description: t("galeri23Desc"),
    },
    {
      id: 24,
      title: t("galeri24Title"),
      category: "pcl",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/WhatsApp_Image_2025-07-28_at_21.25.45_984a5ba5_po4gjo",
      description: t("galeri24Desc"),
    },
    // Kringmen
    {
      id: 26,
      title: t("galeri26Title"),
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/IMG_20180304_102302_arsnaw",
      description: t("galeri26Desc"),
    },
    {
      id: 27,
      title: t("galeri27Title"),
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/IMG_20180304_111331_wjynfq",
      description: t("galeri27Desc"),
    },
    {
      id: 28,
      title: t("galeri28Title"),
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/IMG_20240204_082135_duszw6",
      description: t("galeri28Desc"),
    },
    {
      id: 29,
      title: t("galeri29Title"),
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/IMG-20240204-WA0021_l2gs9q",
      description: t("galeri29Desc"),
    },
    {
      id: 30,
      title: t("galeri30Title"),
      category: "kringmen",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_20180304_102139_u6vemv",
      description: t("galeri30Desc"),
    },
    // Ndalem Pujokusuman
    {
      id: 31,
      title: t("galeri31Title"),
      category: "ndalem-pujokusuman",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_9508_fqelvn.jpg",
      description: t("galeri31Desc"),
    },
    {
      id: 32,
      title: t("galeri32Title"),
      category: "ndalem-pujokusuman",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC07332_cjzicy",
      description: t("galeri32Desc"),
    },
    {
      id: 33,
      title: t("galeri33Title"),
      category: "ndalem-pujokusuman",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC07330_s54gvu",
      description: t("galeri33Desc"),
    },
    {
      id: 34,
      title: t("galeri34Title"),
      category: "ndalem-pujokusuman",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/DSC07350_ne5pgq",
      description: t("galeri34Desc"),
    },
    {
      id: 35,
      title: t("galeri35Title"),
      category: "ndalem-pujokusuman",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_9599_jy20kg",
      description: t("galeri35Desc"),
    },
    // Pasar
    {
      id: 36,
      title: t("galeri36Title"),
      category: "pasar",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_9786_cdl0tt",
      description: t("galeri36Desc"),
    },
    {
      id: 37,
      title: t("galeri37Title"),
      category: "pasar",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/DSC09321_axby6x",
      description: t("galeri37Desc"),
    },
    {
      id: 38,
      title: t("galeri38Title"),
      category: "pasar",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/DSC09350_qrukym",
      description: t("galeri38Desc"),
    },
    {
      id: 39,
      title: t("galeri39Title"),
      category: "pasar",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/IMG_9810_gpo1pp",
      description: t("galeri39Desc"),
    },
    {
      id: 40,
      title: t("galeri40Title"),
      category: "pasar",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/v1710000000/DSC07279_ksjh8y",
      description: t("galeri40Desc"),
    },
    // Ruwahan
    {
      id: 41,
      title: t("galeri41Title"),
      category: "ruwahan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_1381_1_fcfupy.jpg",
      description: t("galeri41Desc"),
    },
    {
      id: 42,
      title: t("galeri42Title"),
      category: "ruwahan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_1402_o1kstj",
      description: t("galeri42Desc"),
    },
    {
      id: 43,
      title: t("galeri43Title"),
      category: "ruwahan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_1363_zvjtnc",
      description: t("galeri43Desc"),
    },
    {
      id: 44,
      title: t("galeri44Title"),
      category: "ruwahan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_1376_i9qnhl",
      description: t("galeri44Desc"),
    },
    {
      id: 45,
      title: t("galeri45Title"),
      category: "ruwahan",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_1384_jahwco",
      description: t("galeri45Desc"),
    },
    // Komunitas Pohon
    {
      id: 46,
      title: t("galeri46Title"),
      category: "komunitas-pohon",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/IMG_8593_r0h8vi",
      description: t("galeri46Desc"),
    },
    {
      id: 47,
      title: t("galeri47Title"),
      category: "komunitas-pohon",
      image:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_600,h_400,c_fill/WhatsApp_Image_2025-07-28_at_11.40.19_152260bc_hkyxf7",
      description: t("galeri47Desc"),
    },
  ];

  // Remove any duplicates from the array by title
  const uniqueItems = [
    ...new Map(galeriItems.map((item) => [item.title, item])).values(),
  ];

  const categories = [
    { key: "semua", label: t("galeriCatSemua") },
    { key: "sanggar-tari", label: t("galeriCatSanggartari") },
    { key: "jemparingan", label: t("galeriCatJemparingan") },
    { key: "ketoprak", label: t("galeriCatKetoprak") },
    { key: "teater", label: t("galeriCatTeater") },
    { key: "pcl", label: t("galeriCatPcl") },
    { key: "kringmen", label: t("galeriCatKringmen") },
    { key: "ndalem-pujokusuman", label: t("galeriCatNdalemPujokusuman") },
    { key: "pasar", label: t("galeriCatPasar") },
    { key: "ruwahan", label: t("galeriCatRuwahan") },
    { key: "komunitas-pohon", label: t("galeriCatKomunitasPohon") },
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

  // SEO Data
  const seoData = {
    title: t("galeriHeader") + " - " + t("heroSubtitle"),
    description: t("galeriSubheader"),
    keywords:
      t("galeriHeader").toLowerCase() +
      ", foto kegiatan, dokumentasi budaya, sanggar tari foto, jemparingan dokumentasi, galeri budaya yogyakarta",
    url: "https://djelajahpujoku.netlify.app/galeri",
    image:
      "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_630,c_fill/DSC07541_gcmnuy",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: t("galeriHeader"),
    description: seoData.description,
    url: seoData.url,
    image: seoData.image,
    publisher: {
      "@type": "Organization",
      name: t("heroSubtitle"),
    },
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
                <span
                  style={{ color: "#fff", padding: "8px", fontSize: "14px" }}
                >
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
    </>
  );
};


export default Galeri;
