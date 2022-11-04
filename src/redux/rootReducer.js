import {combineReducers} from "redux";
import reducerCurrency from "./reducerCurrency";
import {reducerBasket} from "./cards/reducerBasket";


export const rootReducer = () => {
    return combineReducers({
        reducerCurrency,
        reducerBasket
    })
}