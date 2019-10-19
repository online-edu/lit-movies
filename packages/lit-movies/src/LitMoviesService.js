import { html } from 'lit-element';
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

/**
 * Render movies
 * @param {Array} movies= list of movies
 * @returns {TemplateResult}
 */
const renderMovies = (movies = []) =>
  movies.map(
    movie =>
      html`
        <movie-poster name=${movie.original_title} url=${movie.poster_path}></movie-poster>
      `,
  );

export { loadMovies, loadMovieById, renderMovies };
