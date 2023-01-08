import React, { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import CategoriesList from "../components/CategoriesList";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            if (data?.categories) {
                setCategories(data.categories);
            } else {
                categories([]);
            }
        });
    }, []);

    return <CategoriesList categories={categories}></CategoriesList>;
}
