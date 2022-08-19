import "./projects.scss";
import { CardProjects } from "../index";
import food from "../../../assets/foodland.png";
function Projects() {
  return (
    <section id="projetos" className="projects">
      <CardProjects
        projectLogo={food}
        projectLogoAlt="Foodieland logo"
        projectTitle="Foodieland"
        projectDesc="Projeto proposto no bootcamp da Valtech, desenvolvido 
        em grupo. Consiste na criação de blog de receitas, nesse projeto 
        utilizamos de conceitos como Atomic Design, BEM, Mobile First. Além de 
        tecnologias como React, React Router, Redux e SASS"
        projectUrl="https://github.com/NaosouBruno/V-Food"
      />
    </section>
  );
}

export default Projects;
