import React, { useState } from 'react';

import * as styles from './styles';

import soundOnIcon from '../../assets/sound-on.svg';
import soundOffIcon from '../../assets/sound-off.svg';

export default function SoundBtn(){
  const [sound, setSound] = useState(false);
  const [icon, setIcon] = useState(soundOffIcon);

  function setIconSound(){
    if(sound){
      setSound(false)
      setIcon(soundOffIcon);
    }else{
      setSound(true)
      setIcon(soundOnIcon);
    }
  }


  return(
    <styles.Button onClick={setIconSound}>
      <img src={icon} alt="sound" />
    </styles.Button>
  );
}