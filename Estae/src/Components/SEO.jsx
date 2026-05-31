import { Helmet } from "react-helmet-async";

const SITE_URL = "https://aucosmos.truelitestates.com";
const SITE_NAME = "AU Cosmos Corner | Truelite Estates LLP";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  url = SITE_URL,
  image = DEFAULT_IMAGE,
  type = "website",
  schema = null,
}) {
  const fullTitle = title
    ? `${title} | AU Cosmos Corner`
    : "AU Cosmos Corner — 3 BHK Luxury Apartments | Siddharth Vihar, Ghaziabad";

  const fullDesc =
    description ||
    "Book 3 BHK, 3 BHK+Servant & 5 BHK+Servant luxury apartments at AU Cosmos Corner, Siddharth Vihar Ghaziabad. Pre-launch ₹6900/sq ft. RERA: UPRERAPRJ466336. Marketed by Truelite Estates LLP — Authorized Channel Partner.";

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <meta name="keywords" content="3 BHK apartments Ghaziabad, luxury flats Siddharth Vihar, AU Cosmos Corner, buy flat Ghaziabad, RERA approved apartments Ghaziabad, 3 BHK Siddharth Vihar price, 5 BHK flat Ghaziabad, Truelite Estates LLP, AU Real Estate Pvt Ltd, pre-launch flats Ghaziabad 2026" />
      <meta name="author" content="Truelite Estates LLP" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={image} />

      {/* Geo Tags (India local SEO) */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Ghaziabad, Uttar Pradesh" />
      <meta name="geo.position" content="28.6692;77.4538" />
      <meta name="ICBM" content="28.6692, 77.4538" />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
