import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../api";
import Meals from "../components/Meals";

export default function CategoryMeals() {
    const { name } = useParams();

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getCategory(name).then((data) => {
            if (data?.meals) {
                setMeals(data.meals);
            } else {
                setMeals([]);
            }
        });
    }, [name]);

    return <Meals meals={meals}></Meals>;
}
