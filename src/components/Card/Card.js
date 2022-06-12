import { useContext, useState } from 'react';
import StoreContext from '../../store/StoreContext';
import classes from './Card.module.css'

const Card = (props) => {

    const ctx = useContext(StoreContext);

    return (
        <div onClick={props.id ? () => props.clickHandler(props.id) : () => {}} className={props.expand ? classes["card-body"] : classes.card}>
            <div className={props.expand ? classes["card-body__image-body"] : classes["card__image"]}>
                <img src={props.image} alt="dummy placeholder" />
            </div>
            <div className={props.expand ? classes["card__copy"] : classes["card__copy"]}>
                <h1>{props.title}</h1>
                <div style={{ display: "grid", gridTemplateColumns: "80% 20%" }}>
                    <div>
                        <h2>{props.category}</h2>
                        <h2>Rating: {props.rating ? props.rating.rate : "NA"} Count: {props.rating ? props.rating.count : "NA"}</h2>
                    </div>
                    <div>
                        <h2>Price:₹{props.price}</h2>
                    </div>
                </div>
                <p>
                    {props.description}
                </p>
                <h3>
                    {props.buy ? "" : "Click to read more"}
                </h3>
                {props.buy
                    ? <button onClick={() => ctx.cartHandler(props.index)}>
                        {Array.from(ctx.cartItems).includes(props.index)
                            ? "Remove from Cart"
                            : "Add to Cart"}
                    </button>
                    : ""}
            </div>
        </div>
    );
}

export default Card;