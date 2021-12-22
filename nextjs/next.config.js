module.exports = {
  reactStrictMode: true,
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    ENDPOINT_ACCUEIL: process.env.ENDPOINT_ACCUEIL,
    ENDPOINT_REPORTAGES: process.env.ENDPOINT_REPORTAGES,
    ENDPOINT_PHOTOS: process.env.ENDPOINT_PHOTOS,
    ENDPOINT_CONTACT: process.env.ENDPOINT_CONTACT,
  },
  images: {
    domains: [process.env.IMAGES_DOMAIN],
  },
};
