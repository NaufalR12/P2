# Panduan Penggunaan Video di Galeri Budaya

## Cara Menampilkan Video dari Cloudinary

### 1. Format URL Video Cloudinary

Untuk menampilkan video dari Cloudinary, gunakan format URL berikut:

```javascript
// Video dengan transformasi
"https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,w_800,h_600,c_fill/nama_video.mp4";

// Video tanpa transformasi
"https://res.cloudinary.com/ddfcjabrm/video/upload/nama_video.mp4";

// Thumbnail untuk video
"https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,w_200,h_150,c_fill/nama_video.jpg";
```

### 2. Struktur Data Gallery dengan Video

```javascript
gallery: [
  {
    type: "image",
    url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/gambar.jpg",
    thumbnail:
      "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/gambar.jpg",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,w_800,h_600,c_fill/video.mp4",
    thumbnail:
      "https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,w_200,h_150,c_fill/video.jpg",
    poster:
      "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/video_poster.jpg",
  },
];
```

### 3. Format Video yang Didukung

Cloudinary mendukung berbagai format video:

- MP4 (H.264)
- WebM
- MOV
- AVI
- FLV
- Dan format lainnya

### 4. Transformasi Video Cloudinary

```javascript
// Video dengan kualitas otomatis dan ukuran tertentu
"https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,w_800,h_600,c_fill/video.mp4";

// Video dengan format WebM untuk kompatibilitas browser
"https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,f_webm,w_800,h_600,c_fill/video.mp4";

// Video dengan bitrate rendah untuk loading cepat
"https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,br_500k,w_800,h_600,c_fill/video.mp4";
```

### 5. Contoh Penggunaan di Komunitas POHON

Untuk mengganti gambar `pohon3.jpg` dengan video:

```javascript
{
  type: "video",
  url: "https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,w_800,h_600,c_fill/pohon3.mp4",
  thumbnail: "https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,w_200,h_150,c_fill/pohon3.jpg",
  poster: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/pohon3.jpg"
}
```

### 6. Fitur yang Tersedia

- ✅ Video player dengan kontrol (play, pause, volume, dll)
- ✅ Thumbnail dengan ikon play untuk video
- ✅ Modal fullscreen untuk video
- ✅ Responsive design
- ✅ Fallback untuk video yang gagal dimuat
- ✅ Optimasi loading dengan thumbnail

### 7. Tips Penggunaan

1. **Ukuran File**: Pastikan video tidak terlalu besar (max 10MB untuk loading cepat)
2. **Format**: Gunakan MP4 untuk kompatibilitas terbaik
3. **Thumbnail**: Selalu sediakan thumbnail untuk preview
4. **Poster**: Gunakan poster image untuk tampilan sebelum video diputar
5. **Transformasi**: Gunakan transformasi Cloudinary untuk optimasi ukuran

### 8. Upload Video ke Cloudinary

1. Upload video ke Cloudinary dashboard
2. Dapatkan public ID video
3. Gunakan format URL: `https://res.cloudinary.com/ddfcjabrm/video/upload/[transformasi]/[public_id]`
4. Tambahkan ke array gallery dengan type "video"
