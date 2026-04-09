import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import "./familyTree.css"

export const AssetContext = createContext("");

export const MoneyContext= createContext('')

const FamilyTree = () => {
    const [money, setMoney]=useState(0)

    const asset = "diamonds";
    const newAsset= "gold"
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            {/* <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider> */}
            <h5>Total Family Money: { money}</h5>
            <MoneyContext value={[money, setMoney]}>
                 <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;
/**
 * context API
 * 1. create a context using createContext with a default value
 * make sure to export the context to use it in other component
 */