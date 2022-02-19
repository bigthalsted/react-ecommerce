import { GET_CART_QUANTITY } from './types'

export const getCartQuantity = () => {
    return (dispatch) => {
    
        dispatch({
            type: GET_CART_QUANTITY
        })
    }
}