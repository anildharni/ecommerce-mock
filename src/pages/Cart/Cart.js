import { useContext } from 'react'
import StoreContext from '../../store/StoreContext'
import classes from './Cart.module.css'

function Cart() {

  const ctx = useContext(StoreContext)

  // To demonstrate how cart can be manipulated, I am displaying two important parameters
  // that'll let us display selected products, if we wanted to in future.

  return (
    <h1 className={classes.container}>
     {`Your Cart currently has ${ctx.cartCount} items 
     with the following product IDs => ${ctx.cartItems.length === 0 ? "[Null Array]" : ctx.cartItems}`}
    </h1>
  )
}

export default Cart