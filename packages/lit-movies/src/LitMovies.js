import { LitElement, html, css } from 'lit-element';

import './components/header/Header.js';
import './components/footer/Footer.js';
import '../../lit-movie-poster/lit-movie-poster.js';

import { loadMovies, renderMovies } from './LitMoviesService.js';
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
      <movies-header></movies-header>
      <main>
        ${this.loading
          ? html`
              Loading...
            `
          : renderMovies(this.movies)}
      </main>
      <movies-footer></movies-footer>
    `;
  }

  /**
   * Function with lit-css to define (deduped) style modules
   */
  static get styles() {
    return [css``];
  }
}
