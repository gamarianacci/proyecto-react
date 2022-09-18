import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"

const App = () => {
  const conocerProductos = "¡Conocé nuestros productos!"
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting={conocerProductos} />
        <ItemDetailContainer />
      </main>
    </>
  )
}

export default App