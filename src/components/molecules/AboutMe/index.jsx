import { useEffect, useState } from "react";
import "./about.scss";
import Zezin from "../../../assets/euezezinho.jpeg";
import { ProgressBar, DownCurriculo } from "../index";

function AboutMe() {
  const [visible, setVisible] = useState(false);
  const addObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && visible === false) {
        setVisible(true);
      }
    });
    observer.observe(document.querySelector("#oberservar"));
  };
  useEffect(() => {
    addObserver();
  });

  return (
    <section id="sobreMim" className="about">
      <div className="about__headerInfos">
        <div>
          <img src={Zezin} alt="Eu e meu gato" className="about--selfie" />
        </div>
        <div className="about__containerDesc">
          <p className="about--desc">
            Olá novamente, fico feliz que esteja aqui, esse sou eu com meu gato
            Zezinho. Nós moramos em Corumbá - MS também conhecida como a capital
            do pantanal, sou formado em Sistemas de Informação pela UFMS e meu
            foco é no front end. Nesse portfólio você irar encontrar os projetos
            que desenvolvi, as tecnologias que domino e opções de entrar em
            contato.
          </p>
        </div>
      </div>

      <ProgressBar
        id="oberservar"
        animationProgress={visible ? "animationProgressBar" : ""}
      />

      <DownCurriculo />
    </section>
  );
}

export default AboutMe;
