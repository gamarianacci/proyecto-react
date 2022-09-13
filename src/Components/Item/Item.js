import React from "react"
import "./Item.css"

const Item = ({ product }) => {
    return (
        <div className="Cards">
            <img className="imgCards" src={product.image}></img>
            <p className="textCards">{product.product}</p>
            <p className="textCards">${product.price}</p>
            <button className="buttonCards">Ver detalle</button>
        </div>
    )
}

export default Item