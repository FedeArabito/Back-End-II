import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar.jsx'
import LogIn from './Components/LogIn.jsx'
import Register from './Components/Register.jsx'
import Cart from './Components/Cart.jsx'
import ItemListContainer from './Components/ProductContainer.jsx'
import Spinner from './Components/Spinner.jsx'
import { useEffect, useState } from 'react'


function App() {
  
 

  return (
    <>
      <BrowserRouter>
        <NavBar/>        
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer/>} />
          <Route exact path={"/login"} element={<LogIn/>}/>
          <Route exact path={"/register"} element={<Register/>}/>
          <Route exact path={"/cart"} element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
