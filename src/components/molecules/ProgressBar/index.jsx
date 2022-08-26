import "./progress.scss";

function ProgressBar(props) {
  return (
    <div id={props.id} className="skills" data-anime="animation">
      <div className="skills__bar">
        <div className="skills__info">
          <span>HTML</span>
        </div>
        <div className={`skills__progress ${props.animationProgress} html`}>
          <span
            className={`skills__progressBar ${props.animationProgress} `}
          ></span>
        </div>
      </div>
      <div className="skills__bar">
        <div className="skills__info">
          <span>CSS</span>
        </div>
        <div className={`skills__progress ${props.animationProgress} css`}>
          <span
            className={`skills__progressBar ${props.animationProgress}`}
          ></span>
        </div>
      </div>
      <div className="skills__bar">
        <div className="skills__info">
          <span>SCSS</span>
        </div>
        <div className={`skills__progress ${props.animationProgress} scss `}>
          <span
            className={`skills__progressBar ${props.animationProgress}`}
          ></span>
        </div>
      </div>
      <div className="skills__bar">
        <div className="skills__info">
          <span>React</span>
        </div>
        <div className={`skills__progress ${props.animationProgress} react`}>
          <span
            className={`skills__progressBar ${props.animationProgress}`}
          ></span>
        </div>
      </div>
      <div className="skills__bar">
        <div className="skills__info">
          <span>JavaScript</span>
        </div>
        <div className={`skills__progress ${props.animationProgress} js`}>
          <span
            className={`skills__progressBar ${props.animationProgress}`}
          ></span>
        </div>
      </div>
      <div className="skills__bar">
        <div className="skills__info">
          <span>Inglês</span>
        </div>
        <div className={`skills__progress ${props.animationProgress} ing`}>
          <span
            className={`skills__progressBar ${props.animationProgress}`}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
