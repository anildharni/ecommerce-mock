import classes from './HomePage.module.css'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductCatg from '../ProductCatg/ProductCatg'
import { CategoryContextProvider } from '../../store/CategoryContext'

function HomePage() {

    return (
        <div className={classes.homepage}>
            <Navbar />
            <CategoryContextProvider>
                <ProductCatg />
            </CategoryContextProvider>
        </div>
    )
}

export default HomePage