import { createContext, useState, useEffect } from "react";

const CategoryContext = createContext({
});

export const CategoryContextProvider = (props) => {

    const [cat, setCat] = useState(() => {
        try {
            const catLocalArray = window.localStorage.getItem('categoryArray');
            return catLocalArray ? JSON.parse(catLocalArray) : []
        } catch (error) {
            console.log(error);
            return []
        }
    })
    const url = "https://fakestoreapi.com/products/categories"

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                setCat(res);
                window.localStorage.setItem('categoryArray', JSON.stringify(res));
            })
    }, [])

    const value = {
        cat: cat,
        setCat: setCat
    }
    return (
        <CategoryContext.Provider value={value}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryContext;