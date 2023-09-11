import React from 'react';
import FoodDetail from './FoodDetail';

const Itemlister = ({ items }) => {
    return (
        <>
            {items.length > 0 &&
                <div className={'item-holder'}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Calorie</th>
                                <th>Price</th>
                                <th>Date/Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, i) => <FoodDetail item={item} key={i} index={i} />)}
                        </tbody>
                    </table>
                </div>}
                {items.length === 0  && <div className='alert warn'>No Data Available</div> }
        </>
    );
}

export default Itemlister;