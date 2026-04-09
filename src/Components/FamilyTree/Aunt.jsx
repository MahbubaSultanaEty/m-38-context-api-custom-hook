import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h5>Aunt</h5>
            <section className='flex'>
                <Cousin name="Shimu"></Cousin>
                <Cousin name="Rimu"></Cousin>
                
            </section>
        </div>
    );
};

export default Aunt;