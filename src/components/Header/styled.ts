import styled from "styled-components"

export const HeaderStyled = styled.header`
    position: sticky;
    top: 0px;

    display: grid;
    grid-template-columns: 2fr 1fr;

    width: 100%;
    height: 80px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.5);

    div {
        display: flex;
        align-items: center;
    }

    img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin: 0 .5rem 0 2em;
    }

    nav {
        display: flex;
        align-items: center;
    }

    ul {
        display: flex;
    }

    li {
        list-style: none;
        margin: 0 2em;
    }

    li:hover {
        color: #B7C5D0;
        transform: scale(1.1);
        transition: transform .5s;;
    }

    img:hover{
        transform: scale(1.1);
        transition: transform .5s;;
    }
    
    div p:hover {
        font-weight: 500;
        transform: scale(1.03);
        transition: transform 0.8s;;
    }

    @media (max-width: 450px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        li {
            white-space: nowrap;
        }

        div {
            display: none;
        }
  }
`