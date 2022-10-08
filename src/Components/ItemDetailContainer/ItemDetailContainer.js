import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from 'react-bootstrap/Spinner';
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [detailProduct, setDetailProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        const productCollection = collection(db, "products")
        const refDoc = doc(productCollection, id)
        getDoc(refDoc)
            .then((result) => {
                setDetailProduct(
                    {
                        id: result.id,
                        ...result.data()
                    }
                )
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <>
            <section>
                {loading ? (
                    <Spinner animation="border" variant="light" />
                ) : error ? (
                    <h1>Ha ocurrido un error</h1>
                ) : (
                    <ItemDetail item={detailProduct} />
                )}
            </section>
        </>
    )
}

export default ItemDetailContainer