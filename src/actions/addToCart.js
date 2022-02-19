import { ADD_TO_CART } from "./types";

export const addToCart = (productId) => {
    return(dispatch) => {
        
        dispatch({
            type: ADD_TO_CART,
            payload: productId
        })
    }
}
