export const BASKET_ACTION = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
    INPUT_PRODUCT: 'INPUT_PRODUCT'
}

export const initialStateBasket = {
    basket: {}
}
export const reducerBasket = (state = initialStateBasket, action) => {
    switch (action.type) {
        case BASKET_ACTION.ADD_PRODUCT:
            const previousAddCount = state.basket[action.payload.id]?.count || 0
            return {
                ...state,
                basket: {
                    ...state.basket,
                    [action.payload.id]: {
                        count: previousAddCount + 1,
                        card: action.payload
                    }
                }
            }
        case BASKET_ACTION.REMOVE_PRODUCT:
            const previousRemoveCount = state.basket[action.payload.id]?.count || 0
            const isLastElement = previousRemoveCount  <= 1
            if (isLastElement) {
                const {[action.payload.id]: element, ...basket} = state.basket
                return {
                    ...state,
                    basket
                }
            }
            return {
                ...state,
                basket: {
                    ...state.basket,
                    [action.payload.id]: {
                        count: previousRemoveCount - 1,
                        card: action.payload
                    }
                }
            }

        case BASKET_ACTION.INPUT_PRODUCT:
            return {
                ...state,
                basket: {
                    ...state.basket,
                    [action.payload.card.id]: {
                        count: action.payload.input,
                        card: action.payload.card
                    }
                }
            }


        default:
            return state
    }
}


