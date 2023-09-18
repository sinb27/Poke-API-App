import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [poke, setPoke] = useState("");
  const [pokeSelected, setPokeSelected] = useState(false);
  const [stat, setStat] = useState({
    name: "",
    species: "",
    img: "",
    type: "",
  });

  const searchPoke = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((Response) => {
      setStat({
        name: poke,
        species: Response.data.species.name,
        img: Response.data.sprites.front_default,
        type: Response.data.types[0].type.name,
      });
      setPokeSelected(true);
    })
  }

  return (
    <div className="App">
      <>
      
        <div className="title">
          <h1>
            Pokemon API
          </h1>
          <input type="text" placeholder='Pokemon name' onChange={(event) => {setPoke(event.target.value);}}/>
          <button onClick={searchPoke}>Search Pokemon</button>
        </div>
        <div className="displaypoke">
          {!pokeSelected ? (<h3>Plaese search some pokemon</h3>) : (
            <>
              <h3>Name : {stat.name}</h3>
              <img src={stat.img} />
              <h3>Species : {stat.species}</h3>
              <h3>Type : {stat.type}</h3>
            </>
          )}
        </div>
            
      </>
      
    </div>
  )
}

export default App
