import React, { useEffect, useState } from 'react'
import "./Food.css"
import Invoice2 from '../../components/invoice/Invoice2';
import FoodCard from '../../components/foodCard/FoodCard';

const Food = () => {
    const [food, setFood] = useState([]);
    const [foodBeverage,setFoodBeverage]=useState([]);
    let OnFoodAdd = (item) => {
        // Check if the item quantity is greater than 0
        if (item.quantity > 0) {
            // Check if the item name already exists in foodBeverage
            const existingItemIndex = foodBeverage.findIndex(foodItem => foodItem.name === item.name);
    
            if (existingItemIndex !== -1) {
                // If the item already exists, replace its quantity
                const updatedFoodBeverage = [...foodBeverage];
                updatedFoodBeverage[existingItemIndex].quantity = item.quantity;
                setFoodBeverage(updatedFoodBeverage);
            } else {
                // If the item doesn't exist, concatenate it
                setFoodBeverage(prevFoodBeverage => [...prevFoodBeverage, item]);
            }
        } else {
            console.log("Item quantity is 0. Not adding to foodBeverage.");
        }
    };
    
    
    useEffect(() => {
        getFood();
    }, []);

    const getFood = async () => {
        try {
            let response = await fetch("http://localhost:8080/food/getfood");
            let data = await response.json();
            setFood(data);
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    }

  

    return (
        <div className='d-flex fluid-container'>
            <div className="row mx-2 mt-3 ">
                {food.length !== 0 && food.map((item, index) => (
                    <FoodCard item={item} OnFoodAdd={OnFoodAdd}/>
                ))}
            </div>
            <div className='oderSummary'>
               <Invoice2 foodBeverage={foodBeverage}/>
            </div>
        </div>
    );
}

export default Food;
