import React from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { Cart } from "./Components/Cart/Cart"

const App = () => {
  const conocerProductos = "¡Conocé nuestros productos!"
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={conocerProductos} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={conocerProductos} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  )
}

export default App