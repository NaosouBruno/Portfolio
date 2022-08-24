import "./cardProjects.scss";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
function CardProjects(props) {
  return (
    <div className="container">
      <div className="container__card">
        <img
          src={props.projectLogo}
          alt={props.projectLogoAlt}
          className="container__imgProjeto"
        />
        <div className="container__content">
          <h3 className="container__contentTitle">{props.projectTitle}</h3>
          <p className="container__contentDesc">{props.projectDesc}</p>
          <IconContext.Provider
            value={{
              size: "2em",
            }}
          >
            <button className="sociaisGroup__socialButton sociaisGroup__socialButton--projectButton">
              <a href={props.projectUrl}>
                <GoMarkGithub
                  className="sociais--icon"
                  color="#060606"
                  title="Github link"
                />
              </a>
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default CardProjects;
