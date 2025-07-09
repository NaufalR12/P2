# Setup Cloudinary untuk Kampung Kebudayaan Pujokusuman

## Langkah-langkah Setup:

### 1. Buat Akun Cloudinary

- Kunjungi [console.cloudinary.com](https://console.cloudinary.com)
- Daftar akun baru atau login
- Catat **Cloud Name** dari dashboard

### 2. Upload Media

Buat folder structure di Cloudinary:

```
kampung-pujokusuman/
├── photos/
│   ├── hero-image
│   ├── tari-tradisional
│   ├── batik-workshop
│   └── kerajinan-tangan
└── videos/
    ├── gamelan-performance
    └── wayang-kulit
```

### 3. Konfigurasi Project

- Buka file `src/config/cloudinary.js`
- Ganti `your-cloud-name` dengan Cloud Name Anda
- Update public_id di `src/components/MediaSlider.js` sesuai dengan file yang diupload

### 4. Format Upload yang Disarankan

**Foto:**

- Format: JPG/PNG
- Resolusi: Minimal 800x600px
- Ukuran: Maksimal 5MB

**Video:**

- Format: MP4
- Resolusi: 720p atau 1080p
- Durasi: Maksimal 2 menit
- Ukuran: Maksimal 50MB

### 5. Public ID Examples

Ketika upload file `hero-kampung.jpg` ke folder `kampung-pujokusuman/photos/`,
public_id akan menjadi: `kampung-pujokusuman/photos/hero-kampung`

### 6. Testing

- Install dependencies: `npm install`
- Jalankan project: `npm start`
- Slider akan menampilkan placeholder jika media belum diupload
- Upload media ke Cloudinary dan update public_id untuk melihat hasil

### 7. Optimisasi

Cloudinary otomatis akan:

- Compress gambar/video
- Serve format terbaik (WebP untuk browser yang support)
- Resize sesuai device
- Lazy loading untuk performa

```

## Media Yang Perlu Diupload:

1. **hero-image**: Foto utama kampung
2. **tari-tradisional**: Foto/video pertunjukan tari
3. **gamelan-performance**: Video pertunjukan gamelan
4. **batik-workshop**: Foto kegiatan workshop batik
5. **kerajinan-tangan**: Foto hasil kerajinan
6. **wayang-kulit**: Video pertunjukan wayang kulit

Setiap media bisa ditambahkan lebih banyak dengan mengedit array `mediaItems` di `MediaSlider.js`.
```
