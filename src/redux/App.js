import React, { Fragment } from 'react';

import Main from './containers/main';
import Title from './components/title/title';

const App = () => (
  <Fragment>
    <Title title="Sport App" />
    <Main />
  </Fragment>
);

export default App;
