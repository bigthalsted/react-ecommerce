import { ADD_TO_CART, GET_CART_QUANTITY } from "../actions/types"

const initialState = {
    cartCount: 0,
    cartCost: 0,  
    selectedProducts: [],  
}

function cartReducer(state = initialState, action) {
    console.log('action', {action, state})

    switch(action.type) {
        case ADD_TO_CART :
            return {
                ...state,
                cartCount : state.selectedProducts.length + 1,
                cartCost : '00.00',
                selectedProducts: [...state.selectedProducts, action.payload]
            }
        case GET_CART_QUANTITY:
            return {
                ...state
            }
        default : 
            return state
    }
}

export default cartReducer