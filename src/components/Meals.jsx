import React from "react";
import Meal from "./Meal";

export default function Meals({ meals }) {
    return (
        <div className='card-item'>
            {meals.map((meal) => (
                <Meal key={meals.idMeal} {...meal}></Meal>
            ))}
        </div>
    );
}
