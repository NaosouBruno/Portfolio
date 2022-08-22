import "./contactButtons.scss";
import { TiMail } from "react-icons/ti";
import { AiOutlineWhatsApp } from "react-icons/ai";

function ContactButtons() {
  return (
    <div className="contactButtons">
      <div className="box">
        <button className="curiculoContainer">
          <TiMail className="curiculoContainer--icon" color="#fff" />
          <a
            href="mailto:brunoowap@gmail.com"
            className="curiculoContainer--download"
          >
            Email
          </a>
        </button>
      </div>
      <div className="box">
        <button className="curiculoContainer">
          <AiOutlineWhatsApp className="curiculoContainer--icon" color="#fff" />
          <a
            href="https://api.whatsapp.com/send?phone=5567996760388"
            className="curiculoContainer--download"
          >
            WhatsApp
          </a>
        </button>
      </div>
    </div>
  );
}

export default ContactButtons;
