import { useState, useEffect } from "react"
import { HeaderStyled, LinkStyled } from "./styled"
import { api } from "../../services/api"
import { UsersProps } from "../../interfaces/UsersProps"
import { pages } from "../../data/pages"

function Header() {
  const [userData, setUserData] = useState<UsersProps>();
  const [loading, setLoading] = useState(false)

  const load = async () => {
    setLoading(true)
    const response = await api.get("")
    setUserData(response.data)
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  if(loading) {
    return (
      <p>Carregando....</p>
    )
  }

  return (
    <HeaderStyled>
      <div>
        <LinkStyled to="/">
          <img src={userData && userData.avatar_url} alt={`Foto de ${userData && userData.name}`} />
        </LinkStyled>
        <LinkStyled to="/">
          <p>{userData && userData.name}</p>
        </LinkStyled>
      </div>
      <nav>
        <ul>
          {pages.map(({ route, description }) => (
            <li key={description}>
              <LinkStyled to={route}>
                {description}
              </LinkStyled>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderStyled>
  )
}

export { Header }