import "./apresentation.scss";
import { ButtonsSociais } from "../../atoms/index";
import ScrollDown from "../../../assets/scroll-down-mouse.gif";

import Me from "../../../assets/eu2.jpeg";
function NameTtile() {
  return (
    <section className="titleContainer" id="start">
      <div className="titleContainer__containerSelfie">
        <img src={Me} className="titleContainer--selfie" alt="Selfie" />
      </div>
      <div className="titleContainer__containerInfo">
        <h1
          className="titleContainer__typography titleContainer__typography--desc "
          data-text="Dev. Front End Bruno Silva"
        >
          Olá, eu sou{" "}
          <span className="titleContainer__typography titleContainer__typography--myName">
            Bruno Silva
          </span>{" "}
        </h1>

        <div className="titleContainer__infos">
          <span
            className="titleContainer__typography titleContainer__typography--profession"
            data-text="&nbsp;Desenvolvedor Front End&nbsp;"
          >
            &nbsp;Desenvolvedor Front End&nbsp;
          </span>
          <ButtonsSociais />
        </div>
      </div>
      <img
        src={ScrollDown}
        alt="ScrollDown"
        className="titleContainer--scrollDown"
      />
    </section>
  );
}

export default NameTtile;
