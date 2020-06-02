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

  div:last-child{
    margin-top: 1em;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  width: 120px;
  bottom: 61px;
  font-size: 12px;
  color: #1c2042;
  font-family: 'Formular light';
  line-height: 17px;
`;