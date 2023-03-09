import { useState, useEffect } from 'react';
import { useApiContext } from '../context/UseApiContext';

import Nav from './Nav';

const PokemonsDetails = () => {
  const [pokemonSelected, setPokemonSelected] = useState([]);
  const { urlSelected, selectedPokemonIndex, JSONPokemons } = useApiContext(0);

  const getData = async () => {
    const res = await fetch(urlSelected);
    const data = await res.json();

    setPokemonSelected([data]);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(JSONPokemons);

  return (
    <div className="bg-slate-100 h-screen">
      <Nav />

      {pokemonSelected.map((pokemon, i) => (
        <div
          key={i}
          className="bg-slate-100 h-screen flex flex-col justify-center items-center"
        >
          <h1 className="text-2xl">{pokemon.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              Number(selectedPokemonIndex) + 1
            }.png`}
            alt={pokemon.name}
            className="w-80 h-80"
          />
        </div>
      ))}
    </div>
  );
};

export default PokemonsDetails;
