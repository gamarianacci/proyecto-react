import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { Cart } from "./Components/Cart/Cart"
import CartProvider from "./Components/CartContext/CartContext"
import { Checkout } from "./Components/Checkout/Checkout"

const App = () => {
  const conocerProductos = "¡Conocé nuestros productos!"
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={conocerProductos} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={conocerProductos} />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/checkout' element={<Checkout /> }/>
            </Routes>
          </main>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App