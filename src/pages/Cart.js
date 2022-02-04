import React, { Fragment } from 'react'
import './Cart.scss'
import { connect } from 'react-redux'

function Cart({cartProps}) {
    console.log(cartProps)

    let productsInCart = [];

    Object.keys(cartProps.products).forEach( function(item) {
        console.log(item)
        console.log(cartProps.products[item].inCart)
        if(cartProps.products[item].inCart) {
            productsInCart.push(cartProps.products[item])
        }
        console.log(productsInCart)
    })

    productsInCart = productsInCart.map( (product, index) => {
        return(
            <Fragment>
                <div className='product'>
                    <span className='sm-hide'>{product.name}</span>
                </div>
                <div className='price sm-hide'>${product.price}</div>
                <div className='quantity'>
                    <span>{product.numbers}</span>
                </div>
                <div className='total'>${product.numbers * product.price}</div>
            </Fragment>
        )
    })

    return (
        <div className='container-products'>
            <div className='product-header'>
                <h5 className='product-title'>PRODUCT</h5>
                <h5 className='price sm-hide'>PRICE</h5>
                <h5 className='quantity'>QUANTITY</h5>
                <h5 className='total'>TOTAL</h5>
            </div>
            <div className='products'>
                { productsInCart }
            </div>
            <div className='cartTotalContainer'>
                <h4 className='cartTotalTitle'>CART TOTAL</h4>
                <h4 className='cartTotal'>${cartProps.cartCost}</h4>
            </div>
            <button>CHECKOUT</button>
        </div>
    )
}

const mapStateToProps = state => ({
    cartProps : state.cartState
})

export default connect(mapStateToProps)(Cart)
