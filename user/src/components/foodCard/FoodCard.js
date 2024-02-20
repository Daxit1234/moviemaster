import React, { useState } from 'react';

const FoodCard = ({ item,OnFoodAdd }) => {
    const [quantity, setQuantity] = useState(0);
    const [foodObject, setFoodObject] = useState({ name: "", price: null, quantity: null });

    const handleAddFood = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        // Create an object containing food information
        const newFood = {
            name: item.name,
            price: item.price,
            quantity: newQuantity
        };

        // Update the food object state
        setFoodObject(newFood);
        OnFoodAdd(newFood)
        console.log('Food added:', newFood);
    };

    const handleRemoveFood = () => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);

            const newFood = {
                name: item.name,
                price: item.price,
                quantity: newQuantity
            };
            OnFoodAdd(newFood)
            setFoodObject(newFood);
        console.log('Food added:', newFood);

        }
    };

    return (
        <div className="d-flex food-card col-md-6 text-light" style={{ width: '18rem' }}>
            <img className="card-img-top food-image" src={item.imageUrl} alt="Card image cap" />
            <div className="card-body ">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{item.name}</h5>
                    <h5 className="card-title">Rs. {item.price}</h5>
                </div>
                <div className="description">
                    <p className="card-text">{item.description}dklsnlknv sjdvjs </p>
                    {quantity === 0 ? (
                        <button className='btn btn-success' onClick={handleAddFood}>Add</button>
                    ) : (
                        <div className='addremove-box'>
                            <span className="addremove" onClick={handleRemoveFood}>-</span>
                            <h5 className="quantity mx-3">{quantity}</h5>
                            <span className="addremove" onClick={handleAddFood}>+</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
