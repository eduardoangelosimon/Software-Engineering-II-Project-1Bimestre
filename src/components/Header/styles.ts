import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--purple);
  height: 20vh;
`

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  float: right;
`

export const NavigationButton = styled.a`
  color: white;
  display: flex;
  padding: 1.5rem;
  flex: row;
  align-items: center;
  cursor: pointer;

  :hover{
    background-color: var(--purple-light);
  }
`