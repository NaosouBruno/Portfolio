import "./apresentation.scss";
import Me from "../../../assets/eu.jpeg";
function NameTtile() {
  return (
    <div className="titleContainer">
      <img src={Me} className="titleContainer--selfie" alt="Selfie" />
      <h1
        className="titleContainer__typografy titleContainer__typografy--title"
        data-text="Dev. Front End Bruno Silva"
      >
        Olá, me chamo{" "}
        <span className="titleContainer__typografy titleContainer__typografy--myName">
          Bruno Silva
        </span>{" "}
      </h1>
      <span
        className="titleContainer__typografy titleContainer__typografy--proffesion"
        data-text="&nbsp;Desenvolvedor Front End&nbsp;"
      >
        &nbsp;Desenvolvedor Front End&nbsp;
      </span>

      <div>
        <button>Linkedin</button>
        <button>Github</button>
      </div>
    </div>
  );
}

export default NameTtile;
