import { FooterStyled } from "./styled"

function Footer() {
  return (
    <FooterStyled>
      <div>
        <div className="footer-border" />
      </div>
      <ul>
        <li>Início</li>
        <li>Sobre mim</li>
        <li>Portfólio</li>
      </ul>
      <a href="#top">© Marcelo Teixeira | Desenvolvedor ⚡</a>
    </FooterStyled>
  )
}

export { Footer }