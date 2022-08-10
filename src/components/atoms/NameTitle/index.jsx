import "./nameTitle.scss";
function NameTtile() {
  return (
    <div className="titleContainer">
      <h1
        className="titleContainer--neon"
        data-text="Dev. Front End Bruno Silva"
      >
        Dev. Front End Bruno Silva
      </h1>
      <div className="titleContainer--gradient"></div>
      <div className="titleContainer--spotlight"></div>
    </div>
  );
}

export default NameTtile;
