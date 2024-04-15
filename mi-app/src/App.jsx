import ItemListContainer from './components/ItemListContainer'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer texto = "productos a mostrar" />
    </div>
  )
}

export default App
