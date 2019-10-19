import { LitElement, html } from 'lit-element';
import modalStyles from './Modal.style.js';
import { flex, buttonStyles } from '../../styles/index.js';
/**
 * `Modal` Description
 *
 * @customElement
 * @extends LitElement
 */
class Modal extends LitElement {
  /**
   * Object property-related metadata
   */
  static get properties() {
    return { title: { type: String } };
  }

  /**
   * Function with lit-css to define (deduped) style modules
   */
  static get styles() {
    return [modalStyles, flex, buttonStyles];
  }

  /**
   * Render template in shadow dom
   */
  render() {
    return html`
      <div class="fade movie-modal__backdrop movie-modal--show"></div>
      <div class="movie-modal-container flex justify-content-center">
        <div class="movie-modal align-self-center">
          <div class="movie-modal__header flex justify-space-between">
            <div class="movie-modal__title">${this.title}</div>
            <button
              @click=${this._modalClose}
              type="button"
              aria-label="Close"
              class="btn btn-primary movie-modal__close-button"
            >
              Close
            </button>
          </div>
          <div class="movie-modal__body">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Fire a custom event `modal-close` on close button click.
   */
  _modalClose() {
    this.dispatchEvent(new CustomEvent('modal-close', {}));
  }
}

customElements.define('movie-modal', Modal);
