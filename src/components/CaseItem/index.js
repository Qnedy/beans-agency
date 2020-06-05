import React from 'react';

import { MdArrowDropDown } from 'react-icons/md';

import * as styles from './styles';

export default function CaseItem(props){

  return(
    <styles.Item>
      <div>
        <h6>{props.case}</h6>
      </div>
        
      <styles.What>
        <span>What We Do</span>
        <p>{props.what}</p>
      </styles.What>

      <styles.Category>
        <span>Category</span>
        <p>{props.category}</p>
      </styles.Category>

      <styles.ExpandBtn>
        <MdArrowDropDown size={20} color="#1C2042" opacity={1}/>
      </styles.ExpandBtn>
    </styles.Item>
  );
}