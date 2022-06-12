import classes from './HomePage.module.css'
import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductCatg from '../ProductCatg/ProductCatg'
import { CategoryContextProvider } from '../../store/CategoryContext'
import StoreContext from '../../store/StoreContext'

function HomePage() {
    const ctx = useContext(StoreContext);

    return (
        <div className={classes.homepage}>
            <Navbar cartCount = {ctx.cartCount}/>
            <CategoryContextProvider>
                <ProductCatg />
            </CategoryContextProvider>
        </div>
    )
}

export default HomePage