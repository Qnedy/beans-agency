import React from 'react';

import GlobalStyle from './globalStyles';
import * as styles from './styles';

import UpNav from './components/UpNav';
import DownNav from './components/DownNav';

function App() {
  return (
    <>
      <GlobalStyle />
      <UpNav />
      <DownNav />
      <styles.WeAreBeansContainer />
    </>
  );
}

export default App;
