// import './App.css'
import "./app.scss"
import MaxTeamLimitDialogProvider from "./components/context/MaxTeamLimitDialogProvider"
import Header from './components/header/Header'
import PokemonList from './components/pokemon/list'

function App() {

  return (
    <div className="App">
      <div className="container mx-auto">
        <MaxTeamLimitDialogProvider>
          <Header />
          <PokemonList />
        </MaxTeamLimitDialogProvider>
        {/* <PokemonCard /> */}
        {/* <Tabs /> */}
      </div>
    </div>
  )
}

export default App
