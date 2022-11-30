import styled from "styled-components";

interface Props {
  isAuthenticated: boolean
}

export const Nav = styled.nav<Props>`
  position: fixed;
  width: 100vw;
  height: 7vh;
  background-color: var(--background);
  box-shadow: 1px 1px 10px #000;
  display: ${props => props.isAuthenticated ? "flex" : "none"};
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  z-index: 999;

  @media (max-width: 605px) {
    display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 20px;
  font-weight: 500;

  a {
    text-transform: capitalize;
    letter-spacing: .5px;
    color: var(--text);
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      color: var(--textLight);
    }
  }
`