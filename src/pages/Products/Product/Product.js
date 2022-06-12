import React, { useEffect, useState } from 'react'
import {
    // useNavigate,
    useParams
} from 'react-router-dom'
import Card from '../../../components/Card/Card';
import classes from '../Product.module.css'

const Category = () => {

    const { prodID } = useParams();

    //   const navigate = useNavigate();

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

    // console.log(prodData)


    return (
        <div className={classes.item}>
            <Card
                key={prodData.id}
                expand={true}
                image={prodData.image}
                title={prodData.title}
                category={prodData.category}
                description={prodData.description}
                rating={prodData.rating}
                price={prodData.price}
                buy={true} />
        </div>
    )
}

export default Category