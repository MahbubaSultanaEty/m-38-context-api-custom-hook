import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
    return (
        <div>
            <h5>Myself</h5>
            <Special name="Ashik" asset={asset}></Special>
        </div>
    );
};

export default Myself;