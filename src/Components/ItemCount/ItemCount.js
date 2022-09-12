import React, { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const sumarItem = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarItem = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const agregarCarrito = () => {
        setContador(initial);
        onAdd(contador);
    }

    return (
        <div className="count">
            <h2>Carrito</h2>
            <p>{contador}</p>
            <div>
                <button className="button1" onClick={sumarItem}>+</button>
                <button className="button1" onClick={restarItem}>-</button>
            </div>
            <button className="button2" onClick={agregarCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount