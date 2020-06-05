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

    @media (max-width: 1260px){
      width: 400px;
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

  @media (max-width: 1260px){
    padding: 2em 0em 2em 0;
  }
`;

export const ExpandBtn = styled.div`
  border: 2px solid #D2D2D9;
  border-radius: 50%;
  min-width: 36px !important;
  min-height: 36px !important;
  max-width: 36px !important;
  max-height: 36px !important;
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    opacity: 1;
  }

  
`;