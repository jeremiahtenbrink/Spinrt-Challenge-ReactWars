import React from 'react';
import CharItem from './CharItem';

export const DispChars = props => {
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