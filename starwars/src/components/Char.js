import React from 'react';
import './StarWars.scss';


export const IndChars = props => {
  return (
    <div className='page'>
      <div className='card'>
        <h1 className='Header charHeader'>{props.char.name}</h1>
        <div class='char-list'>
          <p>Height: {props.char.height}</p>
          <p>Mass: {props.char.mass}</p>
          <p>Hair Color: {props.char.hair_color}</p>
          <p>Skin Color: {props.char.skin_color}</p>
          <p>Eye Color: {props.char.eye_color}</p>
          <p>Birth Year: {props.char.birth_year}</p>
          <p>Gender: {props.char.gender}</p>
          <div className='return' onClick={props.backToList}>Return</div>
        </div>
      </div>
    </div>
  );
}

export default IndChars;