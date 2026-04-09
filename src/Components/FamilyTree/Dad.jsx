import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';
import "./familyTree.css"

const Dad = () => {
    return (
        <div>
            <h5>Dad</h5>
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;