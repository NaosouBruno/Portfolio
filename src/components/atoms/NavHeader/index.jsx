import { useState } from "react";
import "./nav.scss";
import { BtnNavItem } from "../index";
function NavHeader() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navContainer">
      <ul className={`navContainer__items ${clicked && "open"}`}>
        <li>
          <BtnNavItem name="Inicio" />
        </li>
        <li>
          <BtnNavItem name="Sobre mim" />
        </li>
        <li>
          <BtnNavItem name="Projetos" />
        </li>
        <li>
          <BtnNavItem name="Contato" />
        </li>
      </ul>
      <div
        className={`nav-toggle ${clicked && "open"}`}
        onClick={() => setClicked(!clicked)}
      >
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default NavHeader;
