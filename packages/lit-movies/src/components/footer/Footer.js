import { LitElement, html } from 'lit-element';

/**
 * `Footer` Component
 *
 * @summary ShortDescription.
 * @customElement
 * @extends LitElement
 */
class Footer extends LitElement {
  /**
   * Render template in shadow dom
   */
  render() {
    return html`
      <p class="app-footer">
        Footer
      </p>
    `;
  }
}

customElements.define('movies-footer', Footer);
