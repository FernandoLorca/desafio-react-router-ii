import { useApiContext } from '../context/UseApiContext';

import Nav from '../components/Nav';

const Pokemons = () => {
  const {
    JSONPokemons,
    handleSelectChange,
    handleDetailsClick,
    selectedPokemonIndex,
  } = useApiContext();

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
