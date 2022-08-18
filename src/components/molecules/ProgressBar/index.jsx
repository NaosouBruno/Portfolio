import "./progress.scss";

function ProgressBar() {
  return (
    <div className="skills" data-anime="animation">
      <div className="skills__bar">
        <div className="skills__info">
          <span>HTML</span>
        </div>
        <div className="skills__progress html">
          <span className="skills__progressBar "></span>
        </div>
      </div>
      <div className="skills__bar">
        <div className="skills__info">
          <span>CSS</span>
        </div>
        <div className="skills__progress css">
          <span className="skills__progressBar"></span>
        </div>
      </div>
      <div className="skills__bar">
        <div className="skills__info">
          <span>SCSS</span>
        </div>
        <div className="skills__progress scss">
          <span className="skills__progressBar"></span>
        </div>
      </div>
      <div className="skills__bar">
        <div className="skills__info">
          <span className="skills__infoName">React</span>
        </div>
        <div className="skills__progress react">
          <span className="skills__progressBar"></span>
        </div>
      </div>
      <div className="skills__bar">
        <div className="skills__info">
          <span>JavaScript</span>
        </div>
        <div className="skills__progress js">
          <span className="skills__progressBar"></span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
