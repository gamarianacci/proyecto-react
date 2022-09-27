import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {

    const [compra, setCompra] = useState(true)

    const onAdd = () => {
        setCompra(false)
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
                        <ItemCount stock={20} initial={1} onAdd={onAdd} />
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