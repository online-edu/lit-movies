import { css } from 'lit-element';

export default css`
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col-33 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  .col-66 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }

  .col-75 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-100 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .align-items-center {
    align-items: center;
  }

  .align-self-center {
    align-self: center;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .justify-content-center {
    justify-content: center;
  }

  .justify-space-between {
    justify-content: space-between;
  }
`;
