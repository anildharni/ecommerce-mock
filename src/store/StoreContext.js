import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StoreContext = createContext({
    filteredData: Array,
    setFilteredData: Function
});


export const StoreContextProvider = (props) => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [data, setData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    const navigate = useNavigate();

    const expandHandler = (id) => {
        navigate(`/products/${id}`)
    }

    useEffect(() => {
        // Search the API
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(El => setData(El))
    }, [])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data
            .filter((value) => {
                return value.title.toLowerCase().includes(searchWord.toLowerCase());
            });

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    const value = {
        filteredData: filteredData,
        wordEntered: wordEntered,
        categoryData: categoryData,
        setCategoryData: setCategoryData,
        setFilteredData: setFilteredData,
        setWordEntered: setWordEntered,
        handleFilter: handleFilter,
        clearInput: clearInput,
        expandHandler: expandHandler,
    }
    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;