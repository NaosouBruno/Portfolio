import { useState } from "react";
import "./nav.scss";
import { BtnNavItem } from "../index";
function NavHeader() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navContainer">
      <ul className={`navContainer__items ${clicked && "open"}`}>
        <li>
          <BtnNavItem name="Inicio" link="start" />
        </li>
        <li>
          <BtnNavItem name="Sobre mim" link="sobreMim" />
        </li>
        <li>
          <BtnNavItem name="Projetos" link="projects" />
        </li>
        <li>
          <BtnNavItem name="Contato" link="contact" />
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
