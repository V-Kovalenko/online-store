import React, {useState} from 'react'
import classes from './MainPage.module.css'
import {cards} from '../../../redux/cards/cards';
import Card from '../../Cards/Card'


export const MainPage = () => {
    const [myCards, setMyCards] = useState(cards)

    return (
        <div className={classes.mainDiv}>
            <div className={classes.form}>
                    <span>Сортировать по</span>
                    <select className={classes.select}>
                        <option disabled>Sort</option>
                        <option>По цене</option>
                        <option>По названию</option>
                    </select>


            </div>
            <div className={classes.content}>
                {myCards.map(it => <Card key={it.id} card={it}/>)}
            </div>

        </div>
    )
}