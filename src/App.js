import React from 'react';

import GlobalStyle from './globalStyles';
import * as styles from './styles';

import UpNav from './components/UpNav';
import DownNav from './components/DownNav';
import LateralNav from './components/LateralNav';
import NamePost from './components/NamePost';
import ActionsBtn from './components/ActionsBtn';
import CaseItem from './components/CaseItem';

import mainVideo from './assets/Main-Page-1.mp4';
import brifVideo from './assets/Brif-1.mp4';
import carVideo from './assets/car-1.mp4';
import helloVideo from './assets/Hello-1.mp4';

import Polina from './assets/Vlada-1.jpg';
import Illya from './assets/Illya-1.jpg';

//slide TeamContainer
import LenaSlide from './assets/LenaSlide.jpg';
import JuliaSlide from './assets/YulyaSlide.jpg';
import IllyaSlide from './assets/IllyaSlide.jpg';
import OlenkaSlide from './assets/OlenkaSlide.jpg';
import VladaSlide from './assets/VladaSlide.jpg';
import PolinaSlide from './assets/PolinaSlide.jpg';
import ChrisSlide from './assets/ChrisSlide.jpg';
import ValeraSlide from './assets/ValeraSlide.jpg';
import NazarSlide from './assets/Nazar.jpg';

import { GrFacebookOption, GrInstagram } from 'react-icons/gr';


