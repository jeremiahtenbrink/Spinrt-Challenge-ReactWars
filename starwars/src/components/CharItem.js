import React from 'react';
import './StarWars.scss';

const CharItem = (props) => {
    return (
        <div>
            {props.char.name}
        </div>
    );
};

export default CharItem;