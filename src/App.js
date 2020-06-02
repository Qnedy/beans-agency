import React from 'react';

import GlobalStyle from './globalStyles';
import * as styles from './styles';

import UpNav from './components/UpNav';
import DownNav from './components/DownNav';

import mainVideo from './assets/Main-Page-1.mp4';

function App() {
  return (
    <>
      <GlobalStyle />
      <UpNav />
      <DownNav />
      <styles.WeAreBeansContainer>
        <h1>We are <br /> Beans Agency®</h1>
        <video autoPlay loop>
          <source src={mainVideo} type="video/mp4"/>
        </video>  
      </styles.WeAreBeansContainer>
    </>
  );
}

export default App;
