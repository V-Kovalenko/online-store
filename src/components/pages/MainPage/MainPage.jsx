import React, {useState, useEffect} from 'react'
import classes from './MainPage.module.css'
import Card from '../../Cards/Card'


export const MainPage = () => {
    const [myCards, setMyCards] = useState([])
    useEffect(() => {
        fetch('https://http-test-two.vercel.app/api/v1/cards?page=1').then(it => it.json())
            .then(it => setMyCards(it.result))
            .catch(err => console.error(err))
    }, [])


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