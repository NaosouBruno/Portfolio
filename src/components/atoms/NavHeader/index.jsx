import { useState } from "react";
import "./nav.scss";
import { BtnNavItem } from "../index";
function NavHeader() {
  const [clicked, setClicked] = useState(false);

  const burguerMenu = () => {};
  return (
    <nav className="headerContainer">
      <div className="headerContainer__menuIcon" onClick={burguerMenu}>
        <i className={clicked ? "fas fas-times" : "fas fas-bars"}></i>
      </div>
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
    </nav>
  );
}

export default NavHeader;
