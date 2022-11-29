import styled from "styled-components";

interface IList {
  show: boolean
}

export const Btn = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: var(--background);
  box-shadow: 0px 3px 10px black;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 999;

  @media (max-width: 605px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #ffff;
  }
`

export const ListContainer = styled.div<IList>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  top: ${props => props.show ? "0" : "-100vh"};
  background-color: var(--background);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 998;
  transition: all .5s ease;

  @media (max-width: 605px) {
    display: flex;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
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