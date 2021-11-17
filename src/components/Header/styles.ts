import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: #5429cc;
  height: 20vh;
  display: flex;

  nav, ul {
    display: flex;
    list-style: none;
  }
`

export const NavButton = styled.li`
  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
  }
`