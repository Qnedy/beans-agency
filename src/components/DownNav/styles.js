import styled from 'styled-components';

export const DownNavContainer = styled.div`
  padding: 0 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  background: transparent;
  width: 100%;
  position: fixed;
  bottom: 55px;
  opacity: 0;
  transform: rotate(-6deg);
  animation: rotateAnimation cubic-bezier(.29,.04,.23,1) 1s forwards;
  transform-origin: bottom left;

  div:last-child{
    margin-top: 1em;

    @media (max-width: 730px){
      margin-top: 0;
    }
  }

  @media (max-width: 1849px){
    max-width: 1366px;
    margin: 0 auto;
  }

  @media (max-width: 426px){
    display: none;
  }

`;

export const DownNavContainerMobile = styled.div`
  padding: 0 19px;
  display: none;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  background: transparent;
  width: 100%;
  position: fixed;
  bottom: 55px;

  div:last-child{
    margin-top: 1em;

    @media (max-width: 730px){
      margin-top: 0;
    }
  }

  @media (max-width: 1849px){
    max-width: 1366px;
    margin: 0 auto;
  }

  @media (max-width: 426px){
    display: flex;
    position: absolute;
    bottom: 30vh;
  }

`;

export const Nav = styled.nav`
  position: fixed;
  width: 120px;
  font-size: 12px;
  color: #1c2042;
  font-family: 'Formular bold';
  line-height: 17px;

  div{
    ul{
      li{
        cursor: pointer;

        @media (max-width: 730px){
          width: 300px;
          margin-bottom: 6px;
        }

        @media (max-width: 426px){
          width: 193px;
        }
      }
    }

    
  }

  @media (max-width: 1849px){
    margin: 0 auto;
    left: 10vw;
  }

  @media (max-width: 1550px){
    margin: 0 0 0 -5vw;
    transition: ease-in-out .6s;
  }

  @media (max-width: 1310px){
    margin: 0 0 0 -8vw;
    transition: ease-in-out .6s;
  }

  @media (max-width: 1260px){
    margin: 0 0 0 -6em;
    transition: ease-in-out .6s;
  }

  @media (max-width: 1000px){
    margin: 0 0 0 1.5vw;
  }

  @media (max-width: 730px){
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 25vh;
    font-size: 14px;
  }

  @media (max-width: 426px){
    left: auto;
    position: absolute !important;
    width: 120px;
    bottom: auto;
    line-height: 17px;
  }

`;