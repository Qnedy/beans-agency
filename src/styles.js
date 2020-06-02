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
  }

  h1{
    font-size: 116px;
    letter-spacing: -9.28px;
    line-height: 96px;
    left: 290px;
    bottom: 71px;
    margin-left: -9.28px;
    position: absolute;
    font-family: 'Formular bold';
    color: #1C2042;


    @media (max-width: 1441px){
      bottom: 41px;
      left: 248px;
      font-size: 82px;
      letter-spacing: -6.56px;
      line-height: 78px;
      margin-left: -6.56px;
    }

    @media (max-width: 1025px){
      bottom: 50px;
      left: 142px;
      font-size: 61px;
      letter-spacing: -4.88px;
      line-height: 50px;
      margin-left: 0px;
    }
  }
`;