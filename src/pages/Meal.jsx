import React, { useEffect, useState } from "react";
import { getMeal } from "../api";
import { useParams } from "react-router-dom";
import MealInfo from "../components/MealInfo";

export default function Meal() {
    const { id } = useParams();
    const [mealInfo, setMealInfo] = useState({});

    useEffect(() => {
        getMeal(id).then((data) => {
            const dataMeal = data?.meals[0];
            if (dataMeal) {
                setMealInfo(dataMeal);
            } else {
                setMealInfo({});
            }
        });
    }, [id]);

    return Object.keys(mealInfo).length ? (
        <MealInfo {...mealInfo}></MealInfo>
    ) : null;
}
