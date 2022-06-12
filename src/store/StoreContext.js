import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Store Global App context is created in StoreContext variable

const StoreContext = createContext({
    filteredData: Array,
    wordEntered: String,
    categoryData: Array,
    cartCount: Number,
    cartItems: Array,                      // This doesn't have any real effect but will help in
    cartHandler: Function,                 // VSCode Auto Suggestions
    setCategoryData: Function,
    setFilteredData: Function,
    setWordEntered: Function,
    handleFilter: Function,
    clearInput: Function,
    expandHandler: Function,
});


export const StoreContextProvider = (props) => {

    // Hooks and Handlers regulating the Search bar functionality

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        // We search the API to get store in state as data
        // We would be using this data to get => data.Alltitles and compare this with => ourSearchString
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(El => setData(El))
    }, [])


    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data
            .filter((value) => {                    // Looking for a match between search String and all titles
                return value.title.toLowerCase().includes(searchWord.toLowerCase());
            });

        if (searchWord === '') {                    // When user cancels the entered string, search string will be
            setFilteredData([]);                    // empty. so we need to set the data to empty
        } else {
            setFilteredData(newFilter);             // Setting search matches that are to be returned
        }
    };

    const clearInput = () => {
        setFilteredData([]);                        // Setting the search state back to normal
        setWordEntered("");
    };

    // Counting Add to cart elements.

    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const cartHandler = (id) => {
        // If the id of products in cart match with the id of product clicked, the button should be "Remove Product" 
        // and clicking it should take it out of cart. cartCount is simultaneously updated in both cases.
        if (Array.from(cartItems).includes(id)) {
            setCartCount(cartCount - 1)
            return setCartItems((prevState) => (prevState.filter((el) => el !== id)))
        }
        // If the id of products in cart does not match with the id of product clicked, the button should be
        //  "Add Product" and clicking it should take add it to the cart
        else {
            setCartCount(cartCount + 1)
            return setCartItems(prevState => [...prevState, id])
        }
    }

    // Getting categories to directly populate it from API. To reduce the number of
    // calls to API, categroies array is directly stored in localStorage -> Find this in Categories page

    const [categoryData, setCategoryData] = useState([]);

    // Programmatically navigate to product page. For this purpose we are using useNavigate hook.

    const navigate = useNavigate();

    const expandHandler = (id) => {
        navigate(`/products/${id}`)
    }


    const value = {
        filteredData: filteredData,
        wordEntered: wordEntered,
        categoryData: categoryData,
        cartCount: cartCount,
        cartItems: cartItems,
        cartHandler: cartHandler,
        setCategoryData: setCategoryData,
        setFilteredData: setFilteredData,
        setWordEntered: setWordEntered,
        handleFilter: handleFilter,
        clearInput: clearInput,
        expandHandler: expandHandler
    }


    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;