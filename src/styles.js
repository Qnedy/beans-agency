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

    @media (max-width: 750px){
      min-height: 320px;
      max-height: 320px;
      top: 0;
      left: 0;
      transform: translate3d(0,0,0);
      object-fit: cover;
    }

    @media (max-width: 425px){
      left: -18%;
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
      margin: 0 0 0 6vw;
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
  }
`;

export const OlenkaAboutUs = styled.img`
  height: 1170px;
`;

export const JuliaAboutUs = styled.img`
  height: 793px;
  right: -100px;
`;

export const LenaAboutUs = styled.img`
  width: 796px;
  margin-top: 15em;
`;

export const ValeraAboutUs = styled.img`
  height: 699px;
  margin-top: 15em;
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
  }

  div{
    width: 441px;

    p{
      font-family: 'Formular bold';
      font-size: 14px;
      margin-top: 6px;
    }
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
    }

    p{
      bottom: 10px;
      width: 277px;
      opacity: .5;
      font-size: 14px;
      letter-spacing: -.84px;
      line-height: 18px;
    }
  }
`;


export const PolinaAboutUs = styled.img`
  height: 873px;
  width: 525px;
`;

export const IllyaAboutUsContainer = styled.section `
  
  padding-top: 90px;
  padding-bottom: 131px;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #BADBE5;

  p{
    font-size: 14px;
    letter-spacing: -.84px;
    line-height: 18px;
    max-width: 240px;
  }
`;

export const IllyaAboutUs = styled.img`
  height: 769px;
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
    
  }

  span{
    font-size: 82px;
    font-weight: 700;
    letter-spacing: -6.56px;
    line-height: 78px;
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
  }
`;

export const ServicesItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 546px;
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
  }
`;

export const SlideTeamContainer = styled.div`
  max-height: 800px;
  width: 100%;
  display: flex;
  overflow-x: auto !important;
  overflow-y: hidden;
`;

export const LenaSlide = styled.img`
  height: 722px;
  margin-right: 20px;
`;

export const JuliaSlide = styled.img`
  height: 468px;
  margin-right: 20px;
`;

export const IllyaSlide = styled.img`
  height: 722px;
  margin-right: 20px;
`;

export const OlenkaSlide = styled.img`
  height: 468px;
  margin-right: 20px;
`;

export const VladaSlide = styled.img`
  height: 722px;
  margin-right: 20px;
`;

export const PolinaSlide = styled.img`
  height: 468px;
  margin-right: 20px;
`;

export const ChrisSlide = styled.img`
  height: 722px;
  margin-right: 20px;
`;

export const ValeraSlide = styled.img`
  height: 468px;
  margin-right: 20px;
`;

export const NazarSlide = styled.img`
  height: 722px;
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
  }
`;
