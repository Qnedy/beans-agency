import styled from 'styled-components';

export const WeAreBeansContainer = styled.section`
  background-color: transparent;
  height: 100vh;

  video{
    position: relative;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    object-fit: cover;
    z-index: -1;

    @media (max-width: 1260px){
      height: auto;
      top: 0;
      left: 0;
      transform: translate3d(0,0,0);
      object-fit: cover;
      width: 100vw;
    }

    @media (max-width: 750px){
      min-height: 320px;
      max-height: 320px;
      top: 0;
      left: 0;
      transform: translate3d(0,0,0);
      object-fit: cover;
    }

    @media (max-width: 426px){
      top: 0;
      left: 0;
      transform: translate3d(0,0,0);
      object-fit: cover;
      width: 100vw;
    }

  }

  h1{
    font-size: 82px;
    letter-spacing: -6.56px;
    line-height: 78px;
    margin-left: -85px;
    left: 290px;
    bottom: 41px;
    position: absolute;
    font-family: 'Formular bold';
    color: #1C2042;
    transition: ease-in-out .6s;


    @media (min-width: 1850px){
      font-size: 116px;
      letter-spacing: -9.28px;
      line-height: 96px;
      left: 290px;
      bottom: 71px;
      margin-left: -9.28px;
      transition: ease-in-out .6s;
    }

    @media (max-width: 1849px){
      margin: 0 0 0 20vw;
      transition: ease-in-out .6s;
    }

    @media (max-width: 1550px){
      margin: 0;
      left: 230px;
      transition: ease-in-out .6s;
    }

    @media (max-width: 1310px){
      margin: 0 0 0 -10vw;
      transition: ease-in-out .6s;
    }

    @media (max-width: 1260px){
      left: 142px !important;
      font-size: 61px;
      letter-spacing: -4.88px;
      line-height: 50px;
      bottom: 50px;
      margin: 0 0 0 10vw;
    }

    @media (max-width: 730px){
      bottom: 46vh;
      left: 80px !important;
      font-size: 46px;
      letter-spacing: -3.68px;
      line-height: 44px;
    }

    @media (max-width: 750px){
      left: -20px !important;
    }
  }

  @media (max-width: 750px){
    max-height: 320px;
  }

`;

//FIM HOME

//INICIO ABOUT US

export const MembersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #FDE596;
  height: auto;
  padding: 180px 0 71px 271px;
  flex-wrap: wrap;


  @media (max-width: 1260px){
    padding: 128px 0 41px 142px;
  }

  @media (max-width: 426px){
    padding: 150px 20px;
    margin: 0 auto;
  }

  
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;

  span{
    font-family: 'Formular bold';
    margin-bottom: 182px;
    height: auto;
    width: 290px;
    padding-bottom: 10px;
    font-size: 40px;
    letter-spacing: -2.4px;
    line-height: 38px;
    margin-top: -4px;
    color: #1C2042;

    @media (max-width: 1550px){
      margin-bottom: 20px;
    }

    @media (max-width: 1260px){
      margin-bottom: 0px;
    }

    @media (max-width: 426px){
      font-size: 35px;
      margin-bottom: 30px;
      margin-top: 30px;
    }
  }
`;

export const OlenkaAboutUs = styled.img`
  height: 1170px;

  @media (max-width: 1550px){
    height: 823px;
  }

  @media (max-width: 1260px){
    height: 520px;
  }

  @media (max-width: 426px){
    height: 555px;
  }
`;

export const JuliaAboutUs = styled.img`
  height: 793px;
  right: -100px;

  @media (max-width: 1550px){
    height: 555px;
  }

  @media (max-width: 1260px){
    height: auto;
    width: 271px;
  }

  @media (max-width: 426px){
    width: 376px;
  }
`;

export const LenaAboutUs = styled.img`
  width: 796px;
  margin-top: 15em;

  @media (max-width: 1550px){
    width: 560px;
    margin-top: 10em;
  }

  @media (max-width: 1260px){
    height: 392px;
    width: 430px;
    margin-top: 10em;
  }

  @media (max-width: 426px){
    width: 376px;
    margin-top: 4em;
    background-size: cover;
  }
