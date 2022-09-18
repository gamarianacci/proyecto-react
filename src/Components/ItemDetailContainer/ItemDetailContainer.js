import React from "react";
import { useState, useEffect } from "react";
import { products } from "../../assets/products"
import ItemDetail from "../ItemDetail/ItemDetail"; 
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {

    const getItem = (item) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item)
            }, 2000)
        })
    }

    const [detailProduct, setDetailProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItem(products[0])
            .then(res => {
                setLoading(false)
                setDetailProduct(res)
            })
    }, [])

    return (
        <>
            <section>
                {
                    loading ?
                        <Spinner animation="border" variant="light" />
                        :
                        <ItemDetail item={detailProduct} />
                }
            </section>
        </>
    )
}

export default ItemDetailContainer