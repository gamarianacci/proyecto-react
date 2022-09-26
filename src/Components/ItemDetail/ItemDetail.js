import React from "react"
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {
    return (
        <div className="detailedItem">
            <img className="imageDescription" src={item.image} alt={item.product}></img>
            <div className="textDescription">
                <p>{item.product}</p>
                <p>${item.price}</p>
                <p className="itemDescription">{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail