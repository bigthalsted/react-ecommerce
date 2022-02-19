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
            price: 22.30,
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
    let selectedProduct = ""
    switch(action.type) {
        case ADD_TO_CART :
            selectedProduct = {...state.products[action.payload]}
            selectedProduct.numbers += 1
            selectedProduct.inCart = true
            
            return {
                ...state,
                cartCount : state.cartCount + 1,
                cartCost : state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: selectedProduct
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