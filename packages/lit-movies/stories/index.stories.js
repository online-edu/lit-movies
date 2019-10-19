import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { LitMovies } from '../src/LitMovies.js';
import '../lit-movies.js';

storiesOf('lit-movies', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(LitMovies))
  .add(
    'Alternative Title',
    () => html`
      <lit-movies .title=${'Something else'}></lit-movies>
    `,
  );
