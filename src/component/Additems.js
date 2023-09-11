import React, { useState } from 'react';


const AddItem = ({ items, addMeals }) => {
    const [meal, setMeal] = useState({
        name: '',
        cal: 0,
        price: 0,
        date: ''
    });



    const onAddMealsClick = () => {
        var now = new Date(),
            date = [
                now.getFullYear(),
                '-',
                now.getMonth() + 1,
                '-',
                now.getDate(),
                ' / ',
                now.getHours(),
                ':',
                now.getMinutes(),
                ':',
                now.getSeconds()
              ].join('');
           
        if (meal.name && meal.cal && meal.price) {
            addMeals({...meal,date: date});
        } else {
            addMeals();
        }

    }
    return (
        <div className={'form'}>
            <div className='fields'>
                <span> <input type='text' placeholder='Food' value={items.name} onChange={(e) => setMeal({ ...meal, name: e.target.value })} /></span>
                <span><input min="0" type='number' placeholder='Calories' value={items.cal} onChange={(e) => setMeal({ ...meal, cal: e.target.value })} /></span>
                <span><input min="0" type='number' placeholder='Price' value={items.price} onChange={(e) => setMeal({ ...meal, price: e.target.value })} /></span>
            </div>
            <button className='btn-add' onClick={onAddMealsClick}>Add Meals</button>
        </div>
    );
}

export default AddItem;