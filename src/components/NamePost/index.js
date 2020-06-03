import React from 'react';
import * as styles from './styles';

export default function NamePost(props){
  return(
    <styles.NamePostContainer>
      <h3>{props.name}</h3>
      <h4>{props.post}</h4>
    </styles.NamePostContainer>
  );
}