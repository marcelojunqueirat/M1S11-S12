import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { HomeStyled, SectionStyled } from "./styled"
import { Button } from "../../components/Button"

function Home() {
  return (
    <>
      <Header />
      <HomeStyled>
        <h2>Full Stack <span>Developer</span></h2>
      </HomeStyled>
      <SectionStyled>
        <h3>
          Sou entusiasta de tecnologia, atraído pelo <span>desenvolvimento web</span>. Encaro os <span>desafios</span> como degraus para o <span>crescimento</span> sempre buscando soluções <span>inovadoras</span>.
        </h3>
        <h3>
          Possuo ampla <span>experiência</span> na area de tecnologia por ja ter atuado nas areas de <span>suporte técnico, implantação de sistemas, análise de qualidade de software</span> além de <span>desenvolvimento web</span>, me permitindo uma visão técnica e objetiva de todo o <span>processo de desenvolvimento de software.</span>
        </h3>
        <h3>
          Atuei em projetos de <span>média e alta complexidade</span> como sistemas de <span>Infraestura Rodoviária</span> bem como sistemas para <span>Supermercados e Lojas de Atacado e varejo</span>, além de projetos mais exclusivos como desenvolvimento de <span>landing pages, e-commerce e jogos</span>.
        </h3>
      </SectionStyled>
      <Footer />
    </>
  )
}

export default Home;