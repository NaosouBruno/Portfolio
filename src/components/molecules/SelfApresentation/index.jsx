import "./apresentation.scss";
import { ButtonsSociais } from "../../atoms/index";

import Me from "../../../assets/eu2.jpeg";
function NameTtile() {
  return (
    <section className="titleContainer" id="start">
      <div className="titleContainer__containerSelfie">
        <img src={Me} className="titleContainer--selfie" alt="Selfie" />
      </div>
      <div className="titleContainer__containerInfo">
        <h1
          className="titleContainer__typografy titleContainer__typografy--desc "
          data-text="Dev. Front End Bruno Silva"
        >
          Olá, eu sou{" "}
          <span className="titleContainer__typografy titleContainer__typografy--myName">
            Bruno Silva
          </span>{" "}
        </h1>

        <div className="titleContainer__infos">
          <span
            className="titleContainer__typografy titleContainer__typografy--proffesion"
            data-text="&nbsp;Desenvolvedor Front End&nbsp;"
          >
            &nbsp;Desenvolvedor Front End&nbsp;
          </span>
          <ButtonsSociais />
        </div>
      </div>
    </section>
  );
}

export default NameTtile;
