import React from "react"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

export const Cart = (item) => {

    const { cart, removeItem } = useContext(CartContext)

    return (
        <>
            <h2>CART</h2>
            <div>
                {cart ? cart.map(({ item }) => (
                    <div key = {item.id}>
                        <h3>{item.product}</h3>
                        <button onClick={() => removeItem(item)} >Quitar</button>
                    </div>
                ))
                    : "vacio"}
            </div>
        </>
    )
}