function App() {
  return (
    <>
      <GlobalStyle />
      
      <UpNav />
      <LateralNav />
      <DownNav />
      
      <styles.WeAreBeansContainer>
        <h1>We are <br /> Beans Agency®</h1>
        <video autoPlay="autoPlay" loop>
          <source src="https://beans.agency/wp-content/uploads/2020/01/Main-Page-1.mp4" type="video/mp4"/>
        </video>  
      </styles.WeAreBeansContainer>

      <styles.MembersContainer>

        <styles.Member>
          <styles.OlenkaAboutUs src="https://beans.agency/wp-content/uploads/2019/11/Olenka-1.jpg" alt="Olenka" />
          <NamePost name="Olenka" post="Account manager" />
        </styles.Member>

        <styles.Member>
          <span>One bean is good, but eight ones make a pod.</span>
          <styles.JuliaAboutUs src="https://beans.agency/wp-content/uploads/2019/11/Yulya-1.jpg" alt="Julia" />
          <NamePost name="Julia" post="Co-founder" />
        </styles.Member>

        <styles.Member>
          <styles.LenaAboutUs src="https://beans.agency/wp-content/uploads/2019/11/Lena.jpeg.jpg" alt="Lena" />
          <NamePost name="Lena" post="Co-founder" />
        </styles.Member>

        <styles.Member>
          <styles.ValeraAboutUs src="https://beans.agency/wp-content/uploads/2019/11/Valera-1.jpg" alt="Valera" />
          <NamePost name="Valera" post="Creative copywriter" />
        </styles.Member>
      </styles.MembersContainer>
      <styles.FraseContainer>
        <h5>
          Big business means <br />
          <span>taking the risk,</span> <br />
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

        <styles.TitleContainerMobile>
          <div>
            <span>Do you want to be</span>
          </div>
          <div>
            <span>a hero brand?</span>
          </div>
          <ActionsBtn textBtn="Here is a brief" type="small" color="#f1d8dd"/>
        </styles.TitleContainerMobile>

        <video autoPlay="autoPlay" loop>
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
        <div>
          <styles.Member>
            <styles.IllyaAboutUs src={Illya} alt="Illya" />
            <NamePost name="Illya" post="Creative director" />
          </styles.Member>
        </div>

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

        <styles.TextContainerMobile>
          <div>
            <span>How we do</span>
            <ActionsBtn textBtn="this?" type="large" color="#D1E0F5"/>
          </div>

          <p>We believe in six efficient methods.</p>
        </styles.TextContainerMobile>
        

        <video autoPlay="autoPlay" loop>
          <source src={carVideo} type="video/mp4"/>
        </video>
      </styles.HowContainer>

      <styles.OurServicesContainer>

        <h5>Our services</h5>

        <styles.ServicesItemsContainer>
          <styles.ServicesItem>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 144" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_6"><rect width="168" height="144" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_8"><path d="M0,0 L144,0 L144,144 L0,144z"></path></clipPath></defs><g clipPath="url(#__lottie_element_6)"><g clipPath="url(#__lottie_element_8)" transform="matrix(1,0,0,1,12,0)" opacity="1"><g transform="matrix(1,0,0,1,-0.40000152587890625,-0.1829986572265625)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,237,142)" fillOpacity="1" d=" M77.63999938964844,0 C77.63999938964844,0 72,0 72,0 C32.33399963378906,0 0,32.33399963378906 0,72 C0,93.61900329589844 9.588000297546387,113.9219970703125 26.319000244140625,127.6449966430664 C39.10200119018555,138.1719970703125 55.457000732421875,144 72,144 C111.66600036621094,144 144,111.66600036621094 144,72 C144,72 144,66.36000061035156 144,66.36000061035156 C144,66.36000061035156 77.63999938964844,66.36000061035156 77.63999938964844,66.36000061035156 C77.63999938964844,66.36000061035156 77.63999938964844,0 77.63999938964844,0z"></path></g></g><g transform="matrix(1,0,0,1,89.2459945678711,-0.18799972534179688)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(233,170,182)" fillOpacity="1" d=" M4.579999923706055,0 C4.579999923706055,0 0,0 0,0 C0,0 0,54.354000091552734 0,54.354000091552734 C0,54.354000091552734 54.354000091552734,54.354000091552734 54.354000091552734,54.354000091552734 C54.354000091552734,54.354000091552734 54.354000091552734,49.77299880981445 54.354000091552734,49.77299880981445 C54.354000091552734,22.291000366210938 32.0620002746582,0 4.579999923706055,0z"></path></g></g></g></g></svg>
            </div>
            <span>Market analysis</span>
            <p>
              We will examine in detail what competitors and brands talk about
              within your category.
            </p>
          </styles.ServicesItem>

          <styles.ServicesItem>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 156" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_17"><rect width="158" height="156" x="0" y="0"></rect></clipPath></defs><g clipPath="url(#__lottie_element_17)"><g transform="matrix(-1,0,0,-1,118,117)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(233,170,182)" fillOpacity="1" d=" M33,-33 C33,-33 33,33 33,33 C33,33 -33,33 -33,33 C-33,33 -33,-33 -33,-33 C-33,-33 33,-33 33,-33z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(-1,0,0,-1,118,117)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,237,142)" fillOpacity="1" d=" M0,-30 C16.55699920654297,-30 30,-16.55699920654297 30,0 C30,16.55699920654297 16.55699920654297,30 0,30 C-16.55699920654297,30 -30,16.55699920654297 -30,0 C-30,-16.55699920654297 -16.55699920654297,-30 0,-30z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(-1,0,0,-1,40,117)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,237,142)" fillOpacity="1" d=" M0,-33 C18.21269989013672,-33 33,-18.21269989013672 33,0 C33,18.21269989013672 18.21269989013672,33 0,33 C-18.21269989013672,33 -33,18.21269989013672 -33,0 C-33,-18.21269989013672 -18.21269989013672,-33 0,-33z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(-1,0,0,-1,40,39)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,237,142)" fillOpacity="1" d=" M0,-33 C18.21269989013672,-33 33,-18.21269989013672 33,0 C33,18.21269989013672 18.21269989013672,33 0,33 C-18.21269989013672,33 -33,18.21269989013672 -33,0 C-33,-18.21269989013672 -18.21269989013672,-33 0,-33z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g></g></svg>
            </div>
            <span>Strategy</span>
            <p>
              Strategy is a forward-looking plan for your brand's behavior, which will make its history. We need strategy to be different
            </p>
          </styles.ServicesItem>

          <styles.ServicesItem>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214 144" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_30"><rect width="214" height="144" x="0" y="0"></rect></clipPath></defs><g clipPath="url(#__lottie_element_30)"><g transform="matrix(1,0,0,1,37,72)" opacity="1" ><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,237,142)" fillOpacity="1" d=" M16.5,-69 C16.5,-69 16.5,69 16.5,69 C16.5,69 -16.5,69 -16.5,69 C-16.5,69 -16.5,-69 -16.5,-69 C-16.5,-69 16.5,-69 16.5,-69z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(1,0,0,1,82,72)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,237,142)" fillOpacity="1" d=" M16.5,-69 C16.5,-69 16.5,69 16.5,69 C16.5,69 -16.5,69 -16.5,69 C-16.5,69 -16.5,-69 -16.5,-69 C-16.5,-69 16.5,-69 16.5,-69z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(1,0,0,1,127,72)" opacity="1" ><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,237,142)" fillOpacity="1" d=" M16.5,-69 C16.5,-69 16.5,69 16.5,69 C16.5,69 -16.5,69 -16.5,69 C-16.5,69 -16.5,-69 -16.5,-69 C-16.5,-69 16.5,-69 16.5,-69z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(0.9659258127212524,0.258819043636322,-0.258819043636322,0.9659258127212524,184,90.0009994506836)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(233,170,182)" fillOpacity="1" d=" M16.5,-51 C16.5,-51 16.5,51 16.5,51 C16.5,51 -16.5,51 -16.5,51 C-16.5,51 -16.5,-51 -16.5,-51 C-16.5,-51 16.5,-51 16.5,-51z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g></g></svg>
            </div>
            <span>Design</span>
            <p>
              It’s time to wrap it up brightly.
            </p>
          </styles.ServicesItem>

          <styles.ServicesItem>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_43"><rect width="144" height="144" x="0" y="0"></rect></clipPath></defs><g clipPath="url(#__lottie_element_43)"><g transform="matrix(1,0,0,1,72,72)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,237,142)" fillOpacity="1" d=" M0,-72 C39.73680114746094,-72 72,-39.73680114746094 72,0 C72,39.73680114746094 39.73680114746094,72 0,72 C-39.73680114746094,72 -72,39.73680114746094 -72,0 C-72,-39.73680114746094 -39.73680114746094,-72 0,-72z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(0.999996542930603,0.0026303583290427923,-0.0026303583290427923,0.999996542930603,97.59857177734375,34.567161560058594)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(233,170,182)" fillOpacity="1" d=" M0,-25.5 C14.073450088500977,-25.5 25.5,-14.073450088500977 25.5,0 C25.5,14.073450088500977 14.073450088500977,25.5 0,25.5 C-14.073450088500977,25.5 -25.5,14.073450088500977 -25.5,0 C-25.5,-14.073450088500977 -14.073450088500977,-25.5 0,-25.5z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g></g></svg>
            </div>
            <span>Creation of advertising content</span>
            <p>
              Be sure, we can do cool ad. It will be
              not just cool, but one that will enhance the brand's immunity and personality
            </p>
          </styles.ServicesItem>

          <styles.ServicesItem>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163 163" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_50"><rect width="163" height="163" x="0" y="0"></rect></clipPath></defs><g clipPath="url(#__lottie_element_50)"><g transform="matrix(-1,0,0,-1,38,125)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,237,142)" fillOpacity="1" d=" M28.5,-28.5 C28.5,-28.5 28.5,28.5 28.5,28.5 C28.5,28.5 -28.5,28.5 -28.5,28.5 C-28.5,28.5 -28.5,-28.5 -28.5,-28.5 C-28.5,-28.5 28.5,-28.5 28.5,-28.5z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(-1,0,0,-1,116,38)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,237,142)" fillOpacity="1" d=" M0,-28.5 C15.72914981842041,-28.5 28.5,-15.72914981842041 28.5,0 C28.5,15.72914981842041 15.72914981842041,28.5 0,28.5 C-15.72914981842041,28.5 -28.5,15.72914981842041 -28.5,0 C-28.5,-15.72914981842041 -15.72914981842041,-28.5 0,-28.5z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(1,0,0,1,78.5,96.5)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(233,170,182)" fillOpacity="1" d=" M37.5,0 C37.5,0 75,57 75,57 C75,57 0,57 0,57 C0,57 37.5,0 37.5,0z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g></g></svg>
            </div>
            <span>Marketing management</span>
            <p>
              We’ll help you realize everything you’ve planned.
            </p>
          </styles.ServicesItem>
        </styles.ServicesItemsContainer>
      </styles.OurServicesContainer>

      <styles.TeamContainer>
        <h5>Bean for bean is a friend, partner and a fellow.</h5>


        <styles.SlideTeamContainer>
          <styles.Member>
            <styles.LenaSlide src={LenaSlide} alt="LenaSlide" />
            <NamePost name="Lena" post="Co-founder" />
          </styles.Member>

          <styles.Member>
            <styles.JuliaSlide src={JuliaSlide} alt="JuliaSlide" />
            <NamePost name="Julia" post="Co-founder" />
          </styles.Member>

          <styles.Member>
            <styles.IllyaSlide src={IllyaSlide} alt="IllyaSlide" />
            <NamePost name="Illya" post="Creative director" />
          </styles.Member>

          <styles.Member>
            <styles.OlenkaSlide src={OlenkaSlide} alt="OlenkaSlide" />
            <NamePost name="Olenka" post="Account manager" />
          </styles.Member>

          <styles.Member>
            <styles.VladaSlide src={VladaSlide} alt="VladaSlide" />
            <NamePost name="Vlada" post="Creative copywriter" />
          </styles.Member>

          <styles.Member>
            <styles.PolinaSlide src={PolinaSlide} alt="PolinaSlide" />
            <NamePost name="Polina" post="Motion designer" />
          </styles.Member>

          <styles.Member>
            <styles.ChrisSlide src={ChrisSlide} alt="ChrisSlide" />
            <NamePost name="Chris" post="SMM" />
          </styles.Member>

          <styles.Member>
            <styles.ValeraSlide src={ValeraSlide} alt="ValeraSlide" />
            <NamePost name="Valera" post="Creative copywriter" />
          </styles.Member>

          <styles.Member>
            <styles.NazarSlide src={NazarSlide} alt="NazarSlide" />
            <NamePost name="Nazar" post="Motion designer" />
          </styles.Member>
        </styles.SlideTeamContainer>

        <styles.TeamFooterText>
          <div>
            <p>Bob Marley , Bob De Niro, Bob Dilan, Bob Downey, Bob Zemeckis, Bob Rodriguez, Bob Opengamer, Bob Miles, Bob Boyle, Bob Fisher</p>

            <span>Famous Beans</span>
          </div>

          <div>
            <h6>
              We <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21"> <g> <g> <path fill="#1c2042" d="M6.64.188c-4.023 0-6.626 4-6.64 7.286-.026 6.044 12.097 13.508 12.097 13.508S24.222 13.52 24.196 7.474C24.181 4.187 21.577.188 17.554.188c-1.845 0-4.173 1.202-5.457 2.334C10.813 1.39 8.485.188 6.64.188z"></path> </g> </g> </svg> <br />
              what we do
            </h6>
          </div>
          
        </styles.TeamFooterText>
      </styles.TeamContainer>

      <styles.HelloVideo>
        <video autoPlay="autoPlay" loop>
          <source src={helloVideo} type="video/mp4"/>
        </video>
      </styles.HelloVideo>

      <styles.FooterContainer>
        <styles.BriefSocialContainer>
          <styles.BriefContact>
            <span>
              +380961011555
              info@beans.agency
              Or
            </span>
            <ActionsBtn textBtn="here is a brief" type="medium" color="#1c2042"/>
          </styles.BriefContact>

          <styles.Social>
            <p>Kulparkivska 200a, Lviv Futura Hub</p>

            <div>
              <p>Follow us</p>
              <div>
                <GrFacebookOption color="#FFFF"/>
                <GrInstagram color="#FFFF"/>
              </div>
            </div>
          </styles.Social>
        </styles.BriefSocialContainer>

        <styles.Copy>
          <p>All rights reserved 2020 © Beans Agency</p>
          <p>Made by <span>dops.digital</span></p>
        </styles.Copy>
      </styles.FooterContainer>
    </>
  );
}

export default App;
