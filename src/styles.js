import styled from 'styled-components';

export const WeAreBeansContainer = styled.section`
  background-color: transparent;
  height: 100vh;

  video{
    position: fixed;
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
