import { api, key } from './utils/config.js';
import request from './utils/request.js';

/**
 * Load movies from server
 * @returns {Promise}
 */
const loadMovies = () =>
  request.get(`${api}/movie/popular${key}`).then(({ results: movies }) => Promise.resolve(movies));
/**
 * Load movie details by id from server
 * @param {Number} id movie id
 * @returns {Promise}
 */
const loadMovieById = id => request.get(`${api}/movie/${id}${key}`);

export { loadMovies, loadMovieById };
