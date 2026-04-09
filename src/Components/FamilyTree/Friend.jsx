import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {

    const [money, setMoney] =use(MoneyContext)
    return (
        <div>
            <h6>friend</h6>
            <p>Family Got: { money}</p>
        </div>
    );
};

export default Friend;