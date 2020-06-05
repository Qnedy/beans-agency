import styled from 'styled-components';

export const LateralNavContainer = styled.div`
  padding: 19px 0;
  display: none;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: transparent;
  width: auto;
  position: fixed;
  z-index: 10;
  top: 0 !important; 
  right: 0;

  flex-direction: column;


  @media (max-width: 426px){
    display: flex;
  }

`;