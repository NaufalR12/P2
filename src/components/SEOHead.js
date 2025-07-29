import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title,
  description,
  keywords,
  url,
  image = "https://djelajahpujoku.netlify.app/images/og-default.jpg",
  type = "website",
  structuredData,
}) => {
  const defaultTitle = "Kampung Kebudayaan Pujokusuman";
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Kampung Kebudayaan Pujokusuman" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="author" content="Kampung Kebudayaan Pujokusuman" />
      <meta name="language" content="Indonesian" />
      <meta name="geo.region" content="ID-YO" />
      <meta name="geo.placename" content="Yogyakarta" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
