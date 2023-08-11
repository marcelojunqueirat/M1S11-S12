import styled from "styled-components"
import { Link } from "react-router-dom"

export const FooterStyled = styled.footer`
  width: 100%;
  margin-top: 4em;
  padding-bottom: 2em;
  bottom: 0;

  div {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .footer-border {
    width: 80%;
    border: 1px solid #21262d;
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 1em;
  }

  li {
    list-style: none;
    margin: 0 2em;
  }

  li:hover {
    color: #CCDAE7;
    transform: scale(1.05);
    transition: transform .5s;;
  }

  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #646f7c;
    margin: 1em 4em;
  }

  a:hover {
    color: #CCDAE7;
    transform: scale(1.05);
    transition: transform .5s;;
  }


  @media (max-width: 450px) {
    a {
      font-size: 13px;;
    }

    li {
      white-space: nowrap;
      margin: 0 1em;
    }
  }
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
`
