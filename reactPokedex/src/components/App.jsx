import {useState,  useEffect} from 'react'
import '../css/App.css'
import '../fonts/Pocketmonk.otf';
import Pokemon from '../components/Pokemon'
import Header from '../components/Header'

//App component
const App = () => {

  //States
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  //Haalt alle pokemon op
  const fetchAllData = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`)
      .then(response => response.json())
      .then(response => { setPokemonList(response.results) }) 
      .catch(err => console.log(err));
  }

  //Haalt de details van de pokemon op
  const fetchPokemonDetails = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPokemonDetails(prevDetails => ({ ...prevDetails, [data.name]: data }));
  }
  //Zoekfunctie
  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //voert de functie uit als de pagina geladen wordt
  useEffect(() => {
    fetchAllData();
  }, []);

  //Voert de functie uit als de pokemonList veranderd
  useEffect(() => {
    pokemonList.forEach(pokemon => {
      fetchPokemonDetails(pokemon.url);
    });
  }, [pokemonList]);


  //Render alle pokemon
  return (
    <div className="outercontainer">
      <div className="innercontainer">
        <Header></Header>
        <div className="pokedexcontainer">
          <div className="searchbar">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Zoeken" />
          </div>
          <div className="container">
            <div className="row ">
              {pokemonList.length === Object.keys(pokemonDetails).length && pokemonList && filteredPokemonList.map((pokemon, index) => 
              <Pokemon key={index} pokemon={pokemonDetails[pokemon.name]}></Pokemon>
              )}             
            </div>
            </div>
      </div>
      </div>
      </div>
  );
}
export default App
