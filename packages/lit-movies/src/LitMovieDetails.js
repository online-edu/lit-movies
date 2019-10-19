import { LitElement, html, css } from 'lit-element';
import { nothing } from 'lit-html';
import '../../lit-movie-poster/lit-movie-poster.js';

import flex from './styles/flex.style.js';
import common from './styles/common.style.js';

const NA = 'Not Available';
/**
 * `LitMovieDetails` component
 *
 * @customElement
 * @extends LitElement
 */
class LitMovieDetails extends LitElement {
  /**
   * Object property-related metadata
   */
  static get properties() {
    return {
      data: { type: Object },
    };
  }

  /**
   * Function with lit-css to define (deduped) style modules
   */
  static get styles() {
    return [
      common,
      flex,
      css`
        .movie-details__table tr td {
          padding: 0.5em 0;
        }
      `,
    ];
  }

  /**
   * Render template in shadow dom
   */
  render() {
    return this.data
      ? html`
          <div class="row">
            <div class="col-33">
              <movie-poster name=${this.data.title} url=${this.data.poster_path}></movie-poster>
            </div>
            <div class="col-66">
              <div class="row">
                <div class="col-100">
                  <p class="text-primary">Overview</p>
                  <p class="mb-0">
                    <em>${this.data.overview}</em>
                  </p>
                </div>
              </div>
              <div class="divider"></div>
              <table class="movie-details__table">
                <tbody>
                  <tr>
                    <td><dt class="text-primary">Tagline</dt></td>
                    <td><dd>${this.data.tagline || NA}</dd></td>
                  </tr>
                  <tr>
                    <td><dt class="text-primary">Rating</dt></td>
                    <td><dd>${this.data.vote_average || NA}</dd></td>
                  </tr>
                  <tr>
                    <td><dt class="text-primary">Status</dt></td>
                    <td><dd>${this.data.status || NA}</dd></td>
                  </tr>
                  <tr>
                    <td><dt class="text-primary">Release Date</dt></td>
                    <td><dd>${this.data.release_date || NA}</dd></td>
                  </tr>
                  <tr>
                    <td><dt class="text-primary">Language</dt></td>
                    <td><dd>${this.data.original_language || NA}</dd></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      : nothing;
  }
}

customElements.define('movie-details', LitMovieDetails);
