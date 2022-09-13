import React from "react"
import ItemList from "../ItemList/ItemList"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ greeting }) => {

    const products = [
        {
            id: 1,
            image: "https://images.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg",
            product: "Hamburguesa simple",
            category: "Hamburguesas",
            description: "Hamburguesa simple con lechuga, tomate, cebolla morada, pepino, queso cheddar, bacon y mayonesa casera",
            price: 1000,
            stock: 100,
        },
        {
            id: 2,
            image: "https://betos.com.ar/wp-content/uploads/2019/08/pizza-muzarella.png",
            product: "Pizza Muzzarella",
            category: "Pizzas",
            description: "Pizza con queso muzarella",
            price: 800,
            stock: 100,
        },
        {
            id: 3,
            image: "https://mui.kitchen/__export/1624024904513/sites/muikitchen/img/2021/06/10/wrap-de-pollo.jpg_1103261912.jpg",
            product: "Wrap de Pollo",
            category: "Wraps",
            description: "Wrap de pollo, lechuga, tomate, cebolla morada y mayonesa casera",
            price: 750,
            stock: 100,
        },
        {
            id: 4,
            image: "https://carrefourar.vtexassets.com/arquivos/ids/220177/7790895000997_02.jpg?v=637704294205400000",
            product: "Coca Cola 2,5 Litros",
            category: "Bebidas",
            description: "Coca Cola regular de 2,5 litros",
            price: 350,
            stock: 100,
        },
    ]

    const customPromise = (products) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        customPromise(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
            })
    }, [])

    const onAdd = (contador) => {
        console.log("Cantidad de productos agregados al carrito:" + contador)
    }

    return (
        <main>
            <h1>
                {greeting}
            </h1>
            {
                loading ?
                    <Spinner animation="border" variant="light" />
                    :
                    <ItemList listProducts={listProducts} />
            }
            <ItemCount stock={20} initial={1} onAdd={onAdd} />
        </main>
    )
}

export default ItemListContainer