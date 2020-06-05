import styled from 'styled-components';

export const UpNavContainer = styled.div`
  padding: 0 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  background: transparent;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0; 
  left: 0;
  right: 0;
  animation: fadeAnimation 1.5s ease .2s forwards;
  opacity: 0;

  @media (max-width: 1849px){
    max-width: 1366px;
    margin: 0 auto;
  }

  @media (max-width: 1260px){
    max-width: 984px;
    margin: 0 auto;
    padding: 0;
  }

  @media (max-width: 1000px){
    max-width: 728px;
  }

  @media (max-width: 730px){
    max-width: 414px;
    padding: 0 19px;
    margin: 0 5px;
  }

  @media (max-width: 426px){
    display: none;
  }

  

`;

export const UpNavContainerMobile = styled.div`
  padding: 0 19px;
  display: none;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  background: transparent;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0; 
  left: 0;
  right: 0;
  animation: fadeAnimation 1.5s ease .2s forwards;
  opacity: 0;

  @media (max-width: 426px){
    display: flex;
  }

`;

export const Logo = styled.div`
  display: flex;

  img{
    cursor: pointer;
  }

  ul{
    display: flex;
    padding: 3px;

    img{
      margin: 0 3px;
    }
  }

  @media (max-width: 426px){
    display: none;
  }
`;

export const LogoMobile = styled.div`
  display: none;
  

  img{
    cursor: pointer;
  }

  @media (max-width: 426px){
    display: flex;
  }
`;