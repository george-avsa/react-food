import React from "react";

const structureReceiptInfo = (mealInfo) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = `strIngredient${i}`;
        const measure = `strMeasure${i}`;
        if (mealInfo[ingredient] && mealInfo[measure]) {
            ingredients.push({
                ingredient: mealInfo[ingredient],
                measure: mealInfo[measure],
            });
        }
    }
    return ingredients;
};

export default function MealInfo(props) {
    const { strMeal, strInstructions, strMealThumb } = props;
    const receiptInfo = structureReceiptInfo(props) || [];

    return (
        <>
            <p>
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    style={{
                        float: "left",
                        width: "50%",
                        margin: "0 2rem 2rem 0",
                    }}
                />
                {strInstructions}
            </p>
            <table>
                <tr>
                    <th className='center'>Ingredients</th>
                    <th className='center'>Measure</th>
                </tr>
                {receiptInfo.map((row) => {
                    return (
                        <tr>
                            <td className='center'>{row.ingredient}</td>
                            <td className='center'>{row.measure}</td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
}
