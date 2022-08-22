import { useState } from "react";
import "./nav.scss";
import { BtnNavItem } from "../../atoms/index";
function NavHeader() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navContainer">
      <ul className={`navContainer__items ${clicked && "open"}`}>
        <li onClick={() => setClicked(!clicked)}>
          <BtnNavItem name="Inicio" link="start" />
        </li>
        <li onClick={() => setClicked(!clicked)}>
          <BtnNavItem name="Sobre mim" link="sobreMim" />
        </li>
        <li onClick={() => setClicked(!clicked)}>
          <BtnNavItem name="Projetos" link="projetos" />
        </li>
        <li onClick={() => setClicked(!clicked)}>
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
