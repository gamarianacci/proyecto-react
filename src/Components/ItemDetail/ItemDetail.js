import React from "react"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {

    const [compra, setCompra] = useState(true)
    const { addItem } = useContext(CartContext)

    const onAdd = (item, contador) => {
        setCompra(false)
        addItem(item, contador)
    }

    return (
        <>
            <div className="detailedItem">
                <img className="imageDescription" src={item.image} alt={item.product}></img>
                <div className="textDescription">
                    <p>{item.product}</p>
                    <p>${item.price}</p>
                    <p className="itemDescription">{item.description}</p>
                </div>
            </div>
            <div>
                {
                    compra ?
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} item={item}/>
                        :
                        <div className="count">
                            <Link to="/cart">
                                <button className="button2">Finalizar Compra</button>
                            </Link>
                        </div>
                }
            </div>
        </>
    )
}

export default ItemDetail