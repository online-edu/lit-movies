/**
 * Form poster url
 * @param {String} posterUrl
 * @returns {String}
 */
const constructImageUrl = posterUrl =>
  `https://image.tmdb.org/t/p/w185_and_h278_bestv2${posterUrl}`;

export { constructImageUrl };
