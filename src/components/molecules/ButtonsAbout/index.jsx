import "./downCurriculo.scss";
import Curriculo from "../../../assets/Currículo.pdf";
import { IconContext } from "react-icons";
import { BsDownload } from "react-icons/bs";

function DownCurriculo() {
  return (
    <IconContext.Provider
      value={{
        size: "2em",
      }}
    >
      <div className="box">
        <button className="curiculoContainer">
          <BsDownload className="curiculoContainer--icon" color="#fff" />
          <a href={Curriculo} download className="curiculoContainer--download">
            Currículo
          </a>
        </button>
      </div>
    </IconContext.Provider>
  );
}

export default DownCurriculo;
