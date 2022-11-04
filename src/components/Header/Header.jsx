import React from "react";
import classes from './Header.module.css'
import logoHeader from '../../assets/img/header/logoHeader.svg'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CURRENCY_ACTIONS} from "../../redux/reducerCurrency";
import basketMainPage from "../../assets/img/basketMainPage/basketMainPage.svg";
export const Header = () => {
    const basket = useSelector(store => store.reducerBasket.basket)
    const dispatch = useDispatch()
    const getCount = Object.values(basket).reduce(
            (acc,rec) => {
                return  acc+ rec.count
            },0
        )
    return (
        <div className={classes.header}>

            <NavLink to='/mainPage'><img className={classes.logoHeader} src={logoHeader} alt='logo'/></NavLink>
            <button onClick={() =>dispatch({type: CURRENCY_ACTIONS.CHANGE_CURRENCY, payload:'USD'})}>USD</button>
            <button onClick={() =>dispatch({type: CURRENCY_ACTIONS.CHANGE_CURRENCY, payload:'RUB'})}>RUB</button>
            <button onClick={() =>dispatch({type: CURRENCY_ACTIONS.CHANGE_CURRENCY, payload:'CAD'})}>CAD</button>
            <span>  Итого </span>
            <div className={classes.vueCount}>
                <NavLink to='/basket'><img className={classes.imgBasket} src={basketMainPage} alt="logo"/></NavLink>
                {!!getCount&& <div className={classes.vueCountBasket}>{getCount}</div>}
            </div>
        </div>
    )
}