import React from 'react';
import './Block.css';

function Block(props) {
  return (
    <div className='blocks'>
        <img src={props.img} alt=''/>
        <h3>{props.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default Block