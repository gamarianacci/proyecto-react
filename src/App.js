import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"

const App = () => {
  const conocerProductos = "¡Conocé nuestros productos!"
  return (
    <>
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting={conocerProductos}/>
    </>
  )
}

export default App