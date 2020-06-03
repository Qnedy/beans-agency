import styled from 'styled-components';

export const Button = styled.a`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  background: #1c2042;
  color: #fff;
  padding: 10px 26px;
  font-family: 'Formular bold';
  font-size: 10px;
  cursor: pointer;
  outline: none;

  svg{
    margin-left: 8px;
  }

  @media (max-width: 730px){
    display: none;
  }
`;

export const ButtonCircular = styled.a`
  display: none;
  align-items: center;
  background: #1c2042;
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  height: 36px;
  width: 36px;
  font-family: 'Formular bold';
  cursor: pointer;
  outline: none;

  @media (max-width: 730px){
    display: flex;
  }
`;