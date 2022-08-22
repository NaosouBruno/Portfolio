import "./projects.scss";
import { CardProjects } from "../index";
import food from "../../../assets/foodland.png";
import pokedex from "../../../assets/pokedexLogo.png";
import vendas from "../../../assets/VendasLogo.png";
/* import projectsData from "../../../data/projects.json"; */
function Projects() {
  /* const maped = projectsData.map((project) => (
    <CardProjects
      projectLogo={project.logo}
      projectLogoAlt={project.logoAlt}
      projectTitle={project.title}
      projectDesc={project.desc}
      projectUrl={project.url}
    />
  )); */
  return (
    <section id="projetos" className="projects">
      <div className="projects__typografy">
        <h2 className="projects--title">Projetos</h2>
        <p className="projects--desc"></p>
      </div>
      {/*   {maped} */}
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
      <CardProjects
        projectLogo={pokedex}
        projectLogoAlt="Pokedex logo"
        projectTitle="Pokedex"
        projectDesc="Atividade proposta no bootcamp da Valtech, desenvolvido em 
        dupla. Consiste em consumir a API de PokeApi, projeto feito em React."
        projectUrl="https://github.com/NaosouBruno/Desafio-PokeDex"
      />
      <CardProjects
        projectLogo={vendas}
        projectLogoAlt="Vendas logo"
        projectTitle="E-Commerce"
        projectDesc="Atividade proposta no estágio na AZ Tecnologia. Consiste em
        utilizar uma Rest API para criar uma loja virtual sendo realizado com Vue
        e Vuetify"
        projectUrl="https://github.com/NaosouBruno/Sistema-de-Vendas"
      />
    </section>
  );
}

export default Projects;
