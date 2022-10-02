import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import "bootstrap-icons/font/bootstrap-icons.css"
import "./CartWidget.css"

const CartWidget = () => {

    const {cart} = useContext(CartContext)

    return (
        <>
            <i className="bi bi-cart"></i>
            {cart.length}
        </>
    )
}

export default CartWidget