import { useContext } from 'react'
import StoreContext from '../../store/StoreContext'
import classes from './Cart.module.css'

function Cart() {

  const ctx = useContext(StoreContext)
  return (
    <h1 className={classes.container}>
     {`Your Cart currently has ${ctx.cartCount} items with ids ${ctx.cartItems}`}
    </h1>
  )
}

export default Cart