import React from "react";
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { db, sales, products } from "../../firebase/firebase"
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Checkout() {
    const datosCompradorPlantilla = {
        nombre: "",
        email: "",
        telefono: "",
    }

    const { cart, clear, precioTotal } = useContext(CartContext)
    const [datosComprador, setDatosComprador] = useState(datosCompradorPlantilla);
    const [ventaId, setVentaId] = useState('');

    const total = precioTotal(cart);

    console.log(cart)

    const compra = {
        comprador: datosComprador,
        items: cart.map((item) => ({
            product: item.item.product,
            price: item.item.price,
            cantidad: item.quantity,
        })),
        total,
        fecha: serverTimestamp()
    }

    const getDatosComprador = (e) => {
        const {name, value} = e.target;
        setDatosComprador({...datosComprador, [name]: value});
    }

    const actualizarStock = () => {
        cart.forEach((item) => {
            const actualizar = doc(db, products, item.item.id);
            updateDoc(actualizar, {stock: item.item.stock - item.quantity});
        })
    }

    const datosVenta = (e) => {
        e.preventDefault();
        const salesCollection = collection(db, sales);
        addDoc(salesCollection, compra)
        .then( result => {
            setVentaId(result.id)
            actualizarStock();
            clear();
            setDatosComprador(datosCompradorPlantilla);
        })
    }

    return (
        <>
            {ventaId? 
                <h2>Tu pedido ha sido realizado. Te vamos a contactar a la brevedad para definir método de pago y envío. El ID de tu compra es: {ventaId}.
                    Hacé click <Link to={'/'}>acá</Link> para seguir comprando.
                </h2>
            :
                <form onSubmit={datosVenta}>
                    <label htmlFor="">Nombre Completo:
                        <input type="text" name='nombre' placeholder="John Doe" value={datosComprador.nombre} onChange={getDatosComprador}/>
                    </label>
                    <label htmlFor="">Email
                        <input type='email' name='email' placeholder="johndoe@example.com" value={datosComprador.email} onChange={getDatosComprador} />
                    </label>
                    <label htmlFor="">Número de Teléfono
                        <input type="number" name='telefono' placeholder="+12345679010" value={datosComprador.telefono} onChange={getDatosComprador}/>
                    </label>
                    <button type="submit">Confirmar Compra</button>
                </form>
            }
        </>
    )
}