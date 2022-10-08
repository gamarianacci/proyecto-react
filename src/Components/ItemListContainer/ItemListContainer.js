import React from "react"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import "./ItemListContainer.css"


const ItemListContainer = ({ greeting }) => {

    const { categoryId } = useParams()
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        const productCollection = collection(db, "products")
        const q = query(productCollection, where("category", "==", categoryId || null))
        
        getDocs(categoryId ? q : productCollection)
            .then((data) => {
                const lista = data.docs.map((product) => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
                setListProducts(lista)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <>
            <h1>
                {greeting}
            </h1>
            <section>
                {loading ? (
                    <Spinner animation="border" variant="light" />
                ) : error ? (
                    <h1>Ha ocurrido un error</h1>
                ) : (
                    <ItemList listProducts={listProducts} />
                )}
            </section>
        </>
    )
}

export default ItemListContainer