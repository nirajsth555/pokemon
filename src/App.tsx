// import './App.css'
import "./app.scss"
import Header from './components/header/Header'
import PokemonList from './components/pokemon/list'

function App() {

  return (
    <div className="App">
      <div className="container mx-auto">
        <Header />
        <PokemonList />
        {/* <PokemonCard /> */}
        {/* <Tabs /> */}
      </div>
    </div>
  )
}

export default App
