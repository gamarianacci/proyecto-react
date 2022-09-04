import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <ItemListContainer />
    </>
  )
}

export default App