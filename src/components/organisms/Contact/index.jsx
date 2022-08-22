import "./contact.scss";

import { ContactButtons } from "../../molecules/index";
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact--title">Contato</h2>
      <ContactButtons />
    </section>
  );
}

export default Contact;
