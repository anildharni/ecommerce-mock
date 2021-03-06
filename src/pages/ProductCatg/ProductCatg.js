import React, { useContext } from 'react'
import ListItem from '../../components/ListItem/ListItem'
import CategoryContext from '../../store/CategoryContext'
import classes from './ProductCatg.module.css'

// This component will supply Category elements in our NavBar

function ProductCatg() {
    const ctx = useContext(CategoryContext);

    return (
        <div className={classes.container}>
            <span className={classes['grid-item-category']}>
                <button>
                    categories      {/* This button is just for convenience purpose */}
                </button>
            </span>
            <div className={classes['grid-item']}>
                {ctx.cat.map((el, index) => <ListItem key={index} path={el}>
                    {el}
                </ListItem>)}
            </div>
        </div>
    )
}

export default ProductCatg