import React from 'react';
import './StarWars.scss';
import CharItem from './CharItem';

const DispChars = props => {
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


export default DispChars;