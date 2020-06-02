import styled from 'styled-components';

export const UpNavContainer = styled.div`
  padding: 0 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  background: transparent;
  width: 100%;
  max-width: 1366px;
  position: fixed;
  z-index: 1;
  align-self: center;

  @media (min-width: 1850px){
    max-width: 1920px;
  }

  @media (max-width: 1760px){
    margin: 0 195px;
  }

  @media (max-width: 1441px){
    margin: 0 37px;
  }

  @media (max-width: 1260px){
    width: 984px;
    padding: 0;
    margin: 0 15px;
  }

  @media (max-width: 1000px){
    width: 728px;
    padding: 0;
    margin: 0 100px;
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
`;