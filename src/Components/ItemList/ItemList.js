import React from "react"
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({ listProducts }) => {
    return (
        <div className="listCards">
            {listProducts.map((prod, i) => <Item key={`${prod.product}-${i}`} product={prod} />)}
        </div>
    )
}

export default ItemList