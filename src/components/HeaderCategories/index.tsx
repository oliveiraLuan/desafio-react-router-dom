import { NavLink } from "react-router-dom";
import "./styles.css";

export default function HeaderCategories() {
  return (
    <>
      <header className="header-categories">
        <nav>
            <NavLink to="/products/computers" className={({isActive}) => isActive ? "item-categories item-active" : "item-categories"}>Computadores</NavLink>
            <NavLink to="/products/electronics" className={({isActive}) => isActive ? "item-categories item-active" : "item-categories"}>Eletrônicos</NavLink>
            <NavLink to="/products/books" className={({isActive}) => isActive ? "item-categories item-active" : "item-categories"}>Livros</NavLink>
        </nav>
      </header>
    </>
  );
}
