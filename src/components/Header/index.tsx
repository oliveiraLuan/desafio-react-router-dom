import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import homeIcon from "../../assets/homeicon.png";

export default function Header() {
  return (
    <>
      <header className="header-clients">
        <nav>
          <NavLink className={({isActive}) => isActive ? "item item-active" : "item"} to="/home">Inicio</NavLink>
          <NavLink className={({isActive}) => isActive ? "item item-active" : "item"} to="/products">Produtos</NavLink>
          <NavLink className={({isActive}) => isActive ? "item item-active" : "item"} to="/about">Sobre nós</NavLink>
        </nav>
        <div>
            <Link to="/home">
                <img className="homeicon" src={homeIcon} alt="Ícone para home"/>
            </Link>
        </div>
      </header>
    </>
  );
}
