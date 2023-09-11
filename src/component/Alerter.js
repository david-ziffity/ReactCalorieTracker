import React from 'react';

const Alerter = ({alert}) => {
    return(
        <>
        {alert.map((item, i) => {
        return (
                <div key={i} className={`alert ${item.cclass}`}>
                {item.msg}
             </div>
            )
        })}
        </>
    );
}

export default Alerter;