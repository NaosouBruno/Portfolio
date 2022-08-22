import { TiMail } from "react-icons/ti";
function SendEmail() {
  return (
    <div className="box">
      <button className="curiculoContainer">
        <TiMail className="curiculoContainer--icon" color="#fff" />
        <a
          href="mailto:brunoowap@gmail.com"
          className="curiculoContainer--download"
        >
          Bruno Silva
        </a>
      </button>
    </div>
  );
}

export default SendEmail;
