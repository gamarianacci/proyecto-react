import React from "react"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

export const Cart = () => {

    const { cart, removeItem, clear } = useContext(CartContext)
    console.log(cart)

    return (
        <>
            <h2>CART</h2>
            {cart.length !== 0 ? 
            cart.map(({ item }) => (
                <div key={item.id}>
                    <p>{item.product}</p>
                    <p>{(cart[item.id]).quantity}</p>
                    <button onClick={() => removeItem(item)} >Quitar</button>
                    <button onClick={() => clear(item)} >Vaciar Carrito</button>
                </div>
            ))
            :
            <div>
                <p>Carrito Vacio</p>
            </div>}
        </>
    )
}