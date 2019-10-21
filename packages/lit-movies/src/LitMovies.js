import { LitElement, html } from 'lit-element';

import './components/header/Header.js';
import './components/footer/Footer.js';
import './components/modal/Modal.js';
import '../../lit-movie-poster/lit-movie-poster.js';
import './LitMovieDetails.js';
import { commonStyles } from './styles/index.js';

import { loadMovies, loadMovieById } from './LitMoviesService.js';
/**
 * `LitMovies` Component
 *
 * @customElement
 * @extends LitElement
 */
export class LitMovies extends LitElement {
  /**
   * Object property-related metadata
   */
  static get properties() {
    return {
      movies: { type: Array },
      movieDetail: { type: String },
    };
  }

  /**
   * Instance of the element is created/upgraded.
   * Use: initializing state, set up event listeners
   * @constructor
   */
  constructor() {
    super();
    this.movies = [];
    this.loading = true;
    this.loader = html`
      Loading...
    `;
  }

  /**
   *Load the movies when component is added in the DOM.
   */
  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    loadMovies().then(movies => {
      this.movies = movies;
      this.loading = false;
    });
  }

  /**
   * Render template in shadow dom
   */
  render() {
    return html`
      ${this.movieDetail}
      <movies-header></movies-header>
      <main>
        ${this.loading ? this.loader : this._renderMovies()}
      </main>
      <movies-footer></movies-footer>
    `;
  }

  /**
   * Function with lit-css to define (deduped) style modules
   */
  static get styles() {
    return [commonStyles];
  }

  /**
   * Toggle popup and selected movie
   * @param {Object} event
   */
  _renderMovieDetail({ detail: { id } }) {
    loadMovieById(id).then(movie => {
      document.body.classList.add('no-scroll');
      this.movieDetail = html`
        <movie-modal
          @modal-close=${() => {
            this.movieDetail = null;
            document.body.classList.remove('no-scroll');
          }}
          title=${movie.title}
        >
          <movie-details .data=${movie}></movie-details>
        </movie-modal>
      `;
    });
  }

  /**
   * Render movies
   * @param {Array} movies= list of movies
   * @returns {TemplateResult}
   */
  _renderMovies() {
    return this.movies.map(
      movie =>
        html`
          <movie-poster
            @poster-click=${this._renderMovieDetail}
            id=${movie.id}
            name=${movie.original_title}
            url=${movie.poster_path}
          ></movie-poster>
        `,
    );
  }
}
