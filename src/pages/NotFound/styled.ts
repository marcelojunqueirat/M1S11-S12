import { styled } from "styled-components"

export const NotFoundStyled = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 5.5em;

  font-size: 3em;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.05em;

  span {
    color: #31b3ec 
  }

  div {
    margin-top: 16px;
    display: flex;
    justify-content: center;
  }

  Button {
    width: 300px;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    padding: 7em;
    Button {
      width: 100px;
      height: 50px;
    }
  }
`