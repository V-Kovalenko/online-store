import React, {useState} from "react";
import classes from './Basket.module.css';
import {useDispatch, useSelector} from "react-redux";
import {BASKET_ACTION, initialStateBasket, reducerBasket} from "../../../redux/cards/reducerBasket";
import {logDOM} from "@testing-library/react";
import {Header} from "../../Header/Header";


export const Basket = () => {
    const currency = useSelector((store) => store.reducerCurrency.currency)
    const coefficient = useSelector((store) => store.reducerCurrency.priceCoefficient)
    const getItemPrice = (price, count) => {
        return (price * coefficient * count).toFixed(2)
    }
    const basket = useSelector(store => store.reducerBasket.basket)
    const inputNumber = (num, prevNum) => {
        if (isNaN(num)) {
            return prevNum
        }
        return Math.abs(num)
    }
    const getTotalPrice = () => {
        return Object.values(basket).reduce(
            (acc, rec) => {
                return acc + Number(getItemPrice(rec.card.price, rec.count))
            }, 0
        )
    }
    const dispatch = useDispatch()
    return (
        <div className={classes.basket}>
            <div className={classes.header_basket}>
                <tr className={classes.tr}>
                    <th className={classes.img1}>Изображение</th>
                    <th className={classes.name}>Наименование</th>
                    <th className={classes.price}>Цена</th>
                    <th className={classes.currency1}>Валюта</th>
                    <th className={classes.count}>Количетсво</th>
                </tr>
                <div className={classes.total}>Итого: {getTotalPrice()} {currency}</div>

            </div>
            {Object.values(basket).map(it => {
                return (
                    <div key={it.card.id} className={classes.row}>
                        <img className={classes.img} src={it.card.image}/>
                        <div className={classes.title}>{it.card.title}</div>
                        <div className={classes.sum}>{getItemPrice(it.card.price, it.count)}</div>
                        <div className={classes.currency}>{currency}</div>
                        <div>
                            <button className={classes.button_minus}
                                    onClick={() => dispatch({type: BASKET_ACTION.REMOVE_PRODUCT, payload: it.card})}>-
                            </button>
                            <input value={it.count} className={classes.input} onChange={(e) => dispatch({
                                type: BASKET_ACTION.INPUT_PRODUCT,
                                payload: {input: inputNumber(e.target.value, it.count), card: it.card}
                            })}/>
                            <button className={classes.button_plus}
                                    onClick={() => dispatch({type: BASKET_ACTION.ADD_PRODUCT, payload: it.card})}>+
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}