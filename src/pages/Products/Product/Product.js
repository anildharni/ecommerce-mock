import React, { useEffect, useState } from 'react'
import {
    useParams
} from 'react-router-dom'
import Card from '../../../components/Card/Card';
import classes from '../Product.module.css'

const Category = () => {

    const { prodID } = useParams(); // Get current url params through useParams hook

    const [prodData, setProdData] = useState([]);

    const url = `https://fakestoreapi.com/products/${prodID}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setProdData(res))
    }, [url])



    return (
        <div className={classes.item}>
            <Card
                key={prodData.id}
                index={prodData.id}
                expand={true}                               // Same card component with additional expand prop
                image={prodData.image}                      // To use it for a single product
                title={prodData.title}
                category={prodData.category}
                description={prodData.description}
                rating={prodData.rating}
                price={prodData.price}
                buy={true}
            />
        </div>
    )
}

export default Category