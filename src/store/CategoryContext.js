import { createContext, useState, useEffect } from "react";

// Category context is made to wrap only ProductCatg component in HomePage component. So as to scope the context.

const CategoryContext = createContext();

export const CategoryContextProvider = (props) => {

    const [cat, setCat] = useState(() => {
        try {
            // To reduce the number of calls made to APIs, this initial category array will be stored to 
            // client's local storage.
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