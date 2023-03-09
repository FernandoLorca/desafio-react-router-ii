import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const JsonDataContext = createContext();

const UseApiContextProvider = ({ children }) => {
  const [JSONMain, setJSONMain] = useState([]);
  const [JSONPokemons, setJSONPokemons] = useState([]);
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(0);
  const [urlSelected, setUrlSelected] = useState('');
  const navigate = useNavigate();

  const getData = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon-form/20/');
    const data = await res.json();

    setJSONMain([data]);
  };

  const getDataPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await res.json();

    setJSONPokemons(data.results);
  };

  useEffect(() => {
    getData();
    getDataPokemons();
  }, []);

  const getUrlSelected = async () => {
    const res = await fetch(urlSelected);
    const data = await res.json();

    setJSONPokemons(data);
  };

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
    <JsonDataContext.Provider
      value={{
        JSONMain,
        JSONPokemons,
        handleSelectChange,
        handleDetailsClick,
        selectedPokemonIndex,
        urlSelected,
      }}
    >
      {children}
    </JsonDataContext.Provider>
  );
};

export const useApiContext = () => useContext(JsonDataContext);

export default UseApiContextProvider;
