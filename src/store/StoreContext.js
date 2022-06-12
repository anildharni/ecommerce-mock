import { createContext, useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

// Store Global App context is created in StoreContext variable

const StoreContext = createContext({
    filteredData: Array,
    setFilteredData: Function
});


export const StoreContextProvider = (props) => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [data, setData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const defaultCartData = { cartItems: [] }

    const cartDataHandler = (state, action) => {
        if (action.type === 'addToCart') {
            const updatedCartData = [...state.cartItems, action.itemData]
            return {cartItems: updatedCartData}
        } 
        if (action.type === 'removeFromCart') {
            return {cartItems: action.tempCart}
        }
        
        return defaultCartData
    }

    const [cartData, dispatchCartData] = useReducer(cartDataHandler, defaultCartData)

    const addCartHandler = (itemData) => {
        dispatchCartData({
            type:"addToCart", itemData
        })
    }

    const removeFromCartHandler = (el) => {
        let tempCart = [...cartData.cartItems]
        tempCart = tempCart.filter((el) => el !== cartData.cartItems.id)
        dispatchCartData({
            type:"removeFromCart", tempCart
        })
    }

    const cartHandler = (id) => {
        if (Array.from(cartItems).includes(id)) {
            setCartCount(cartCount - 1)
            return setCartItems((prevState) => (prevState.filter((el) => el !== id)))
        } else {
            setCartCount(cartCount + 1)
            return setCartItems(prevState => [...prevState, id])
        }
    }

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
        cartCount:cartCount,
        cartItems:cartItems,
        cartHandler:cartHandler,
        setCategoryData: setCategoryData,
        setFilteredData: setFilteredData,
        setWordEntered: setWordEntered,
        handleFilter: handleFilter,
        clearInput: clearInput,
        expandHandler: expandHandler,

        cartData,
        addCartHandler,
        removeFromCartHandler
    }
    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;