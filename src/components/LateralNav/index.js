import React from 'react';

import * as styles from './styles';

import SayHelloLateralBtn from '../SayHelloBtn';
import SoundBtn from '../SoundBtn';

export default function LateralNav(){
  return(
    <>
      <styles.LateralNavContainer>
        <div>
          <SayHelloLateralBtn />
        </div>

        <div>
          <SoundBtn />
        </div>
      </styles.LateralNavContainer>
    </>
  );
}