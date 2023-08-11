import { useState, useEffect } from "react"
import { HeaderStyled } from "./styled"
import { api } from "../../services/api"
import { UsersProps } from "../../interfaces/UsersProps"

function Header() {
  const [userData, setUserData] = useState<UsersProps>();

  const load = async () => {
    const response = await api.get("")
    setUserData(response.data)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <HeaderStyled>
      <div>
        <img src={userData && userData.avatar_url} alt={`Foto de ${userData && userData.name}`} />
        <p>{userData && userData.name}</p>
      </div>
      <nav>
        <ul>
          <li>Início</li>
          <li>Sobre mim</li>
          <li>Portfólio</li>
        </ul>
      </nav>
    </HeaderStyled>
  )
}

export { Header }