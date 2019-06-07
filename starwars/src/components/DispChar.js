import React from 'react';
import './StarWars.scss';
import CharItem from './CharItem';

const DispChar = props => {
    return (
        <div>
            {props.char.map((char, index) => {
                return <CharItem char ={char}
                                key={index}
                                displayCurrentChar={props.displayCurrentChar} />
            })}
            <div className='btnContainer'>
                <div className='previous' onClick={props.displayPrevChar}>Previous Character</div>
                <div className='next' onClick={props.displayNextChar}>Next Character</div>
            </div>
        </div>
    )
}

export default DispChar;