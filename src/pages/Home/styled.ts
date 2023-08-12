import { styled } from "styled-components"

export const HomeStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;

  font-size: 3em;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.05em;

  background-image: url('./bg.gif');
  background-position: top center;
  background-size: 100% auto;
  background-repeat: no-repeat;

  span {
    color: #31b3ec 
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`

export const SectionStyled = styled.section`
  padding: 3em 3em 1em 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: 700;

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
  }

`
