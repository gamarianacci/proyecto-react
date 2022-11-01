import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { Cart } from "./Components/Cart/Cart"
import CartProvider from "./Components/CartContext/CartContext"
import { Checkout } from "./Components/Checkout/Checkout"
import {Error404} from "./Components/Error404/Error404"

const App = () => {
  const conocerProductos = "¡Conocé nuestros productos!"
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>
              <Route exact path="/" element={<ItemListContainer greeting={conocerProductos} />} />
              <Route exact path="/category/:categoryId" element={<ItemListContainer greeting={conocerProductos} />} />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path='/checkout' element={<Checkout />} />
              <Route path="*" element={<Error404/>} />
            </Routes>
          </main>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App