`;

export const ValeraAboutUs = styled.img`
  height: 699px;
  margin-top: 15em;

  @media (max-width: 1550px){
    height: 489px;
    margin-top: 10em;
  }

  @media (max-width: 1260px){
    height: 282px;
    margin-top: 10em;
  }

  @media (max-width: 426px){
    height: 555px;
    margin-top: 4em;
  }
`;

export const FraseContainer = styled.section`
  background-color: #F9EFF1;
  padding-top: 158px;
  padding-bottom: 86px;
  min-height: 100vh;
  padding-left: 271px;
  color: #1C2042;

  h5{
    font-size: 82px;
    font-weight: 700;
    letter-spacing: -4.92px;
    line-height: 78px;
    margin-bottom: 93px;
    font-family: 'Formular bold';

    span{
      background-color: #f9d0ca;
    }

    @media (max-width: 1260px){
      font-size: 61px;
      letter-spacing: -3.66px;
      line-height: 58px;
    }

    @media (max-width: 426px){
      font-size: 35px;
      letter-spacing: -2.1px;
      line-height: 35px;
    }
  }

  div{
    width: 441px;

    p{
      font-family: 'Formular bold';
      font-size: 14px;
      margin-top: 6px;
    }

    @media (max-width: 426px){
      width: 376px;
    }
  }

  @media (max-width: 426px){
    padding: 40px 19px;
    margin: 0 auto;
    min-height: auto;
  }
`;

export const BrifVideo = styled.section`
  background-color: transparent;
  height: 100vh;

  video{
    position: relative;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    object-fit: cover;
    z-index: -2;

    @media (max-width: 1260px){
      height: auto;
      top: 0;
      left: 0;
      transform: translate3d(0,0,0);
      object-fit: cover;
      width: 100vw;
    }

    @media (max-width: 426px){
      min-width: 50%;
      min-height: 320px;
      max-height: 320px;
      top: 0;
      left: 50%;
      transform: translate3d(-50%,0,0);
      object-fit: cover;
    }
  }

  @media (max-width: 426px){
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }
  

`;

export const TitleContainer = styled.div`
  position: absolute;
  right: 280px;
  top: 555%;
  font-size: 30px;
  letter-spacing: -2.4px;
  font-family: "Formular bold";
  line-height: 30px;

  div{
    position: relative;
    display: block;

    span{
      display: inline-block;
      vertical-align: top;
    }
  }

  @media (max-width: 1550px){
    right: 100px;
    top: 605%;
  }

  @media (max-width: 1260px){
    right: 80px;
    top: 463%;
  }

  @media (max-width: 426px){
    display: none;
  }
`;

export const TitleContainerMobile = styled.div`
  background-color: #FEDBD8;
  padding: 40px 20px;
  margin: 0 auto;
  width: 100%;
  font-size: 35px;
  letter-spacing: -2.1px;
  line-height: 35px;
  display: none;

  @media (max-width: 426px){
    display: flex;
    flex-direction: column;
  }
`;

export const PolinaAboutUsContainer = styled.section `
  height: 130vh;
  padding-top: 170px;
  padding-bottom: 117px;
  padding-left: 271px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 873px;

    h6{
      float: left;
      max-width: 374px;
      font-size: 40px;
      letter-spacing: -2.4px;
      line-height: 38px;
      margin: 0 0 87px;

      span{
        background-color: #EFD6DB;
        padding: 0 4px;
        display: inline-block;
        padding: 0 4px;
      }

      @media (max-width: 426px){
        font-size: 35px;
        letter-spacing: -2.1px;
        line-height: 35px;
        margin: 0 0 40px;
      }
    }

    p{
      bottom: 10px;
      width: 277px;
      opacity: .5;
      font-size: 14px;
      letter-spacing: -.84px;
      line-height: 18px;
    }

    @media (max-width: 1550px){
      height: 700px;
    }

    @media (max-width: 1260px){
      height: 541px;
    }

    @media (max-width: 426px){
      height: auto;
    }
  }

  @media (max-width: 1550px){
    height: 140vh;
    padding-top: 70px;
    padding-bottom: 127px;
  }

  @media (max-width: 426px){
    padding: 40px 20px;
    margin: 0 auto;
    min-height: auto;
    flex-direction: column;
    height: auto;
  }

  
