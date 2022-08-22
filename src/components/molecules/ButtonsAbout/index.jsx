import "./downCurriculo.scss";
import Curriculo from "../../../assets/Currículo.pdf";
import { IconContext } from "react-icons";
import { BsDownload } from "react-icons/bs";
import { AiFillVideoCamera } from "react-icons/ai";

/* import { TiMail } from "react-icons/ti"; */
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
      <div className="box">
        <button className="curiculoContainer">
          <AiFillVideoCamera className="curiculoContainer--icon" color="#fff" />
          <a
            href="https://www.youtube.com/shorts/zfyyWlv6EAA"
            className="curiculoContainer--download"
          >
            Apresentation
          </a>
        </button>
      </div>
      {/*   <div className="box">
        <button className="curiculoContainer">
          <TiMail className="curiculoContainer--icon" color="#fff" />
          <a
            href="mailto:brunoowap@gmail.com"
            className="curiculoContainer--download"
          >
            Bruno Silva
          </a>
          .
        </button>
      </div> */}
    </IconContext.Provider>
  );
}

export default DownCurriculo;
