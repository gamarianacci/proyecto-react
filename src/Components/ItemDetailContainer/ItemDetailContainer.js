import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

    const {id} = useParams()
    const [detailProduct, setDetailProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItem(products[parseInt(id)])
            .then(res => {
                setLoading(false)
                setDetailProduct(res)
            })
    }, [id])

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