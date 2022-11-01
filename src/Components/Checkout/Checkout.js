import React from "react";
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { db, sales, products } from "../../firebase/firebase"
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

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
        const { name, value } = e.target;
        setDatosComprador({ ...datosComprador, [name]: value });
    }

    const actualizarStock = () => {
        cart.forEach((item) => {
            const actualizar = doc(db, products, item.item.id);
            updateDoc(actualizar, { stock: item.item.stock - item.quantity });
        })
    }

    const datosVenta = (e) => {
        e.preventDefault();
        const salesCollection = collection(db, sales);
        addDoc(salesCollection, compra)
            .then(result => {
                setVentaId(result.id)
                actualizarStock();
                clear();
                setDatosComprador(datosCompradorPlantilla);
            })
    }

    return (
        <>
            {ventaId ?
                <div>
                    <h2 className="formatoH2">Tu pedido ha sido realizado. Te vamos a contactar a la brevedad para definir método de pago y envío. El ID de tu compra es: </h2>
                    <p className="formatoVentaId">{ventaId}</p>
                    <p className="formatoLink">Hacé click <Link to={'/'}>acá</Link> para seguir comprando.</p>
                </div>
                :
                <form className="formatoForm" onSubmit={datosVenta}>
                    <label className="formatoLabel" htmlFor="">Nombre Completo:
                        <input className="formatoInput" type="text" name='nombre' placeholder="John Doe" value={datosComprador.nombre} onChange={getDatosComprador} required />
                    </label>
                    <label className="formatoLabel" htmlFor="">Email:
                        <input className="formatoInput" type='email' name='email' placeholder="johndoe@example.com" value={datosComprador.email} onChange={getDatosComprador} required />
                    </label>
                    <label className="formatoLabel" htmlFor="">Número de Teléfono:
                        <input className="formatoInput" type="number" name='telefono' placeholder="+12345679010" value={datosComprador.telefono} onChange={getDatosComprador} required />
                    </label>
                    <button className="formatoButton" type="submit">Confirmar Compra</button>
                </form>
            }
        </>
    )
}