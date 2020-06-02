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