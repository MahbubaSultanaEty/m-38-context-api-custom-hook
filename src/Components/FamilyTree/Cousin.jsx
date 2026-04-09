import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h5>Cousin: {name}</h5>
            {
                name=== "Shimu" && <Special asset={asset}></Special>
            }
            {
                name === "Manik" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;