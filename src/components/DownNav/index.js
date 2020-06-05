import React from 'react';

import * as styles from './styles';

import SoundBtn from '../SoundBtn';

export default function DownNav(){
  return(
    <>
    <styles.DownNavContainer>
      <styles.Nav>
        <div>
          <ul>
            <li>About us</li>
            <li>Cases</li>
            <li>Methods</li>
          </ul>
        </div>
        
        <div>
          <ul>
            <li>Services</li>
            <li>Team</li>
            <li>Contacts</li>
          </ul>
        </div>
        
      </styles.Nav>
      <SoundBtn />
    </styles.DownNavContainer>

    <styles.DownNavContainerMobile>
      <styles.Nav>
        <div>
          <ul>
            <li>About us</li>
            <li>Cases</li>
            <li>Methods</li>
          </ul>
        </div>
        
        <div>
          <ul>
            <li>Services</li>
            <li>Team</li>
            <li>Contacts</li>
          </ul>
        </div>
        
      </styles.Nav>
    </styles.DownNavContainerMobile>
    </>
  );
}