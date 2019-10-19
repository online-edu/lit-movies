import { html, css, LitElement } from 'lit-element';
import { constructImageUrl } from './LitMoviePosterService.js';
/**
 * `LitMoviePoster` Component
 *
 * @customElement
 * @extends LitElement
 */
export class LitMoviePoster extends LitElement {
  /**
   * Function with lit-css to define (deduped) style modules
   */
  static get styles() {
    return css`
      .movie-poster {
        margin: 0.5rem 0;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        text-decoration: none;
        border: none;
        background-color: transparent;
        border-radius: 12px;
      }

      .movie-poster:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem hsla(0, 0%, 100%, 0.25);
      }

      .movie-poster__image {
        cursor: pointer;
        transition: all 0.3s ease-in;
        border-radius: 1rem;
      }

      .movie-poster__image:hover,
      .movie-poster__image:focus {
        outline-color: #706df8;
        transform: scale(1.2);
      }
    `;
  }

  /**
   * Object property-related metadata
   */
  static get properties() {
    return {
      name: { type: String },
      url: { type: String },
      id: { type: Number },
    };
  }

  /**
   * Render template in shadow dom
   */
  render() {
    return html`
      <button type="button" class="movie-poster" @click=${this._onClick} @keyPress=${this._onClick}>
        <figure>
          <img
            class="movie-poster__image d-flex rounded"
            alt=${this.name}
            src=${constructImageUrl(this.url)}
            role="presentation"
          />
        </figure>
      </button>
    `;
  }

  /**
   * Fire a custom event `poster-click` on button click.
   */
  _onClick() {
    this.dispatchEvent(new CustomEvent('poster-click', { detail: { id: this.id } }));
  }
}
