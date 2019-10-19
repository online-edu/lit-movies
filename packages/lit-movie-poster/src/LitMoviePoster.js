import { html, css, LitElement } from 'lit-element';

export class LitMoviePoster extends LitElement {
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

  static get properties() {
    return {
      name: { type: String },
      url: { type: String },
    };
  }

  render() {
    return html`
      <button type="button" class="movie-poster">
        <figure>
          <img
            class="movie-poster__image d-flex rounded"
            alt=${this.name}
            src=${this._constructImageUrl(this.url)}
            role="presentation"
          />
        </figure>
      </button>
    `;
  }

  _constructImageUrl(posterUrl) {
    return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${posterUrl}`;
  }
}
