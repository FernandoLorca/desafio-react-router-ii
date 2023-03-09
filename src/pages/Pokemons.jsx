import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Nav from '../components/Nav';

const Pokemons = () => {
  const [JSONPokemons, setJSONPokemons] = useState([]);
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(0);
  const [urlSelected, setUrlSelected] = useState('');
  const navigate = useNavigate();

  const getData = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await res.json();

    setJSONPokemons(data.results);
  };

  const getUrlSelected = async () => {
    const res = await fetch(urlSelected);
    const data = await res.json();

    setJSONPokemons(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelectChange = e => {
    const index = e.target.value;
    setSelectedPokemonIndex(index);
  };

  const handleDetailsClick = () => {
    const selectedPokemon = JSONPokemons[selectedPokemonIndex];
    const pokemonNumber = selectedPokemon.url.split('/').slice(-2, -1);
    setUrlSelected(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
    getUrlSelected();
    navigate(`/pokemons/${pokemonNumber}`);
  };

  return (
    <>
      <Nav />
      <div className="bg-slate-100 h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl">Selecciona un pokemon</h1>
        <select
          className="mt-10 py-2 px-8 bg-slate-100 border border-black rounded"
          value={selectedPokemonIndex}
          onChange={handleSelectChange}
        >
          {JSONPokemons.map((pokemon, i) => (
            <option key={i} value={i}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <button
          className="mt-10 bg-slate-800 text-white px-5 py-2 rounded hover:opacity-75"
          onClick={handleDetailsClick}
        >
          Ver detalle
        </button>
      </div>
    </>
  );
};

export default Pokemons;
