import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { LitMoviePoster } from '../src/LitMoviePoster.js';
import '../lit-movie-poster.js';

storiesOf('lit-movie-poster', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(LitMoviePoster))
  .add(
    'With Poster',
    () => html`
      <movie-poster
        url=${'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'}
      ></movie-poster>
    `,
  );
