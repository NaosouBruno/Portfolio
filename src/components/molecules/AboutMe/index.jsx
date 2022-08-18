import { useState } from "react";

import "./about.scss";
import Zezin from "../../../assets/euezezinho.jpeg";
import { ProgressBar, VideoApresentation } from "../index";

function AboutMe() {
  const [openVideo, setOpenVideo] = useState(false);

  const startVideo = () => {
    setOpenVideo(true);
  };
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
            foco é no front end, não possuo muita experiencia mas tenho força de
            vontade de sobra. Abaixo você encontra meu mapa de conhecimentos:
          </p>
        </div>
      </div>
      <ProgressBar />

      {!openVideo ? (
        <button onClick={startVideo}>Ver video</button>
      ) : (
        <VideoApresentation />
      )}
    </section>
  );
}

export default AboutMe;
