import React from 'react'
import classes from './Card.module.css'
import {useDispatch, useSelector} from "react-redux";
import {BASKET_ACTION} from "../../redux/cards/reducerBasket";


const Card = (props) => {
    const currency = useSelector((store) => store.reducerCurrency.currency)
    const coefficient = useSelector((store) => store.reducerCurrency.priceCoefficient)
    const totalPrice = (props.card.price * coefficient).toFixed(2)
    const dispatch = useDispatch()
    return (
        <div className={classes.card}>
            <img className={classes.img} src={props.card.image} alt='logo'/>
            <div className={classes.price}>
                <span><b>{totalPrice}</b></span>
                <span> <b> - {currency}</b> </span>
            </div>
            {props.card.title}
            <b/>
            {props.card.description}
            <button onClick={() => dispatch({type: BASKET_ACTION.ADD_PRODUCT, payload: props.card})}>Add</button>
        </div>

    )
}
export default Card