import React from 'react';
import { RiArrowRightUpLine, RiArrowRightLine, RiArrowDownLine } from 'react-icons/ri';

import * as styles from './styles';

export default function ActionsBtn(props){

  return(
    <styles.ActionsContainer>
      {
        (() => {
          switch(props.type){
            case "small":
              return <><styles.ActionsButtonTextSmall>{props.textBtn}</styles.ActionsButtonTextSmall>
        
                <styles.ActionsButtonCircularSmall>
                  <RiArrowRightUpLine size={30} color={props.color}/>
                </styles.ActionsButtonCircularSmall></>
            case "medium":
              return <><styles.ActionsButtonTextMedium>{props.textBtn}</styles.ActionsButtonTextMedium>
        
                <styles.ActionsButtonCircularMedium>
                  <RiArrowDownLine size={30} color={props.color}/>
                </styles.ActionsButtonCircularMedium></>
            case "large":
              return <><styles.ActionsButtonTextLarge>{props.textBtn}</styles.ActionsButtonTextLarge>
        
                <styles.ActionsButtonCircularLarge>
                  <RiArrowRightLine size={60} color={props.color}/>
                </styles.ActionsButtonCircularLarge></>
            default:
              return <div></div>
          }
        })()
      }
    </styles.ActionsContainer>
  );
}