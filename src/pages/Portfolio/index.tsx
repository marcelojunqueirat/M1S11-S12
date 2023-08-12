import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { PortfolioStyled } from "./styled"
import { projects } from "../../data/projects"

function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioStyled>
        <ul>
          {projects.map(({ project, imgProject, githubLink, deployLink, description }) => (
            <li key={githubLink}>
              <div >
                <img src={imgProject} alt="" />
                <h5>{project}</h5>
                <p>
                  <a href={deployLink} target="_blank" >Deploy da Aplicação</a>
                </p>
                <p>
                  <a href={githubLink} target="_blank" >GitHub do Projeto</a>
                </p>
                <h6>{description}</h6>
              </div>
            </li>
          ))}
        </ul>
      </PortfolioStyled>
      <Footer />
    </>
  )
}

export { Portfolio }