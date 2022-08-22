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

      {/* fim */}
      {/* <div className="container__card">
        <div className="container__content">
          <h3 className="container__contentTitle">Card Two</h3>
          <p className="container__contentDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
            obcaecati. Alias vitae rerum enim temporibus. Aliquid possimus
            mollitia perferendis quo. Doloribus laboriosam dignissimos enim quos
            est, doloremque animi vero harum.
          </p>
          <a href="#" className="container__contentLink">
            Read More
          </a>
        </div>
      </div>
      <div className="container__card">
        <div className="container__content">
          <h3 className="container__contentTitle">Card Tree</h3>
          <p className="container__contentDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
            obcaecati. Alias vitae rerum enim temporibus. Aliquid possimus
            mollitia perferendis quo. Doloribus laboriosam dignissimos enim quos
            est, doloremque animi vero harum.
          </p>
          <a href="#" className="container__contentLink">
            Read More
          </a>
        </div>
      </div> */}
      {/* <div className="containerCard">
        <div className="containerCard__face containerCard__face--front">
          <h2>Front</h2>
        </div>
        <div className="containerCard__face containerCard__face--back">
          <h2>Back</h2>
        </div>
      </div> */}
    </div>
  );
}

export default CardProjects;
