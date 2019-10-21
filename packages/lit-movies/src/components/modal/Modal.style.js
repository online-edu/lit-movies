import { css } from 'lit-element';
import { white, black, modalBorder, primary } from '../../styles/color.style.js';

export default css`
  .movie-modal {
    position: relative;
    width: 100%;
    background-color: ${black};
    border: 1px solid ${modalBorder};
    border-radius: 12px;
    outline: 0;
    z-index: 1050;
    max-width: 800px;
  }

  .movie-modal-container {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
  }

  .movie-modal--show {
    opacity: 0.8;
  }

  .movie-modal__header {
    align-items: flex-start;
    padding: 0.25rem 1rem;
    border-bottom: 1px solid ${primary};
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .movie-modal__title {
    font-size: 1.5rem;
    color: ${white};
    padding-top: 0.85rem;
  }

  .movie-modal__close-button {
    margin: 0.5rem 0;
  }

  .movie-modal__body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
  }

  .movie-modal__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: ${white};
    transition: opacity 0.15s linear;
  }
`;
