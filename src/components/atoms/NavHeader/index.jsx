import { useState } from "react";
import "./nav.scss";
import { BtnNavItem } from "../index";
function NavHeader() {
  const [clicked, setClicked] = useState(false);

  const burguerMenu = () => {};
  return (
    <nav className="headerContainer">
      <ul className="headerContainer__list">
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
      <div className="headerContainer__menuIcon" onClick={burguerMenu}>
        <div className="headerContainer__bar"></div>
      </div>
    </nav>
  );
}

export default NavHeader;
