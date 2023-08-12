import { ButtonStyled } from "./styled"
import { ButtonProps } from "../../interfaces/ButtonProps"

function Button({descriptionButton, onClick}: ButtonProps) {
  return (
    <ButtonStyled onClick={onClick}>
      {descriptionButton}
    </ButtonStyled>
  )
}

export { Button }