import { ButtonStyled } from "./styled"
import { ButtonProps } from "../../interfaces/ButtonProps"

function Button({descriptionButton}: ButtonProps) {
  return (
    <ButtonStyled>
      {descriptionButton}
    </ButtonStyled>
  )
}

export { Button }