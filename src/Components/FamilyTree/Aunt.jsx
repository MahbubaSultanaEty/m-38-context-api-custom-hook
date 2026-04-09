import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h5>Aunt</h5>
            <section className='flex'>
                <Cousin name="Shimu" asset={asset}></Cousin>
                <Cousin name="Rimu" asset={asset}></Cousin>
                
            </section>
        </div>
    );
};

export default Aunt;