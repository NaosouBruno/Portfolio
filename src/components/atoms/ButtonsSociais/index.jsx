import "./sociais.scss";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

function ButtonsSociais() {
  return (
    <IconContext.Provider
      value={{
        size: "3em",
      }}
    >
      <div className="sociaisGroup">
        <button className="sociaisGroup__socialButton">
          <a href="https://github.com/NaosouBruno">
            <GoMarkGithub color="#fff" title="Github link" />
          </a>
        </button>
        <button className="sociaisGroup__socialButton">
          <a href="https://www.linkedin.com/in/bruno-silva-759603163/">
            <FaLinkedin size="3em" color="#fff" />
          </a>
        </button>
      </div>
    </IconContext.Provider>
  );
}

export default ButtonsSociais;
