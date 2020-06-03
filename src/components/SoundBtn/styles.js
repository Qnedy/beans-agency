import styled from 'styled-components';

export const Button = styled.a`
  background: #1c2042;
  color: #fff;
  font-family: 'Formular bold';
  cursor: pointer;
  height: 36px;
  width: 36px;
  border-radius: 50px;
  position: fixed;
  bottom: 61px;

  padding: .5em;
  right: 19px;

  @media (max-width: 1849px){
    margin: 0 auto;
    right: 10vw;
  }

  @media (max-width: 1550px){
    margin: 0 -2vw 0 0;
    transition: ease-in-out .6s;
  }

  @media (max-width: 1310px){
    margin: 0 -8vw 0 0;
    transition: ease-in-out .6s;
  }

  @media (max-width: 1260px){
    margin: 0;
    transition: ease-in-out .6s;
  }

  @media (max-width: 1000px){
    margin: 0 1.5vw 0 0;
  }

  @media (max-width: 730px){
    margin: 0 100px 0 0;
    bottom: 20px;
  }

  @media (max-width: 426px){
    margin: 0 -20px 0 0;
    bottom: 20px;
  }
`;