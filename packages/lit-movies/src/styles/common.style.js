import { css } from 'lit-element';
import { primary, white } from './color.style.js';

export default css`
  .text-primary {
    color: ${primary};
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid ${primary};
  }

  dd,
  em {
    color: ${white};
    line-height: 1.35em;
  }
`;
