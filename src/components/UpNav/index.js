import React from 'react';

import * as styles from './styles';

import blackLogo from '../../assets/logo-black.svg';
import enIcon from '../../assets/en.svg';
import ukIcon from '../../assets/uk.svg';
import ruIcon from '../../assets/ru.svg';

import SayHelloBtn from '../SayHelloBtn';

export default function UpNav(){
  return(
    <>
    <styles.UpNavContainer>
      <styles.Logo>
        <img src={blackLogo} alt="beans agency" />
        <ul>
          <li><a><img src={enIcon} alt="bandeira en" /></a></li>
          <li><a><img src={ukIcon} alt="bandeira uk" /></a></li>
          <li><a><img src={ruIcon} alt="bandeira ru" /></a></li>
        </ul>
      </styles.Logo>

      <div>
        <SayHelloBtn />
      </div>
    </styles.UpNavContainer>

    <styles.UpNavContainerMobile>
      <styles.LogoMobile>
        <img src={blackLogo} alt="beans agency" />
      </styles.LogoMobile>
    </styles.UpNavContainerMobile>
    </>
  );
}