import {API_URL} from './config'

const getMeal = async (mealId) => {
    const fetchPromise = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await fetchPromise.json(); 
}

const getCategory = async (categoryName) => {
    const fetchPromise = await fetch(API_URL + 'filter.php?c=' + categoryName);
    return await fetchPromise.json(); 
}

const getAllCategories = async () => {
    const fetchPromise = await fetch(API_URL + 'categories.php');
    return await fetchPromise.json(); 
}

export {getAllCategories, getCategory, getMeal}