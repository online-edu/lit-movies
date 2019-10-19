import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { openWcLogo } from './open-wc-logo.js';

import '../../page-main/page-main.js';
import '../../page-one/page-one.js';
import './components/header/Header.js';
import './components/footer/Footer.js';
import { templateAbout } from './templateAbout.js';

export class LitMovies extends LitElement {
  constructor() {
    super();
    this.page = 'main';
  }

  _renderPage() {
    switch (this.page) {
      case 'main':
        return html`
          <page-main .logo=${openWcLogo}></page-main>
        `;
      case 'pageOne':
        return html`
          <page-one></page-one>
        `;
      case 'about':
        return templateAbout;
      default:
        return html`
          <p>Page not found try going to <a href="#main">Main</a></p>
        `;
    }
  }

  __clickPageLink(ev) {
    ev.preventDefault();
    this.page = ev.target.hash.substring(1);
  }

  __addActiveIf(page) {
    return classMap({ active: this.page === page });
  }

  render() {
    return html`
      <movies-header></movies-header>
      <main></main>
      <movies-footer></movies-footer>
    `;
  }

  static get styles() {
    return [css``];
  }
}

// :host {
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   font-size: calc(10px + 2vmin);
//   color: #1a2b42;
//   max-width: 960px;
//   margin: 0 auto;
// }

// header {
//   width: 100%;
//   background: #fff;
//   border-bottom: 1px solid #ccc;
// }

// header ul {
//   display: flex;
//   justify-content: space-between;
//   min-width: 400px;
//   margin: 0 auto;
//   padding: 0;
// }

// header ul li {
//   display: flex;
// }

// header ul li a {
//   color: #ccc;
//   text-decoration: none;
//   font-size: 18px;
//   line-height: 36px;
// }

// header ul li a:hover,
// header ul li a.active {
//   color: #000;
// }

// main {
//   flex-grow: 1;
// }

// .app-footer {
//   color: #a8a8a8;
//   font-size: calc(12px + 0.5vmin);
//   align-items: center;
// }

// .app-footer a {
//   margin-left: 5px;
// }
