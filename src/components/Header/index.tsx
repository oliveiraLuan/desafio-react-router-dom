import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import homeIcon from "../../assets/homeicon.png";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <NavLink className="item" to="/">Inicio</NavLink>
          <NavLink className="item" to="/products">Produtos</NavLink>
          <NavLink className="item" to="/aboutus">Sobre nós</NavLink>
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
