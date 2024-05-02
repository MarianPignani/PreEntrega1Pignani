import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer /> } />
          <Route path={'/categoria/:id'} element={<ItemListContainer /> } />
          <Route path={'/item/:id'} element={<ItemDetailContainer /> } />
        </Routes>
        <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App;