`;


export const PolinaAboutUs = styled.img`
  height: 873px;
  width: 525px;

  @media (max-width: 1550px){
    height: 642px;
    width: 386px;
  }

  @media (max-width: 1260px){
    height: 482px;
    width: 290px;
  }

  @media (max-width: 426px){
    height: 570px;
    width: 376px;
    margin-top: 40px;
  }
`;

export const IllyaAboutUsContainer = styled.section `
  padding-top: 90px;
  padding-bottom: 131px;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #BADBE5;

  div{
    @media (max-width: 426px){
      order: 2;
    }
  }

  p{
    font-size: 14px;
    letter-spacing: -.84px;
    line-height: 18px;
    max-width: 240px;

    @media (max-width: 426px){
      max-width: 346px;
      position: relative;
      margin-bottom: 20px;
      opacity: .5;
      order: 1;
    }
  }

  @media (max-width: 426px){
    flex-direction: column;
    padding: 40px 20px;
    margin: 0 auto;
  }

  
`;

export const IllyaAboutUs = styled.img`
  height: 769px;

  @media (max-width: 1550px){
    height: 600px;
  }

  @media (max-width: 1260px){
    height: 468px;
  }

  @media (max-width: 426px){
    width: 376px;
    height: 354px;
  }
`;

// FIM ABOUT US


// INICIO CASES

export const CasesContainer = styled.section`
  padding-top: 177px;
  padding-bottom: 170px;
  padding-left: 271px;
  height: 120vh;


  h5{
    font-size: 82px;
    font-weight: 700;
    letter-spacing: -4.92px;
    line-height: 78px;
    margin-bottom: 200px;

    @media (max-width: 426px){
      font-size: 46px;
      margin-bottom: 38px;
    }
  }

  @media (max-width: 1550px){
    padding-top: 100px;
    padding-bottom: 130px;
    padding-left: 271px;
    height: 160vh;
  }

  @media (max-width: 1260px){
    padding-top: 124px;
    padding-bottom: 68px;
    padding-left: 142px;
  }

  @media (max-width: 426px){
    padding: 40px 20px;
    margin: 0 auto;
    height: auto;
  }
