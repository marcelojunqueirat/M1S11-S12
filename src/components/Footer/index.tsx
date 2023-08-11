import { FooterStyled, LinkStyled } from "./styled"
import { pages } from "../../data/Pages"

function Footer() {
  return (
    <FooterStyled>
      <div>
        <div className="footer-border" />
      </div>
      <ul>
        {pages.map(({ route, description }) => (
          <li key={description}>
            <LinkStyled to={route}>
              {description}
            </LinkStyled>
          </li>
        ))}
      </ul>
      <a href="#top">© Marcelo Teixeira | Desenvolvedor ⚡</a>
    </FooterStyled>
  )
}

export { Footer }