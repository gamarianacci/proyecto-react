import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {

    const onAdd = (contador) => {
        console.log("Cantidad de productos agregados al carrito:" + contador)
    }

    return (
        <main>
            <h1>
                {greeting}
            </h1>
            <ItemCount stock={20} initial={1} onAdd={onAdd} />
        </main>
    )
}

export default ItemListContainer