import React from "react"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"

export const Cart = () => {

    const { cart, removeItem, clear, precioTotal } = useContext(CartContext)

    return (
        <>
            <h2>CART</h2>
            <div>
                {cart.length !== 0 ?
                    cart.map(({ item, quantity }) => (
                        <div className="cartStyle" key={item.id}>
                            <p>{quantity}</p>
                            <p>{item.product}</p>
                            <p>Precio: ${item.price}</p>
                            <button className="button2" onClick={() => removeItem(item)} >Quitar</button>
                        </div>
                    ))
                    :
                    <div className="cartStyleEmpty">
                        <p>No hay productos en el carrito</p>
                        <Link className="cartLink" to="/">
                            <button className="buttonCompraYa">Ir a Comprar</button>
                        </Link>
                    </div>}
            </div>
            <p className="cartTotal">Total: ${precioTotal(cart)}</p>
            <button className="buttonEmptyCart" onClick={() => clear()} >Vaciar Carrito</button>
            <Link to={'/checkout'}>
                <button>Finalizar Compra</button>
            </Link>
        </>
    )
}