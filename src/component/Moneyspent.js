import React from 'react';

const Moneyspent = ({spent,cclass}) => {
    return(
        <div>
           Money spent Per Month: <span className={cclass}>${spent}</span>
        </div>
    );
}

export default Moneyspent;