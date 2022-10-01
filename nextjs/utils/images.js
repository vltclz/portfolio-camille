const formats = ['large', 'medium', 'small', 'thumbnail'];

// eslint-disable-next-line import/prefer-default-export
export function photoUrl(photoObject, maxFormat) {
  if (!maxFormat) {
    return `${process.env.STRAPI_URL}${photoObject.url}`;
  }
  const possibleFormats = formats.slice(formats.indexOf(maxFormat));
  const url = photoObject.formats
    ? possibleFormats.reduce(
        (prev, curr) => prev ?? photoObject.formats[curr]?.url,
        null
      )
    : photoObject.url;
  return `${process.env.STRAPI_URL}${url}`;
}
