import { ADD_TO_CART } from "./types";

export const addToCart = (productId) => {
    return(dispatch) => {
        console.log("adding to cart")
        console.log("product: ", productId)
        dispatch({
            type: ADD_TO_CART,
            payload: productId
        })
    }
}

