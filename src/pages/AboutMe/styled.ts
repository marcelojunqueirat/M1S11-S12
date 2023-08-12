import { styled } from "styled-components"

export const AboutMeStyled = styled.main`
  padding: 0em 3em 1em 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: 700;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;

    font-size: 3em;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: -0.05em;
  }

  h3 {
    text-align: justify;
    line-height: 1.2;
    letter-spacing: -0.05em;
    margin-bottom: 16px;
  }

  span {
    color: #31b3ec 
  }

  @media (max-width: 480px) {
    padding: 1em;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-weight: 700;
    h2 {
      padding: 1rem;
      text-align: center;
    }
  }
`