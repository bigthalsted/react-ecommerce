import { ADD_TO_CART, GET_CART_QUANTITY } from "../actions/types"

const initialState = {
    cartCount: 0,
    cartCost: 0,
    products: {
        1 : {
            name: "FJALLRAVEN - FOLDSACK NO. 1 BACKPACK, FITS 15 LAPTOPS",
            price: 109.95,
            numbers: 0,
            inCart: false
        },
        2 : {
            name: "MENS CASUAL PREMIUM SLIM FIT T-SHIRTS",
            price: 22.3,
            numbers: 0,
            inCart: false
        },
        3 : {
            name: "MENS COTTON JACKET",
            price: 55.99,
            numbers: 0,
            inCart: false
        },
        4 : {
            name: "MENS CASUAL SLIM FIT",
            price: 15.99,
            numbers: 0,
            inCart: false
        }
    }
}

function cartReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_CART :
            let addQuantity = {...state.products[action.payload]}
            addQuantity.numbers += 1
            addQuantity.inCart = true
            console.log(addQuantity)
            return {
                ...state,
                cartCount : state.cartCount + 1,
                cartCost : state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
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