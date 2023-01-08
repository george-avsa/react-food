import React from "react";
import { Link } from "react-router-dom";

export default function Meal(props) {
    const { strMeal, strMealThumb, idMeal } = props;
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className='card-content'>
                <p>{strMeal}</p>
            </div>
            <div className='card-action'>
                <Link to={"/meal/" + idMeal} className='btn'>
                    More
                </Link>
            </div>
        </div>
    );
}
