
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
    <>
    <h1>Pokedex</h1>
    <Pokedex data={pokemons}/>
    </>
  );
}

export default App;
