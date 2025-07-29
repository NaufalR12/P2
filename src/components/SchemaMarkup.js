import { Helmet } from "react-helmet-async";

export const LocalBusinessSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Kampung Kebudayaan Pujokusuman",
        description:
          "Kampung budaya di Yogyakarta yang melestarikan tradisi Jawa",
        url: "https://djelajahpujoku.netlify.app/",
        telephone: "+62-274-XXXXXX",
        email: "djelajahpujoku@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kampung Pujokusuman",
          addressLocality: "Keparakan",
          addressRegion: "Yogyakarta",
          postalCode: "55162",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -7.7956,
          longitude: 110.3695,
        },
        openingHours: "Mo-Su 08:00-17:00",
        priceRange: "Free-$$",
        image:
          "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_1200,h_630,c_fill/DSC07541_gcmnuy",
        sameAs: [
          "https://www.instagram.com/kampungpujokusumanyk",
          "https://www.youtube.com/channel/UCCPyxwIkxWXAxAq1iL47yiQ",
        ],
      })}
    </script>
  </Helmet>
);

export const OrganizationSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Kampung Kebudayaan Pujokusuman",
        url: "https://djelajahpujoku.netlify.app/",
        logo: "https://res.cloudinary.com/ddfcjabrm/image/upload/q_auto,f_auto,w_400,h_400,c_fill/logo-pujokusuman",
        description: "Organisasi pelestarian budaya Jawa di Yogyakarta",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kampung Pujokusuman",
          addressLocality: "Keparakan",
          addressRegion: "Yogyakarta",
          postalCode: "55162",
          addressCountry: "ID",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-274-XXXXXX",
          contactType: "customer service",
          email: "djelajahpujoku@gmail.com",
        },
        sameAs: [
          "https://www.instagram.com/kampungpujokusumanyk",
          "https://www.youtube.com/channel/UCCPyxwIkxWXAxAq1iL47yiQ",
        ],
      })}
    </script>
  </Helmet>
);
