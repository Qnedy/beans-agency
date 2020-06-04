import React from 'react';

import GlobalStyle from './globalStyles';
import * as styles from './styles';

import UpNav from './components/UpNav';
import DownNav from './components/DownNav';
import NamePost from './components/NamePost';
import ActionsBtn from './components/ActionsBtn';
import CaseItem from './components/CaseItem';

import mainVideo from './assets/Main-Page-1.mp4';
import brifVideo from './assets/Brif-1.mp4';
import carVideo from './assets/car-1.mp4';

import Olenka from './assets/Olenka-1.webp';
import Julia from './assets/Yulya-1.webp';
import Lena from './assets/Lena.-webp.webp';
import Valera from './assets/Valera-1.webp';
import Polina from './assets/Vlada-1.jpg';
import Illya from './assets/Illya-1.jpg';

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

      <styles.MembersContainer>

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
      </styles.MembersContainer>
      <styles.FraseContainer>
        <h5>
          Big business means <br />
          taking the risk, <br />
          although not all <br />
          business owners <br />
          are ready for this
        </h5>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="13" viewBox="0 0 31 13"> <g> <g> <path fill="#1c2042"
  d="M3.872.187C1.526.187.008 2.519 0 4.435c-.015 3.525 7.053 7.876 7.053 7.876s7.07-4.351 7.055-7.876C14.1 2.52 12.581.187 10.235.187c-1.076 0-2.433.701-3.182 1.36C6.305.889 4.948.188 3.872.188z"/> </g> <g> <path fill="#e8a4a5"
  d="M20.22.187c-2.346 0-3.863 2.332-3.872 4.248-.015 3.525 7.054 7.876 7.054 7.876s7.07-4.351 7.055-7.876C30.448 2.52 28.93.187 26.584.187c-1.076 0-2.434.701-3.182 1.36-.749-.659-2.106-1.36-3.182-1.36z"/> </g> </g> </svg>

          <p>Your brand will be loved at first sight, spoken of and even slightly envied as they are not like you.</p>
        </div>
        
      </styles.FraseContainer>

      <styles.BrifVideo>
        <styles.TitleContainer>
          <div>
            <span>Do you want to be</span>
          </div>
          <div>
            <span>a hero brand?</span>
          </div>
          <ActionsBtn textBtn="Here is a brief" type="small" color="#f1d8dd"/>
        </styles.TitleContainer>

        <video autoPlay loop>
          <source src={brifVideo} type="video/mp4"/>
        </video>

      </styles.BrifVideo>

      <styles.PolinaAboutUsContainer>
        <div>
          <h6>
            We are here to start the journey of business decisions or brands up to the world through a completely new, <br />
            <span>sometimes <br /> unknown and risky</span> <br />
            road
          </h6>

          <p>You know, only the complete willingness to give up everything customary will provide a desired result.</p>
        </div>

        <styles.Member>
          <styles.PolinaAboutUs src={Polina} alt="Polina" />
          <NamePost name="Polina" post="Motion designer" />
        </styles.Member>
      </styles.PolinaAboutUsContainer>

      <styles.IllyaAboutUsContainer>
        <styles.Member>
          <styles.IllyaAboutUs src={Illya} alt="Illya" />
          <NamePost name="Illya" post="Creative director" />
        </styles.Member>

        <p>
          We have a superpower called Full of beans, 
          and that is enough for us to create an adventurous, 
          exciting, inspiring, funny, touching – miscellaneous, 
          in short, sometimes something out of notch, 
          but definitely touches, stands out and inspires with confidence
        </p>
      </styles.IllyaAboutUsContainer>

      <styles.CasesContainer>
        <h5>Cases</h5>

        <div>
          <CaseItem case="Kohavynka" what="identity, campaign" category="health aids"/>
          <CaseItem case="Avalon" what="full cycle" category="real estate"/>
          <CaseItem case="TONNY" what="branding, design" category="building"/>
          <CaseItem case="Mini Water Polo" what="branding, design" category="sport"/>
          <CaseItem case="T.B.fruit" what="campaign" category="manufactory"/>
        </div>
      </styles.CasesContainer>

      <styles.HowContainer>
        <styles.TextContainer>
          <div>
            <span>How we do</span>
            <ActionsBtn textBtn="this?" type="large" color="#D1E0F5"/>
          </div>

          <p>We believe in six efficient methods.</p>
        </styles.TextContainer>
        

        <video autoPlay loop>
          <source src={carVideo} type="video/mp4"/>
        </video>
      </styles.HowContainer>
    </>
  );
}

export default App;
