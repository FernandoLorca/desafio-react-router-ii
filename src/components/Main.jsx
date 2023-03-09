import { useApiContext } from '../context/UseApiContext';

const Main = () => {
  const { JSONMain } = useApiContext();

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
