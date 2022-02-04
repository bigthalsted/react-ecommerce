import { GET_CART_QUANTITY } from './types'

export const getNumbers = () => {
    return (dispatch) => {
        console.log("Getting cart quantity");
        dispatch({
            type: GET_CART_QUANTITY
        })
    }
}