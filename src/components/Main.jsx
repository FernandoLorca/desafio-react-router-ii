import { useState, useEffect } from 'react';

const Main = () => {
  const [JSONMain, setJSONMain] = useState([]);

  const getData = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon-form/20/');
    const data = await res.json();

    setJSONMain([data]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-slate-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">Bienvenido maestro Pokemón</h1>
      {JSONMain.map((obj, i) => (
        <img key={i} src={obj.sprites.front_default} alt="" />
      ))}
    </div>
  );
};

export default Main;
