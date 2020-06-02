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

  @media (max-width: 1441px){
    margin: 0 37px 0 0;
  }

  @media (max-width: 1025px){
    margin: 0;
  }
`;