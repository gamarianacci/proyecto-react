import React, { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd, item }) => {

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

    return (
        <div className="count">
            <h2>Cantidad</h2>
            <p>{contador}</p>
            <div>
                <button className="button1" onClick={sumarItem}>+</button>
                <button className="button1" onClick={restarItem}>-</button>
            </div>
            <button className="button2" onClick={() => onAdd(item, contador)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount