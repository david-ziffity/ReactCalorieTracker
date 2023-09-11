import React from 'react';

const FoodDetail = ({ item, index }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>#{item.cal}</td>
            <td>${item.price}</td>
            <td>{item.date}</td>
        </tr>
    );
}

export default FoodDetail;