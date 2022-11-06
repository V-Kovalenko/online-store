import React, {useState, useEffect} from 'react'
import classes from './MainPage.module.css'
import Card from '../../Cards/Card'

const sortingVariants = {
    'price-asc': {field: 'price', direction: 'ASC'},
    'price-desc': {field: 'price', direction: 'DESC'},
    'title-asc': {field: 'title', direction: 'ASC'},
    'title-desc': {field: 'title', direction: 'DESC'},
    'default': {field: 'id', direction: 'ASC'}
}
export const MainPage = () => {
    const [myCards, setMyCards] = useState([])
    const [sortOptions, setSortOptions] = useState(sortingVariants.default)
    useEffect(() => {
        fetch(`https://http-test-two.vercel.app/api/v1/cards?page=1&sortField=${sortOptions.field}&sortDirection=${sortOptions.direction}`).then(it => it.json())
            .then(it => setMyCards(it.result))
            .catch(err => console.error(err))
    }, [sortOptions])

    return (
        <div className={classes.mainDiv}>
            <div className={classes.form}>
                <span>Сортировать по</span>
                <select className={classes.select} onChange={(e) => setSortOptions(sortingVariants[e.target.value])}>
                    <option disabled>Sort</option>
                    <option value='price-asc'>По цене ↑</option>
                    <option value='price-desc'>По цене ↓</option>
                    <option value='title-asc'>По названию ↑</option>
                    <option value='title-desc'>По названию ↓</option>
                </select>
            </div>
            <div className={classes.content}>
                {myCards.map(it => <Card key={it.id} card={it}/>)}
            </div>

        </div>
    )
}

// ${baseUrl}/api/v1/cards?page=1&sortField=title&sortDirection=DESC