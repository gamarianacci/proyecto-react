import React from "react"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../assets/products"
import Spinner from 'react-bootstrap/Spinner'
import "./ItemListContainer.css"


const ItemListContainer = ({ greeting }) => {

    const customPromise = (products) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }

    const { categoryId } = useParams()
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cat = categoryId ? (products.filter(product => product.category === categoryId)) : (products)
        customPromise(cat)
            .then(res => {
                setLoading(false)
                setListProducts(res)
            })
    }, [categoryId])

    return (
        <>
            <h1>
                {greeting}
            </h1>
            <section>
                {
                    loading ?
                        <Spinner animation="border" variant="light" />
                        :
                        <ItemList listProducts={listProducts} />
                }
            </section>
        </>
    )
}

export default ItemListContainer