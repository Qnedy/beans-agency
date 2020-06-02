import React from 'react';

import GlobalStyle from './globalStyles';
import * as styles from './styles';

import SuperiorNav from './components/SuperiorNav';

function App() {
  return (
    <>
      <GlobalStyle />
      <SuperiorNav />
      <styles.WeAreBeansContainer />
    </>
  );
}

export default App;
