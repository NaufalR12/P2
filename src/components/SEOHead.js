import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SEOHead = ({
  title,
  description,
  keywords,
  url,
  image,
  type = "website",
  structuredData,
  canonical,
  lang,
}) => {
  const { i18n } = useTranslation();
  const currentLang = lang || i18n.language;

  const defaultImage =
    "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_630,c_fill/DSC07541_gcmnuy";
  const siteUrl = "https://djelajahpujoku.netlify.app";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="author" content="Kampung Kebudayaan Pujokusuman" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8B4513" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical || url || siteUrl} />

      {/* Language alternates */}
      <link
        rel="alternate"
        hrefLang="id"
        href={`${siteUrl}${window.location.pathname}?lang=id`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`${siteUrl}${window.location.pathname}?lang=en`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteUrl}${window.location.pathname}`}
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Kampung Kebudayaan Pujokusuman" />
      <meta
        property="og:locale"
        content={currentLang === "id" ? "id_ID" : "en_US"}
      />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:site" content="@kampungpujoku" />
      <meta name="twitter:creator" content="@kampungpujoku" />

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="ID-YO" />
      <meta name="geo.placename" content="Yogyakarta, Indonesia" />
      <meta name="geo.position" content="-7.7956;110.3695" />
      <meta name="ICBM" content="-7.7956, 110.3695" />

      {/* Article specific meta (if type is article) */}
      {type === "article" && (
        <>
          <meta
            property="article:publisher"
            content="Kampung Kebudayaan Pujokusuman"
          />
          <meta property="article:section" content="Budaya" />
          <meta
            property="article:tag"
            content="budaya jawa, yogyakarta, tradisi"
          />
        </>
      )}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Helmet>
  );
};

export default SEOHead;
