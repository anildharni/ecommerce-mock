import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../../components/Card/Card';
import StoreContext from '../../../store/StoreContext';
import classes from '../Product.module.css'

const Category = () => {

  const ctx = useContext(StoreContext);

  const { category } = useParams();

  const url = `https://fakestoreapi.com/products/category/${category}`

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => ctx.setCategoryData(res))
  }, [])

  return (
    <div className={classes.container}>
      {ctx.categoryData.map((el) => {
        return (<Card
          key={el.id}
          id={el.id}
          expanded={false}
          image={el.image}
          title={el.title}
          category={el.category}
          description={el.description}
          rating={el.rating}
          price={el.price}
          clickHandler={ctx.expandHandler} 
          />)
      }
      )}
    </div>
  )
}

export default Category