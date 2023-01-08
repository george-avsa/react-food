import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoriesList({ categories }) {
    return (
        <div className='card-item'>
            {categories.map((category) => (
                <CategoryItem
                    key={category.idCategory}
                    {...category}
                ></CategoryItem>
            ))}
        </div>
    );
}
