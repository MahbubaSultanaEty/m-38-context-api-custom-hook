import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <h5>Brother</h5>
            <button onClick={() => setMoney(money+100)}>Add 100 tk</button>
        </div>
    );
};

export default Brother;