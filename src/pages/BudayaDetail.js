import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./BudayaDetail.css";

const BudayaDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const budayaData = {
    "sanggar-tari-tradisional": {
      title: t("budaya1Title", "Sanggar Tari Tradisional"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/IMG_9508_fqelvn.jpg",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC07541_gcmnuy",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/DSC07541_gcmnuy",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC07503_ysmria",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/DSC07503_ysmria",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_0161_zojodk",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_0161_zojodk",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC07518_bgcqsq",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/DSC07518_bgcqsq",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0111_hzrbnj",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20250723-WA0111_hzrbnj",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0006_jsfh7o",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20250723-WA0006_jsfh7o",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0001_niid2c",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20250723-WA0001_niid2c",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0005_mr2sbn",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20250723-WA0005_mr2sbn",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0003_yitjed",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20250723-WA0003_yitjed",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0109_qgl1om",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20250723-WA0109_qgl1om",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0110_k3hgbt",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20250723-WA0110_k3hgbt",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0004_khtwjd",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20250723-WA0004_khtwjd",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20250723-WA0108_jxgfv0",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20250723-WA0108_jxgfv0",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9508_npw1jd",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9508_npw1jd",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9429_oyquex",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9429_oyquex",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9540_widjpi",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9540_widjpi",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9599_jy20kg",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9599_jy20kg",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9580_mntdif",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9580_mntdif",
        },
      ],
      sejarah: [
        t("budaya1Sejarah1"),
        t("budaya1Sejarah2"),
        t("budaya1Sejarah3"),
        t("budaya1Sejarah4"),
        t("budaya1Sejarah5"),
        t("budaya1Sejarah6"),
        t("budaya1Sejarah7"),
        t("budaya1Sejarah8"),
        t("budaya1Sejarah9"),
        t("budaya1Sejarah10"),
        t("budaya1Sejarah11"),
        t("budaya1Sejarah12"),
      ],
      deskripsi: [t("budaya1Deskripsi")],
      jadwal: t("budaya1Jadwal"),
      tokoh: [
        {
          nama: "KRT Jati Hadiningrat",
          jabatan: "Pemilik dan pengelola ndalem pujokusuman",
          deskripsi:
            "KRT Jati Hadiningrat berperan aktif dalam melestarikan warisan budaya dengan menjaga fungsi dan nilai historis Ndalem Pujokusuman, sekaligus mempertahankan identitas budaya lokal sebagai bagian dari keluarga bangsawan.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/IMG_9429_zfk3p7",
        },
        {
          nama: "Ali Nursotya Nugraha, M.Sn",
          jabatan: "Pemilik Yayasan Tari",
          deskripsi:
            "Generasi muda yang kini memimpin Yayasan Pamulangan Beksa Sasminta Mardawa (YPBSM), melanjutkan estafet kepemimpinan dalam pelestarian tari klasik gaya Yogyakarta. Dengan pendekatan yang terbuka dan adaptif, Alin aktif menjembatani nilai-nilai tradisi dengan dinamika zaman, menjadikan sanggar tidak hanya sebagai ruang latihan tari, tetapi juga tempat tumbuhnya generasi muda yang mencintai budaya.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/IMG_9425_12_czck3l",
        },
      ],
    },
    jemparingan: {
      title: t("budaya2Title", "Jemparingan (Panahan Tradisional)"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/IMG_20220101_085413_hfoz4e",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20200308-WA0041_braskp",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20200308-WA0041_braskp",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20210331_161935_rokjjw",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_20210331_161935_rokjjw",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20210322_162956_b7fqkw",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_20210322_162956_b7fqkw",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20210324_161230_ediapj",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_20210324_161230_ediapj",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20200115-WA0037_ryo6sf",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20200115-WA0037_ryo6sf",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20220101_084932_ceidpt",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_20220101_084932_ceidpt",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20200115-WA0042_yfpdnf",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20200115-WA0042_yfpdnf",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20200115-WA0040_wk1og9",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20200115-WA0040_wk1og9",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20220101_085413_hfoz4e",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_20220101_085413_hfoz4e",
        },
      ],
      sejarah: [
        t("budaya2Sejarah1"),
        t("budaya2Sejarah2"),
        t("budaya2Sejarah3"),
        t("budaya2Sejarah4"),
        t("budaya2Sejarah5"),
        t("budaya2Sejarah6"),
        t("budaya2Sejarah7"),
        t("budaya2Sejarah8"),
        t("budaya2Sejarah9"),
        t("budaya2Sejarah10"),
        t("budaya2Sejarah11"),
        t("budaya2Sejarah12"),
        t("budaya2Sejarah13"),
        t("budaya2Sejarah14"),
      ],
      deskripsi: t("budaya2Deskripsi"),
      tokoh: [
        {
          nama: "Agung Budi Santoso",
          jabatan: "Ketua Jemparingan",
          deskripsi:
            "Memimpin kegiatan Jemparingan di Kampung Pujokusuman, termasuk latihan rutin, pengenalan tradisi panahan gaya Mataram, serta pelibatan generasi muda dalam pelestarian nilai-nilai kemataraman.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/WhatsApp_Image_2025-07-29_at_12.15.18_50691f86_ktfghi",
        },
      ],
    },
    jatilan: {
      title: t("budaya3Title", "Jathilan (Tari Kuda Lumping)"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/jatilan_qsmvtj",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/jatilan_qsmvtj",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/jatilan_qsmvtj",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/jathilan2.jpg",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/jathilan2.jpg",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/jathilan3.jpg",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/jathilan3.jpg",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/jathilan4.jpg",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/jathilan4.jpg",
        },
      ],
      sejarah: [t("budaya3Sejarah1"), t("budaya3Sejarah2")],
      deskripsi: t("budaya3Deskripsi"),
      tokoh: [
        {
          nama: "Sugiarto",
          jabatan: "Ketua kelompok Jathilan",
          deskripsi:
            "Ketua kelompok Jathilan di Kampung Pujokusuman yang memimpin jalannya latihan dan pertunjukan dalam berbagai acara kampung. Mengoordinasi para pemain, penabuh, dan kebutuhan teknis lainnya untuk memastikan keberlangsungan kesenian ini secara mandiri dan rutin.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/WhatsApp_Image_2025-07-24_at_20.33.18_1d1c9260_kddryt",
        },
      ],
    },
    teater: {
      title: t("budaya4Title", "Teater – Sanggar Obah"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/Screenshot_2025-07-20_164214_a9vybk",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/Screenshot_2025-07-20_164214_a9vybk",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/Screenshot_2025-07-20_164214_a9vybk",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC06929_xup9mq",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/DSC06929_xup9mq",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC08741_eq0tjd",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/DSC08741_eq0tjd",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/Screenshot_2025-07-25_135643_kjewzq",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/Screenshot_2025-07-25_135643_kjewzq",
        },
      ],
      sejarah: [
        t("budaya4Sejarah1"),
        t("budaya4Sejarah2"),
        t("budaya4Sejarah3"),
      ],
      deskripsi: t("budaya4Deskripsi"),
      tokoh: [
        {
          nama: "Danang Rusmandoko",
          jabatan: "Penggerak Teater Sanggar Obah",
          deskripsi:
            "Salah satu tokoh sentral dalam kegiatan kebudayaan di Kampung Pujokusuman. Ia kerap menjadi pengarah, penghubung, sekaligus penggerak berbagai kegiatan seni dan tradisi lokal. Perannya penting dalam menjaga kesinambungan antar generasi, menjembatani inisiatif warga dengan program kampung budaya secara konsisten dan penuh dedikasi.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/WhatsApp_Image_2025-07-21_at_21.01.55_3ce33573_pytrtx",
        },
        {
          nama: "Nurdiana",
          jabatan: "Penggerak Teater Sanggar Obah",
          deskripsi:
            "Menginisiasi dan mengelola kegiatan Teater Obah sebagai ruang ekspresi warga, khususnya anak muda. Berperan dalam pengembangan naskah, proses latihan, dan kolaborasi lintas komunitas dalam pertunjukan teater berbasis isu sosial kampung.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/WhatsApp_Image_2025-07-29_at_11.27.23_39ff2d10_pcnw8z",
        },
      ],
    },
    ruwatan: {
      title: t("budaya5Title", "Upacara Ruwatan"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/IMG_1381_1_fcfupy.jpg",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_1402_o1kstj",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_1402_o1kstj",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_1363_zvjtnc",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_1363_zvjtnc",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_1373_nz7wrt.",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_1373_nz7wrt",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_1376_i9qnhl",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_1376_i9qnhl",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_1384_jahwco",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_1384_jahwco",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_1403_deuuoz",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_1403_deuuoz",
        },
      ],
      sejarah: [t("budaya5Sejarah"), t("budaya5Sejarah1")],
      deskripsi: [t("budaya5Deskripsi"), t("budaya5Deskripsi1")],
    },
    "pujokusuman-creative-lab": {
      title: t("budaya6Title", "Pujokusuman Creative Lab"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/WhatsApp_Image_2025-07-10_at_19.13.54_0f817fc4_mwpwlp.jpg",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fit/WhatsApp_Image_2025-07-28_at_21.25.44_f17ee83a_g8anzj",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/WhatsApp_Image_2025-07-28_at_21.25.44_f17ee83a_g8anzj",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fit/WhatsApp_Image_2025-07-28_at_21.25.44_dafe0131_p3smuj",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/WhatsApp_Image_2025-07-28_at_21.25.44_dafe0131_p3smuj",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fit/WhatsApp_Image_2025-07-28_at_21.25.45_984a5ba5_po4gjo",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/WhatsApp_Image_2025-07-28_at_21.25.45_984a5ba5_po4gjo",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fit/creative4.jpg",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/creative4.jpg",
        },
      ],
      sejarah: [
        t("budaya6Sejarah1"),
        t("budaya6Sejarah2"),
        t("budaya6Sejarah3"),
        t("budaya6Sejarah4"),
        t("budaya6Sejarah5"),
        t("budaya6Sejarah6"),
        t("budaya6Sejarah7"),
        t("budaya6Sejarah8"),
      ],
      deskripsi: t("budaya6Deskripsi"),
      tokoh: [
        {
          nama: "Farhan",
          jabatan: "Pendiri Pujokusuman Creative Lab",
          deskripsi:
            "Mengelola dan mengembangkan Pujokusuman Creative Lab sebagai ruang bertemu, belajar, dan berkreasi bagi warga. Menyusun program-program warga seperti Sekolah Kampung dan kegiatan kolektif lainnya yang berbasis isu sosial, budaya, dan kewirausahaan lokal.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/WhatsApp_Image_2025-07-28_at_21.25.45_8a95e08f_vgy5l9",
        },
      ],
    },
    "pasar-pujokusuman": {
      title: t("budaya7Title", "Pasar Pujokusuman"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/IMG_9786_cdl0tt.jpg",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9813_qktdgq",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9813_qktdgq",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9786_qauhdm",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9786_qauhdm",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9811_pysxcp",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9811_pysxcp",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9810_gpo1pp",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9810_gpo1pp",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9820_yjxuiu",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9820_yjxuiu",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9769_n5hlxw",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9769_n5hlxw",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9893_wbpclz",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9893_wbpclz",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC09350_qrukym",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/DSC09350_qrukym",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9784_xwalen",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9784_xwalen",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC09321_axby6x",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/DSC09321_axby6x",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC09287_nozuax",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/DSC09287_nozuax",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC09299_c78bmt",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/DSC09299_c78bmt",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/DSC09308_xkuxmx",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/DSC09308_xkuxmx",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9836_xpki7f",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9836_xpki7f",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_0442_cr1bfu",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_0442_cr1bfu",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_0444_ewlbfp",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_0444_ewlbfp",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_9848_wwboad",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_9848_wwboad",
        },
      ],
      sejarah: [
        t("budaya7Sejarah"),
        t("budaya7Sejarah1"),
        t("budaya7Sejarah2"),
        t("budaya7Sejarah3"),
        t("budaya7Sejarah4"),
      ],
      deskripsi: t("budaya7Deskripsi"),
      jadwal: t("budaya7Jadwal"),
      // Tidak ada lagi: kegiatan, prestasi, tokoh
    },
    "komunitas-kringmen": {
      title: t("budaya8Title", "Komunitas Kringmen"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/IMG_20180304_102302_arsnaw",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20180304_111331_wjynfq",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_20180304_111331_wjynfq",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20180304_102139_u6vemv",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_20180304_102139_u6vemv",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG-20240204-WA0021_l2gs9q",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG-20240204-WA0021_l2gs9q",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_20240204_082135_duszw6",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_20240204_082135_duszw6",
        },
      ],
      sejarah: [t("budaya8Sejarah"), t("budaya8Sejarah1")],
      deskripsi: t("budaya8Deskripsi"),
      kegiatan: [
        t("budaya8Kegiatan1"),
        t("budaya8Kegiatan2"),
        t("budaya8Kegiatan3"),
        t("budaya8Kegiatan4"),
      ],
      jadwal: t("budaya8Jadwal"),
      prestasi: [
        "Penggerak Komunitas Sosial Pujokusuman 2023",
        "Kolaborasi dengan berbagai komunitas lokal",
        "Pelatihan dan Workshop untuk warga",
        "Aksi sosial dan lingkungan berkelanjutan",
      ],
      tokoh: [
        {
          nama: "Danang Rusmandoko",
          jabatan: "Penggerak Kebudayaan Pujokusuman & Ketua KringMan",
          deskripsi:
            "Selain aktif di bidang budaya, Danang juga merupakan salah satu penggerak komunitas sepeda “Kring Man” di Kampung Pujokusuman. Komunitas ini tumbuh dari kebiasaan warga bersepeda bersama tanpa jadwal khusus, sebagai ruang silaturahmi dan olahraga ringan yang merawat kebersamaan. Di dalamnya, Danang mendorong semangat kebugaran, kebersamaan, dan kecintaan pada kampung sendiri melalui kegiatan yang sederhana namun bermakna.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/WhatsApp_Image_2025-07-21_at_21.01.55_3ce33573_pytrtx",
        },
      ],
    },
    "orkes-kentongan-sukarena": {
      title: t("budaya9Title", "Orkes Kentongan SUKA RENA"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/orkes_gypwn2",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/orkes1.jpg",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/orkes1.jpg",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/orkes2.jpg",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/orkes2.jpg",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/orkes3.jpg",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/orkes3.jpg",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/orkes4.jpg",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/orkes4.jpg",
        },
      ],
      sejarah: [
        t("budaya9Sejarah"),
        t("budaya9Sejarah1"),
        t("budaya9Sejarah2"),
        t("budaya9Sejarah3"),
        t("budaya9Sejarah4"),
      ],
      deskripsi: t("budaya9Deskripsi"),
    },
    "komunitas-pohon": {
      title: t(
        "budaya10Title",
        "Komunitas POHON (Pedjoeang Heritage Pujokusuman)"
      ),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/IMG_8593_r0h8vi",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/IMG_8593_r0h8vi",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/IMG_8593_r0h8vi",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/WhatsApp_Image_2025-07-28_at_11.40.19_152260bc_hkyxf7",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/WhatsApp_Image_2025-07-28_at_11.40.19_152260bc_hkyxf7",
        },
        {
          type: "video",
          url: "https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,w_800,h_600,c_fill/IMG_8588_lqfc8f",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/video/upload/q_auto,w_200,h_150,c_fill/Screenshot_2025-07-28_114710_a9donf",
          poster:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/Screenshot_2025-07-28_114710_a9donf",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/pohon4.jpg",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/pohon4.jpg",
        },
      ],
      sejarah: [
        t("budaya10Sejarah"),
        t("budaya10Sejarah1"),
        t("budaya10Sejarah2"),
      ],
      deskripsi: t("budaya10Deskripsi"),
      tokoh: [
        {
          nama: "Danang Rusmandoko",
          jabatan:
            "Penggerak Kebudayaan Pujokusuman & Pengagas Komunitas POHON",
          deskripsi:
            "Salah satu tokoh sentral dalam kegiatan kebudayaan di Kampung Pujokusuman. Ia kerap menjadi pengarah, penghubung, sekaligus penggerak berbagai kegiatan seni dan tradisi lokal. Perannya penting dalam menjaga kesinambungan antar generasi, menjembatani inisiatif warga dengan program kampung budaya secara konsisten dan penuh dedikasi.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/WhatsApp_Image_2025-07-21_at_21.01.55_3ce33573_pytrtx",
        },
        {
          nama: "Wili Lumintang",
          jabatan: "Editor dan director of photography POHON",
          deskripsi:
            "Editor dan director of photography di Komunitas POHON yang merangkai kisah sejarah kampung menjadi dokumenter visual yang kuat dan menyentuh. Lewat bidikan kamera dan penyuntingan yang cermat, cerita-cerita lama dari warga dihidupkan kembali sebagai bagian dari ingatan kolektif Pujokusuman.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/1I1A8396_ekty32",
        },
      ],
    },
    ketoprak: {
      title: t("budaya11Title", "Ketoprak"),
      heroImage:
        "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_600,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.53_69bf7fc2_xxzjzu",
      gallery: [
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.53_69bf7fc2_xxzjzu",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.53_69bf7fc2_xxzjzu",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.53_c5f2ce4c_lap9lo",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.53_c5f2ce4c_lap9lo",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.54_d07b9988_fqu0da",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.54_d07b9988_fqu0da",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.54_a3bd186d_vig8hw",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.54_a3bd186d_vig8hw",
        },
        {
          type: "image",
          url: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_800,h_600,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.53_f5d2d1c8_qlvf2q",
          thumbnail:
            "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_200,h_150,c_fill/v1710000000/WhatsApp_Image_2025-07-16_at_16.22.53_f5d2d1c8_qlvf2q",
        },
      ],
      sejarah: [
        t("budaya11Sejarah1"),
        t("budaya11Sejarah2"),
        t("budaya11Sejarah3"),
      ],
      deskripsi: [t("budaya11Deskripsi1")],
      tokoh: [
        {
          nama: "Budi Triono",
          jabatan: "Pencetus dan Pelatih Ketoprak",
          deskripsi:
            "Sosok di balik lahirnya Ketoprak Kampung Pujokusuman yang kini berkembang menjadi Paguyuban Catur Manunggal Budoyo. Berawal dari semangat gotong royong dan kecintaan pada seni tradisi, ia berhasil menggerakkan warga lintas usia untuk terlibat dalam pertunjukan ketoprak sejak 2017.",
          foto: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/WhatsApp_Image_2025-07-16_at_17.13.21_3c9f3f95_hadppt",
        },
      ],
    },
  };

  const budaya = budayaData[id];

  if (!budaya) {
    return (
      <div className="budaya-detail-page">
        <div className="container">
          <h1>Budaya tidak ditemukan</h1>
          <Link to="/kebudayaan" className="btn btn-primary">
            Kembali ke Kebudayaan
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === budaya.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? budaya.gallery.length - 1 : prev - 1
    );
  };

  const getPlaceholderImage = (title) => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, "#8B4513");
    gradient.addColorStop(1, "#DAA520");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(title, 400, 300);

    return canvas.toDataURL();
  };

  return (
    <div className="budaya-detail-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img
            src={budaya.heroImage}
            alt={budaya.title}
            onError={(e) => {
              e.target.src = getPlaceholderImage(budaya.title);
            }}
          />
          <div className="hero-overlay">
            <div className="container">
              <h1>{budaya.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="breadcrumb-section">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/kebudayaan">Kebudayaan</Link>
            <span>/</span>
            <span>{budaya.title}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Left Column - Text Content */}
            <div className="content-text">
              {/* Sejarah Section */}
              <div className="content-section">
                <h2>📜 {t("labelSejarah", "Sejarah")}</h2>
                {id === "jemparingan" ? (
                  <>
                    <p>{t("budaya2Sejarah1")}</p>
                    <p>{t("budaya2Sejarah2")}</p>
                    <b>Sejarah Jemparingan</b>
                    <div style={{ marginTop: 4 }}>{t("budaya2Sejarah3")}</div>
                    <b>Perkembangan Gaya Jemparingan</b>
                    <ol type="1" style={{ marginTop: 4 }}>
                      <li>
                        <b>Gagrag Mataram Ngayogyakarta</b>
                        <div>{t("budaya2Sejarah4")}</div>
                      </li>
                      <li>
                        <b>Gaya Bidikan (1953)</b>
                        <div>{t("budaya2Sejarah5")}</div>
                      </li>
                    </ol>
                  </>
                ) : id === "pujokusuman-creative-lab" ? (
                  <>
                    <div style={{ marginBottom: 20 }}>
                      <h3 style={{ color: "#8B4513", marginBottom: 10 }}>
                        Latar Belakang
                      </h3>
                      <p>{t("budaya6Sejarah1")}</p>
                      <p>{t("budaya6Sejarah2")}</p>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <h3 style={{ color: "#8B4513", marginBottom: 10 }}>
                        Pembentukan dan Tujuan
                      </h3>
                      <p>{t("budaya6Sejarah3")}</p>
                      <p>{t("budaya6Sejarah4")}</p>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <h3 style={{ color: "#8B4513", marginBottom: 10 }}>
                        Aktivitas Utama
                      </h3>
                      <p>{t("budaya6Sejarah5")}</p>
                      <p>{t("budaya6Sejarah6")}</p>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <h3 style={{ color: "#8B4513", marginBottom: 10 }}>
                        Kontribusi untuk Kampung
                      </h3>
                      <p>{t("budaya6Sejarah7")}</p>
                      <p>{t("budaya6Sejarah8")}</p>
                    </div>
                  </>
                ) : (
                  budaya.sejarah.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                )}
              </div>

              {/* Deskripsi Section */}
              <div className="content-section">
                <h2>📝 {t("labelDeskripsi", "Deskripsi")}</h2>
                {id === "jemparingan" ? (
                  <>
                    <p>{t("budaya2Deskripsi")}</p>
                    <b>Tata Cara Bermain</b>
                    <ol type="1" style={{ marginTop: 4 }}>
                      <li>
                        <b>Posisi Duduk Bersila Miring ke Kiri</b>
                        <div>{t("budaya2Sejarah7")}</div>
                      </li>
                      <li>
                        <b>Pegangan Busur dan Tarik Anak Panah</b>
                        <div>{t("budaya2Sejarah8")}</div>
                      </li>
                      <li>
                        <b>Jarak Sasaran: 10–20 Meter</b>
                        <div>{t("budaya2Sejarah9")}</div>
                      </li>
                      <li>
                        <b>Sistem Nilai: Lonceng Tanda Sasaran</b>
                        <div>{t("budaya2Sejarah10")}</div>
                      </li>
                    </ol>
                    <b>Nilai Kemataraman dalam Jemparingan</b>
                    <div style={{ marginTop: 4 }}>{t("budaya2Sejarah11")}</div>
                    <ul style={{ marginTop: 4 }}>
                      <li>
                        <b>Untuk Laki-laki:</b>
                        <div>
                          {t("budaya2Sejarah11").split("Untuk Laki-laki:")[1]}
                        </div>
                      </li>
                      <li>
                        <b>Untuk Perempuan:</b>
                        <div>
                          {t("budaya2Sejarah12").split("Untuk Perempuan:")[1]}
                        </div>
                      </li>
                    </ul>
                    <b>Manfaat dan Keutamaan Berlatih Jemparingan</b>
                    <ol type="1" style={{ marginTop: 4 }}>
                      {t("budaya2Sejarah13")
                        .split("\n")
                        .slice(1, 7)
                        .map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                    </ol>
                    <b>Pendidikan Karakter dalam Jemparingan</b>
                    <div style={{ marginTop: 4 }}>
                      Jiwa Ksatria Mataram sebagaimana diajarkan oleh Pangeran
                      Mangkubumi (Sri Sultan Hamengku Buwono I):
                    </div>
                    <ol type="1" style={{ marginTop: 4 }}>
                      {t("budaya2Sejarah14")
                        .split("\n")
                        .slice(1, 5)
                        .map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                    </ol>
                  </>
                ) : id === "pasar-pujokusuman" ? (
                  // Tampilkan deskripsi dengan format paragraf dan list jika ada, tanpa <li>
                  <div>
                    {budaya.deskripsi.split("\n").map((line, idx) => {
                      // List item: tampilkan sebagai <div> dengan indentasi, tanpa <li>
                      if (line.startsWith("- ")) {
                        return (
                          <div
                            key={idx}
                            style={{ marginLeft: 20, marginBottom: 4 }}
                          >
                            • {line.replace("- ", "")}
                          </div>
                        );
                      }
                      // Heading
                      if (
                        line.endsWith(":") &&
                        !line.startsWith("-") &&
                        line.trim().length > 1
                      ) {
                        return (
                          <b
                            key={idx}
                            style={{ display: "block", marginTop: 12 }}
                          >
                            {line.replace(":", "")}
                          </b>
                        );
                      }
                      // Empty line
                      if (line.trim() === "") {
                        return <br key={idx} />;
                      }
                      // Normal paragraph
                      return (
                        <p key={idx} style={{ marginBottom: 8 }}>
                          {line}
                        </p>
                      );
                    })}
                  </div>
                ) : Array.isArray(budaya.deskripsi) ? (
                  budaya.deskripsi.map((desc, idx) => <p key={idx}>{desc}</p>)
                ) : (
                  <p>{budaya.deskripsi}</p>
                )}
              </div>

              {/* Kegiatan Section */}
              {budaya.kegiatan && budaya.kegiatan.length > 0 && (
                <div className="content-section">
                  <h2>🎯 {t("labelKegiatan", "Kegiatan")}</h2>
                  <ul>
                    {budaya.kegiatan.map((kegiatan, index) => (
                      <li key={index}>{kegiatan}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Jadwal Section */}
              {budaya.jadwal && (
                <div className="content-section">
                  <h2>⏰ {t("labelJadwal", "Jadwal")}</h2>
                  <p className="jadwal-text">{budaya.jadwal}</p>
                </div>
              )}

              {/* Prestasi Section */}
              {budaya.prestasi && budaya.prestasi.length > 0 && (
                <div className="content-section">
                  <h2>🏆 {t("prestasiPencapaian", "Prestasi & Pencapaian")}</h2>
                  <ul>
                    {budaya.prestasi.map((prestasi, index) => (
                      <li key={index}>{prestasi}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tokoh Section */}
              {budaya.tokoh && budaya.tokoh.length > 0 && (
                <div className="content-section">
                  <h2>👥 {t("tokohUtama", "Tokoh Utama")}</h2>
                  <div className="tokoh-grid">
                    {budaya.tokoh.map((tokoh, index) => (
                      <div key={index} className="tokoh-card">
                        <div className="tokoh-image">
                          <img
                            src={tokoh.foto}
                            alt={tokoh.nama}
                            onError={(e) => {
                              e.target.src = getPlaceholderImage(tokoh.nama);
                            }}
                          />
                        </div>
                        <div className="tokoh-info">
                          <h3>{tokoh.nama}</h3>
                          <p className="tokoh-jabatan">{tokoh.jabatan}</p>
                          <p className="tokoh-deskripsi">{tokoh.deskripsi}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Gallery */}
            <div className="content-gallery">
              <h2>📸 {t("galeriFoto", "Galeri Foto")}</h2>
              <div className="gallery-container">
                <div className="main-image">
                  {budaya.gallery[currentImageIndex].type === "image" ? (
                    <img
                      src={budaya.gallery[currentImageIndex].url}
                      alt={`${budaya.title} - Foto ${currentImageIndex + 1}`}
                      onError={(e) => {
                        e.target.src = getPlaceholderImage(
                          `Foto ${currentImageIndex + 1}`
                        );
                      }}
                      style={{ cursor: "zoom-in" }}
                      onClick={() => setIsModalOpen(true)}
                    />
                  ) : (
                    <video
                      src={budaya.gallery[currentImageIndex].url}
                      controls
                      onError={(e) => {
                        e.target.src = getPlaceholderImage(
                          `Video ${currentImageIndex + 1}`
                        );
                      }}
                      style={{ cursor: "zoom-in" }}
                      onClick={() => setIsModalOpen(true)}
                    />
                  )}
                  <button className="gallery-nav prev" onClick={prevImage}>
                    ‹
                  </button>
                  <button className="gallery-nav next" onClick={nextImage}>
                    ›
                  </button>
                </div>
                <div className="thumbnail-grid">
                  {budaya.gallery.map((item, index) => (
                    <div
                      key={index}
                      className={`thumbnail-item ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                      data-type={item.type}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={item.thumbnail}
                        alt={`${budaya.title} - Thumbnail ${index + 1}`}
                        onError={(e) => {
                          e.target.src = getPlaceholderImage(
                            `Thumbnail ${index + 1}`
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>
                {/* Modal for fullscreen image */}
                {isModalOpen && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100vw",
                      height: "100vh",
                      background: "rgba(0,0,0,0.8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2000,
                    }}
                    onClick={() => setIsModalOpen(false)}
                  >
                    {budaya.gallery[currentImageIndex].type === "image" ? (
                      <img
                        src={budaya.gallery[currentImageIndex].url}
                        alt="Fullsize"
                        style={{
                          maxWidth: "90vw",
                          maxHeight: "90vh",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                          borderRadius: "12px",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                          background: "#fff",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      <video
                        src={budaya.gallery[currentImageIndex].url}
                        controls
                        style={{
                          maxWidth: "90vw",
                          maxHeight: "90vh",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                          borderRadius: "12px",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                          background: "#fff",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    )}
                    <button
                      onClick={() => setIsModalOpen(false)}
                      style={{
                        position: "fixed",
                        top: 32,
                        right: 32,
                        background: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        fontSize: 24,
                        cursor: "pointer",
                        zIndex: 2100,
                      }}
                      aria-label="Tutup"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
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
            <Link to="/kebudayaan" className="btn btn-outline">
              {t("kembaliKeKebudayaan", "Kembali ke Kebudayaan")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BudayaDetail;
