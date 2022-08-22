import "./contact.scss";

import { SendEmail } from "../../molecules/index";
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact--title">Contato</h2>
      <SendEmail />
    </section>
  );
}

export default Contact;
