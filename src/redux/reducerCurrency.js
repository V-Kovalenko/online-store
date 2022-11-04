
export const CURRENCY_ACTIONS = {
    CHANGE_CURRENCY: 'CHANGE_CURRENCY'
}
const prices = {
    USD: 1,
    RUB: 61.5,
    CAD: 1.36
}
const initialState = {currency: 'USD', priceCoefficient: prices.USD}
const reducerCurrency = (state=initialState, action) => {
    switch (action.type) {
        case CURRENCY_ACTIONS.CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.payload,
                priceCoefficient: prices[action.payload]
            }
        default:
            return state
    }
}

export default reducerCurrency