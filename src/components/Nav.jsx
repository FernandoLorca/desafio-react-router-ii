import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="bg-slate-300 flex justify-between py-5 px-20">
      <div className="h-10 w-10 bg-black rounded-full"></div>
      <ul className="flex gap-5 items-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pokemons">Pokemons</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
