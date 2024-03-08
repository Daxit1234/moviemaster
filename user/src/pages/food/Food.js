import React, { useEffect, useState } from "react";
import "./Food.css";
import Invoice2 from "../../components/invoice/Invoice2";
import FoodCard from "../../components/foodCard/FoodCard";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Food = () => {
  const [food, setFood] = useState([]);
  const [foodBeverage, setFoodBeverage] = useState([]);
  const [foodType, setFoodType] =useState("");

  const handleChange = (event, newValue) => {
    setFoodType(newValue);
  };

  let OnFoodAdd = (item) => {
    // Check if the item quantity is greater than 0
    if (item.quantity > 0) {
      // Check if the item name already exists in foodBeverage
      const existingItemIndex = foodBeverage.findIndex(
        (foodItem) => foodItem.name === item.name
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, replace its quantity
        const updatedFoodBeverage = [...foodBeverage];
        updatedFoodBeverage[existingItemIndex].quantity = item.quantity;
        setFoodBeverage(updatedFoodBeverage);
      } else {
        // If the item doesn't exist, concatenate it
        setFoodBeverage((prevFoodBeverage) => [...prevFoodBeverage, item]);
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
      let response = await fetch("http://localhost:8080/food/getallfood");
      let data = await response.json();
      setFood(data);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  
  function filterFood(foodType) {
    console.log(foodType)
    if (foodType==="allfood" || foodType==="") {
      return food
    }
    return food.filter(food=> food.type.toLowerCase() === foodType.toLowerCase());
}

// Example: Filter cinemas by city "surat"
const  newFood= filterFood(foodType);
  return (
    <div className="d-flex fluid-container">
      <div style={{minWidth:"1000px"}}>
        <Box sx={{ width: "100%", bgcolor: "transperent" }}>
          <Tabs value={foodType} sx={{ color:"white" }} onChange={handleChange} centered>
            <Tab label="All" value="allfood"  sx={{ color:"white" }} />
            <Tab  label="COMBOS" value="COMBOS" sx={{ color:"white" }}/>
            <Tab  label="SNACKES"  value="SNACKES" sx={{ color:"white" }} />
            <Tab  label="BEVERAGES"value="BEVERAGES" sx={{ color:"white" }} />
            <Tab label="POPCORN" value="POPCORN" sx={{ color:"white" }}/>
          </Tabs>
        </Box>
      <div className="row mx-2 mt-3 " >
        {newFood.length !== 0 &&
          newFood.map((item, index) => (
            <FoodCard item={item} OnFoodAdd={OnFoodAdd} />
          ))}
      </div>
      </div>
      <div className="oderSummary">
        <Invoice2 foodBeverage={foodBeverage} />
      </div>
    </div>
  );
};

export default Food;