`;

// FIM CASES 

// INICIO HOW HE DO

export const HowContainer = styled.section`
  overflow-x: hidden;
  
  video{
    height: 100%;
    position: relative;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    top: 0;
    left: 0 !important;
    transform: translate3d(0,0,0);
    object-fit: cover;
    z-index: -3;

    @media (max-width: 1550px){
      height: 100vh;
      top: 0;
      left: 50%;
      transform: translate3d(0,0,0);
      object-fit: cover;
      width: 200vw;
    }
    

    @media (max-width: 1260px){
      height: auto;
      top: 0;
      left: 0;
      transform: translate3d(0,0,0);
      object-fit: cover;
      width: 200vw;
    }

    @media (max-width: 426px){
      min-width: 50%;
      min-height: 50%;
      max-height: 50%;
      top: 0;
      left: 50%;
      transform: translate3d(-25%,0,0);
      object-fit: cover;
    }
  }

  span{
    font-size: 82px;
    font-weight: 700;
    letter-spacing: -6.56px;
    line-height: 78px;
  }

  @media (max-width: 426px){
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  left: 271px;
  position: absolute;
  top: 950vh;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p{
    width: 106px;
    font-size: 16px;
  }

  @media (max-width: 1550px){
    top: 1080vh;
  }

  @media (max-width: 1260px){
    left: 160px;
    top: 825vh;
    font-size: 61px;
  }

  @media (max-width: 426px){
    display: none;
  }
`;

export const TextContainerMobile = styled.div`
  display: none;
  background-color: #D9E3F9;
  padding: 40px 20px;
  margin: 0 auto;
  width: 100%;
  font-size: 35px;
  letter-spacing: -2.1px;
  line-height: 35px;

  @media (max-width: 426px){
    display: flex;
    flex-direction: column;
  }
`;

// FIM HOW HE DO

// INICIO OUR SERVICES

export const OurServicesContainer = styled.section`
  height: 150vh;
  background-color: #1C203E;
  padding-top: 177px;
  padding-bottom: 170px;
  padding-left: 271px;

  h5{
    font-size: 82px;
    font-weight: 700;
    letter-spacing: -4.92px;
    line-height: 78px;
    margin-bottom: 200px;
    color: #FFFFFF;
    width: 293px;

    @media (max-width: 1550px){
      margin-bottom: 40px;
    }

    @media (max-width: 1260px){
      font-size: 61px;
      letter-spacing: -4.88px;
      line-height: 58px;

      margin-bottom: 20px;
    }

    @media (max-width: 426px){
      font-size: 46px;
      width: 164px;
    }
  }

  @media (max-width: 1550px){
    padding-bottom: 34px;
    height: 170vh;
  }

  @media (max-width: 1260px){
    padding-top: 124px;
    padding-bottom: 68px;
    padding-left: 142px;
  }

  @media (max-width: 426px){
    padding: 40px 20px;
    margin: 0 auto;
    height: auto;
  }
`;

export const ServicesItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 546px;

  @media (max-width: 1550px){
    padding-left: 280px;
  }

  @media (max-width: 1260px){
    padding-left: 300px;
  }

  @media (max-width: 426px){
    flex-direction: column;
    padding-left: 0px;
  }
`;

export const ServicesItem = styled.div`
  color: #FFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 145px;
  width: 50%;
  padding-right: 10%;

  div{
    text-align: left;

    svg{
      height: 50px;
      left: 0;
    }
  }

  span{
    font-size: 24px;
    letter-spacing: -1.44px;
    line-height: 25px;
    margin: 0 0 17px;
  }

  p{
    opacity: .5;
    font-size: 14px;
    letter-spacing: -.84px;
    line-height: 18px;
  }

  @media (max-width: 1550px){
    margin-bottom: 80px;
  }

  @media (max-width: 1260px){
    margin-bottom: 115px;
  }

  @media (max-width: 426px){
    width: 90%;
    margin-bottom: 60px;
  }

`;

// FIM OUR SERVICES

// INICIO TEAM

export const TeamContainer = styled.section`
  background-color: #FFED8E;
  height: auto;
  z-index: -5;
  padding-top: 177px;
  padding-bottom: 170px;
  padding-left: 271px;

  h5{
    color: #1C2042;
    margin-bottom: 115px;
    max-width: 543px;
    font-size: 82px;
    letter-spacing: -6.56px;
    line-height: 78px;
    min-height: 237px;

    @media (max-width: 1260px){
      font-size: 61px;
      letter-spacing: -4.88px;
      line-height: 58px;

      margin-bottom: 20px;
      width: 460px;
    }

    @media (max-width: 426px){
      font-size: 46px;
      max-width: 310px;
      margin-bottom: 40px;
      min-height: auto;
    }
  }

  @media (max-width: 1260px){
    padding-top: 124px;
    padding-bottom: 68px;
    padding-left: 142px;
  }

  @media (max-width: 426px){
    padding: 40px 20px;
    margin: 0 auto;
    height: auto;
  }
`;

export const SlideTeamContainer = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  overflow-x: auto !important;
  overflow-y: hidden;

  @media (max-width: 1550px){
    height: 590px;
  }

  @media (max-width: 1260px){
    align-items: center;
  }

  @media (max-width: 426px){
    height: auto;
  }
`;

export const LenaSlide = styled.img`
  height: 722px;
  margin-right: 20px;

  @media (max-width: 1550px){
    height: 505px;
  }

  @media (max-width: 1260px){
    height: 370px;
  }
`;

export const JuliaSlide = styled.img`
  height: 468px;
  margin-right: 20px;

  @media (max-width: 1550px){
    height: 328px;
  }

  @media (max-width: 1260px){
    height: 242px;
  }
`;

export const IllyaSlide = styled.img`
  height: 722px;
  margin-right: 20px;

  @media (max-width: 1550px){
    height: 505px;
  }

  @media (max-width: 1260px){
    height: 370px;
  }
`;

export const OlenkaSlide = styled.img`
  height: 468px;
  margin-right: 20px;

  @media (max-width: 1550px){
    height: 328px;
  }

  @media (max-width: 1260px){
    height: 242px;
  }
`;

export const VladaSlide = styled.img`
  height: 722px;
  margin-right: 20px;

  @media (max-width: 1550px){
    height: 505px;
  }

  @media (max-width: 1260px){
    height: 370px;
  }
`;

export const PolinaSlide = styled.img`
  height: 468px;
  margin-right: 20px;

  @media (max-width: 1550px){
    height: 328px;
  }

  @media (max-width: 1260px){
    height: 242px;
  }
`;

export const ChrisSlide = styled.img`
  height: 722px;
  margin-right: 20px;

  @media (max-width: 1550px){
    height: 505px;
  }

  @media (max-width: 1260px){
    height: 370px;
  }
`;

export const ValeraSlide = styled.img`
  height: 468px;
  margin-right: 20px;

  @media (max-width: 1550px){
    height: 328px;
  }

  @media (max-width: 1260px){
    height: 242px;
  }
`;

export const NazarSlide = styled.img`
  height: 722px;

  @media (max-width: 1550px){
    height: 505px;
  }

  @media (max-width: 1260px){
    height: 370px;
  }
`;

export const TeamFooterText = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 100px;

  div{
    width: 360px;

    p{
      font-size: 16px;
    }

    span{
      font-size: 12px;
      opacity: .5;
      margin-top: 35px;
    }

    h6{
      font-size: 40px;
      letter-spacing: -2.4px;
      line-height: 38px;
    }

    &:first-child{
      margin: 0 0 59px;
    }
  }

  @media (max-width: 426px){
    flex-direction: column;
  }
`;


export const HelloVideo = styled.section`
  overflow-x: hidden;

  video{
    position: relative;
    min-width: 100%;
    min-height: 90%;
    max-height: 90%;
    object-fit: cover;
    z-index: -4;

    @media (max-width: 1550px){
      height: 100vh;
    }

    @media (max-width: 1260px){
      height: auto;
      top: 0;
      left: 0;
      transform: translate3d(0,0,0);
      object-fit: cover;
      width: 100vw;
    }

    @media (max-width: 426px){
      top: 0;
      left: 0;
      height: 437px;
      transform: translate3d(0,0,0);
      object-fit: cover;
    }
  }
`;

// FIM TEAM


// INICIO FOOTER

export const FooterContainer = styled.footer`
  background-color: #1C2042;
  height: 75vh;
  display: flex;
  justify-content: space-between;
  padding-top: 87px;
  padding-bottom: 248px;
  padding-left: 271px;
  flex-direction: column;

  div{

    span{
      color: #FFFF;
      font-size: 40px;
    }
  }

  @media (max-width: 1550px){
    height: 86vh;
    padding-top: 47px;
    padding-bottom: 148px;
  }

  @media (max-width: 1260px){
    padding-left: 142px;
    padding-top: 0;
    padding-bottom: 0;
    height: 60vh;
  }

  @media (max-width: 426px){
    height: auto;
    padding: 40px 20px;
    margin: 0 auto;
  }
`;

export const BriefSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1550px){
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (max-width: 1260px){
    padding-top: 61px;
    padding-bottom: 153px;
  }

  @media (max-width: 426px){
    flex-direction: column;
    padding-top: 61px;
    padding-bottom: 90px;
  }
`;

export const BriefContact = styled.div`
  width: 365px;
  padding-top: 4em;

  @media (max-width: 1260px){
    padding-top: 0;
  }
`;

export const Social = styled.div`
  color: #FFFF;
  font-size: 24px;
  max-width: 183px;
  margin-right: 15em;
  padding-top: 4em;

  div{
    p{
      font-size: 12px;
      margin: 40px 0 25px 0;
    }

    div{
      svg{
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 1550px){
    padding-top: 2em;
  }

  @media (max-width: 1260px){
    padding-top: 0;
    margin-right: 5em;
  }

  @media (max-width: 1260px){
    padding-top: 2em;
  }
`;

export const Copy = styled.div`
  font-size: 12px;
  color: #FFFF;
  opacity: .5;
  display: flex;
  justify-content: space-between; 
  margin-top: 20em;

  p{
    width: 365px;

    span{
      font-size: 12px;
      color: #FFFF;
      opacity: 1;
    }
  }

  &:last-child{
    margin-right: 15em;

    @media (max-width: 1260px){
      margin-right: 0;
      
    }
  }

  @media (max-width: 1550px){
    margin-top: 11em;
  }

  @media (max-width: 1260px){
    margin-top: 0em;
  }
`;