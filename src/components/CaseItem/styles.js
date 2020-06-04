import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 1em 2em 0;
  border-top: 1px solid #D2D2D9;

  &:last-child{
    border-bottom: 1px solid #D2D2D9;
  }

  div{
    width: 480px;

    &:last-child{
      width: auto;
    }
  }

  h6{
    font-size: 24px;
  }

  span{
    font-size: 12px;
  }

  p{
    font-size: 12px;
    opacity: .5;
  }
`;

export const ExpandBtn = styled.div`
  border: 2px solid #D2D2D9;
  border-radius: 50%;
  width: 36px !important;
  height: 36px !important;
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    opacity: 1;
  }
`;