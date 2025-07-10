import React from "react";
import Slider from "react-slick";
import "./MediaSlider.css";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick}>
    <span>‹</span>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick}>
    <span>›</span>
  </div>
);

const MediaSlider = () => {
  const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/ddfcjabrm/";

  const mediaItems = [
    {
      type: "image",
      publicId: "WhatsApp_Image_2025-07-02_at_10.58.51_0e46cea1_prbbkv", // Ganti dengan public ID gambar Anda
      title: "Suasana Kampung Pujokusuman",
      description:
        "Pemandangan indah kampung dengan arsitektur tradisional Jawa yang memukau",
    },
    {
      type: "image",
      publicId: "WhatsApp_Image_2025-07-06_at_18.38.43_e3e1ade7_usl6sj", // Ganti dengan public ID gambar Anda
      title: "Tari Tradisional",
      description: "Pertunjukan tari klasik Jawa oleh para penari muda",
    },
    {
      type: "youtube",
      videoId: "VclwyI3bcFI", // Ganti dengan ID video YouTube
      title: "Video Kegiatan Kampung",
      description:
        "Dokumentasi video kegiatan sehari-hari di Kampung Pujokusuman",
    },
    {
      type: "image",
      publicId: "kampung-pujokusuman/workshop-batik", // Ganti dengan public ID gambar Anda
      title: "Workshop Batik",
      description: "Kegiatan membatik bersama warga kampung",
    },
    {
      type: "youtube",
      videoId: "ANOTHER_VIDEO_ID", // Ganti dengan ID video YouTube lainnya
      title: "Pertunjukan Gamelan",
      description: "Video pertunjukan musik gamelan tradisional Jawa",
    },
    {
      type: "image",
      publicId: "kampung-pujokusuman/gotong-royong", // Tambah gambar baru
      title: "Gotong Royong",
      description: "Kegiatan gotong royong warga kampung",
    },
    {
      type: "image",
      publicId: "kampung-pujokusuman/rumah-joglo", // Tambah gambar baru
      title: "Rumah Joglo",
      description: "Arsitektur rumah tradisional Jawa",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const getMediaUrl = (publicId) => {
    return `${CLOUDINARY_BASE_URL}image/upload/q_auto,f_auto,w_1400,h_600,c_fill/${publicId}.jpg`;
  };

  const getPlaceholderImage = (title) => {
    const canvas = document.createElement("canvas");
    canvas.width = 1400;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 1400, 600);
    gradient.addColorStop(0, "#8B4513");
    gradient.addColorStop(1, "#DAA520");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1400, 600);

    ctx.fillStyle = "white";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.fillText(title, 700, 300);

    return canvas.toDataURL();
  };

  const getYouTubeEmbedUrl = (videoId) => {
    // Validasi video ID
    if (!videoId || videoId === "ANOTHER_VIDEO_ID" || videoId.length !== 11) {
      console.error("Invalid YouTube Video ID:", videoId);
      return null;
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&enablejsapi=1`;
  };

  return (
    <section id="media-slider" className="hero-media-slider">
      <div className="hero-slider-container">
        <Slider {...settings} className="hero-carousel">
          {mediaItems.map((item, index) => (
            <div key={index} className="hero-slide">
              <div className="hero-media-card">
                <div className="hero-media-container">
                  {item.type === "youtube" ? (
                    <div className="hero-youtube-wrapper">
                      {getYouTubeEmbedUrl(item.videoId) ? (
                        <iframe
                          src={getYouTubeEmbedUrl(item.videoId)}
                          title={item.title}
                          className="hero-youtube-video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      ) : (
                        <div className="youtube-error">
                          <div className="error-content">
                            <h3>❌ Video Tidak Tersedia</h3>
                            <p>Video ID: {item.videoId} tidak valid</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="hero-image-wrapper">
                      <img
                        src={getMediaUrl(item.publicId)}
                        alt={item.title}
                        className="hero-media-image"
                        onError={(e) => {
                          e.target.src = getPlaceholderImage(item.title);
                        }}
                      />
                      <div className="hero-image-overlay"></div>
                    </div>
                  )}
                </div>

                <div className="hero-media-content">
                  <div className="container">
                    <div className="hero-content-inner">
                      <h2 className="hero-media-title">{item.title}</h2>
                      <p className="hero-media-description">
                        {item.description}
                      </p>
                      <div className="hero-media-badge">
                        {item.type === "youtube"
                          ? "🎥 Video YouTube"
                          : "📷 Dokumentasi Foto"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="hero-slider-indicator">
          <div className="container">
            <p className="cloudinary-credit">
              Media berkualitas tinggi disimpan dengan <span>Cloudinary</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSlider;
