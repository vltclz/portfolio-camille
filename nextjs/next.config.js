module.exports = {
  reactStrictMode: true,
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    ROUTE_ACCUEIL: process.env.ROUTE_ACCUEIL,
    ROUTE_REPORTAGES: process.env.ROUTE_REPORTAGES,
    ROUTE_PHOTOS: process.env.ROUTE_PHOTOS,
    ROUTE_CONTACT: process.env.ROUTE_CONTACT,
    ENDPOINT_ACCUEIL: process.env.ENDPOINT_ACCUEIL,
    ENDPOINT_REPORTAGES: process.env.ENDPOINT_REPORTAGES,
    ENDPOINT_PHOTOS: process.env.ENDPOINT_PHOTOS,
  },
  images: {
    domains: [process.env.IMAGES_DOMAIN],
  },
};
