import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from '../../open-wc-logo.js';

export class Header extends LitElement {
  static get styles() {
    return [
      css`
        .movie-header {
          background: rgba(0, 0, 0, 0.8);
          border-bottom: 0.01em solid #706df8;
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
        }

        .movie-header__brand {
          color: #706df8;
          display: inline-block;
          padding: 0.4rem 0;
          margin: 0 1rem;
          font-size: 1.25rem;
          white-space: nowrap;
          text-decoration: none;
        }

        .movie-header__brand:hover,
        .movie-header__brand:focus {
          color: $FFF;
        }

        .sticky-top {
          position: sticky;
          top: 0;
          z-index: 1020;
        }
      `,
    ];
  }

  render() {
    return html`
      <nav role="banner" class="movie-header navbar navbar-expand-lg navbar-light sticky-top">
        ${openWcLogo}
        <a href="#home" class="movie-header__brand">Lit Movies</a>
      </nav>
    `;
  }
}

customElements.define('movies-header', Header);
