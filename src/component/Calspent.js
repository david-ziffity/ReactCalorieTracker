import React from 'react';

const Calspent = ({spent,cclass}) => {
    return(
        <div>
            Calories Spent Per Day: <span className={cclass}>#{spent}</span>
        </div>
    );
}

export default Calspent;