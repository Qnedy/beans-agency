import React from 'react';

import GlobalStyle from './globalStyles';
import * as styles from './styles';

import UpNav from './components/UpNav';
import DownNav from './components/DownNav';
import NamePost from './components/NamePost';

import mainVideo from './assets/Main-Page-1.mp4';

import Olenka from './assets/Olenka-1.webp';
import Julia from './assets/Yulya-1.webp';
import Lena from './assets/Lena.-webp.webp';
import Valera from './assets/Valera-1.webp';

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

      <styles.AboutUsContainer>

        <styles.Member>
          <styles.OlenkaAboutUs src={Olenka} alt="Olenka" />
          <NamePost name="Olenka" post="Account manager" />
        </styles.Member>

        <styles.Member>
          <span>One bean is good, but eight ones make a pod.</span>
          <styles.JuliaAboutUs src={Julia} alt="Julia" />
          <NamePost name="Julia" post="Co-founder" />
        </styles.Member>

        <styles.Member>
          <styles.LenaAboutUs src={Lena} alt="Lena" />
          <NamePost name="Lena" post="Co-founder" />
        </styles.Member>

        <styles.Member>
          <styles.ValeraAboutUs src={Valera} alt="Valera" />
          <NamePost name="Valera" post="Creative copywriter" />
        </styles.Member>
        
      </styles.AboutUsContainer>
    </>
  );
}

export default App;
