// Konfigurasi Cloudinary
export const CLOUDINARY_CONFIG = {
  // Cloud name diambil dari BASE_URL yang sudah ada
  CLOUD_NAME: "ddfcjabrm",

  // Base URL untuk media
  BASE_URL: "https://res.cloudinary.com/ddfcjabrm/",

  // Upload preset untuk upload dari frontend (opsional)
  UPLOAD_PRESET: "kampung-pujokusuman",

  // Folder structure
  FOLDERS: {
    PHOTOS: "kampung-pujokusuman/photos",
    VIDEOS: "kampung-pujokusuman/videos",
    GALLERY: "kampung-pujokusuman/gallery",
  },
};

// Helper functions untuk generate URL
export const generateImageUrl = (publicId, transformations = {}) => {
  const {
    width = "auto",
    height = "auto",
    crop = "fill",
    quality = "auto",
    format = "auto",
  } = transformations;

  return `${CLOUDINARY_CONFIG.BASE_URL}image/upload/q_${quality},f_${format},w_${width},h_${height},c_${crop}/${publicId}`;
};

export const generateVideoUrl = (publicId, transformations = {}) => {
  const { quality = "auto", format = "auto" } = transformations;

  return `${CLOUDINARY_CONFIG.BASE_URL}video/upload/q_${quality},f_${format}/${publicId}.mp4`;
};

// Contoh penggunaan:
// const imageUrl = generateImageUrl('kampung-pujokusuman/hero-image', { width: 800, height: 600 });
// const videoUrl = generateVideoUrl('kampung-pujokusuman/gamelan-performance');
