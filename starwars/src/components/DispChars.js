import React from 'react';
import './StarWars.scss';
import {Character} from './CharItem';

export const CharacterList = props => {
  return (
    <div>
      {props.chars.map((char, index) => {
        return <CharItem char={char}
          key={index}
          displayCurrentChar={props.displayCurrentChar} />
      })}
    </div>
  );
}