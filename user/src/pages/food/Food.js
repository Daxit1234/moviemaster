import React, { useEffect, useState } from 'react'
import "./Food.css"
import Invoice2 from '../../components/invoice/Invoice2';

const Food = () => {
    const [food, setFood] = useState([]);
    
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
                
                   <div class="d-flex food-card  col-md-6 text-light" style={{width: "18rem"}}>
                   <img class="card-img-top food-image" src={item.imageUrl} alt="Card image cap"/>
                   <div class="card-body ">
                    <div className='d-flex justify-content-between'> 
                     <h5 class="card-title">{item.name}</h5>
                     <h5 class="card-title">Rs. {item.price}</h5>

                    </div>
                    <div className='description'>
                     <p class="card-text ">{item.description}dklsnlknv sjdvjs </p>
                     <button className='btn btn-success '>Add</button>
                    </div>
                   </div>
                 </div>
                ))}
            </div>
            <div className='oderSummary'>
               <Invoice2/>
            </div>
        </div>
    );
}

export default Food;
