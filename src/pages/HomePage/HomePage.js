import classes from './HomePage.module.css'
import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductCatg from '../ProductCatg/ProductCatg'
import { CategoryContextProvider } from '../../store/CategoryContext'
import StoreContext from '../../store/StoreContext'

// This component represent home page with both Navbar and categories list below that Navbar 

function HomePage() {
    const ctx = useContext(StoreContext);

    return (
        <div className={classes.homepage}>
            <Navbar cartCount = {ctx.cartCount}/>      {/* Paased the number of items added in cart beside cart icon */}
            <CategoryContextProvider>
                <ProductCatg />            {/* Wrapping the ProductCategories with a local context */}
            </CategoryContextProvider>
        </div>
    )
}

export default HomePage