import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import "bootstrap-icons/font/bootstrap-icons.css"
import "./CartWidget.css"

const CartWidget = () => {

    const {cart} = useContext(CartContext)

    const precioTotal = (array) => {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i].quantity;
        }
        return sum
    }

    return (
        <div className="cartIcon">
            <i className="bi-cart"></i>
            {cart.length !== 0 ? precioTotal(cart) : ""}
        </div>
    )
}

export default CartWidget