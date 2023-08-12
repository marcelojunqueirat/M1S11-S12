import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { AboutMeStyled } from "./styled"

function AboutMe() {
  return (
    <>
      <Header />
      <AboutMeStyled>
        <h2><span>Compromisso</span></h2>
        <h3>
          Minha dedicação ao <span>desenvolvimento de software</span> e à <span>análise de qualidade</span> é guiada por um compromisso com a <span>excelência</span>. Trabalhando como um desenvolvedor <span>minucioso</span> e analista atento, busco constantemente <span>aprimorar</span> cada aspecto dos projetos. Essa abordagem visa garantir que os produtos finais não apenas funcionem bem, mas também ofereçam <span>experiências notáveis</span> aos usuários, equilibrando inovação com um <span>alto padrão de qualidade</span>.
        </h3>
        <h2><span>Trajetória</span></h2>
        <h3>
          Minha primeira vivência no campo da tecnologia foi como <span>analista de suporte</span>, onde tive oportunidade de conhecer as mais diversas áreas do <span>processo</span>, desde o atendimento ao <span>cliente</span> até o <span>processo de desenvolvimento</span> em si, no qual pude atuar como apoio em <span>sustentação</span> e corretivas, além de poder, contribuir para o <span>desenvolvimento e implantação de projetos de e-commerce</span>.
        </h3>
        <h3>
          Visando me <span>aprofundar</span> ainda mais nessa área iniciei uma nova jornada como <span>Analista de Qualidade de Software</span>, onde primeiramente me dediquei a implantação de um <span>processo de qualidade</span> e controle de versão no setor que era atuante e em seguida dei inicio a um projeto de desenvolvimento de <span>testes automatizados end-to-end</span> além de ser responsável por <span>padronizar o processo</span> e treinar novos colaboradores.
        </h3>
      </AboutMeStyled>
      <Footer />
    </>
  )
}

export { AboutMe }