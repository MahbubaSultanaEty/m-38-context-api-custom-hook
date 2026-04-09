import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({ name, asset }) => {
    const newAsset = useContext(AssetContext);

    console.log("new asset", newAsset);
    return (
        <div>
            <h6>Special: {name}</h6>
            <p>asset : {asset}</p>
            <br />
            <p>new asset: { newAsset}</p>
            
        </div>
    );
};

export default Special;