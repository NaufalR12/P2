import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/ddfcjabrm/";

  const mediaItems = [
    {
      type: "image",
      publicId: "gerbang3_l9dtyi",
      title: t("mediaSlider1Title"),
      description: t("mediaSlider1Description"),
    },
    {
      type: "youtube",
      videoId: "VclwyI3bcFI",
      title: t("mediaSlider2Title"),
      description: t("mediaSlider2Description"),
    },
    {
      type: "image",
      publicId: "DSC07541_gcmnuy",
      title: t("mediaSlider3Title"),
      description: t("mediaSlider3Description"),
    },
    {
      type: "image",
      publicId: "IMG_9786_cdl0tt",
      title: t("mediaSlider4Title"),
      description: t("mediaSlider4Description"),
    },
    {
      type: "image",
      publicId: "IMG_7033_ygheg4",
      title: t("mediaSlider5Title"),
      description: t("mediaSlider5Description"),
    },
    {
      type: "image",
      publicId: "WhatsApp_Image_2025-07-17_at_22.59.46_e01f73d5_ohbsdn",
      title: t("mediaSlider6Title"),
      description: t("mediaSlider6Description"),
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
              {t("mediaSliderCredit")} <span>Cloudinary</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSlider;

