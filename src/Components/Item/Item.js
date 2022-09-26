import React from "react"
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ product }) => {
    return (
        <div className="Cards">
            <img className="imgCards" src={product.image} alt={product.product}></img>
            <p className="textCards">{product.product}</p>
            <p className="textCards">${product.price}</p>
            <Link to = {`/item/${product.id}`}>
                <button className="buttonCards">Ver detalle</button>
            </Link>
        </div>
    )
}

export default Item