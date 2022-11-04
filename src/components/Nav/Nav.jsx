import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Nav.module.css'


const setActive = ({isActive}) => isActive? classes.activeLink : ''
export const Nav = () => {
    return (
        <nav className={classes.navigation}>
            <div className={classes.div_main}>
                <div className={classes.item}>
                    <NavLink to='/mainPage' className={({isActive}) => isActive? classes.activeLink : ''}>MainPage</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/basket' className={setActive}>Basket</NavLink>
                </div>
            </div>


        </nav>
    )
}