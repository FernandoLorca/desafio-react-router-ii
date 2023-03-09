import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pokemons from './pages/Pokemons';
import PokemonsDetails from './components/PokemonsDetails';

function App() {
  const [JSONData, setJSONData] = useState([]);

  const getData = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await res.json();

    setJSONData(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<Pokemons />} />
      <Route path="/pokemons/:name" element={<PokemonsDetails />} />
    </Routes>
  );
}

export default App;
