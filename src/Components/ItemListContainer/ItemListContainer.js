import React from "react"
import ItemList from "../ItemList/ItemList"
import ItemCount from "../ItemCount/ItemCount"
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

    const onAdd = (contador) => {
        console.log("Cantidad de productos agregados al carrito:" + contador)
    }

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
            <section>
                <ItemCount stock={20} initial={1} onAdd={onAdd} />
            </section>
        </>
    )
}

export default ItemListContainer