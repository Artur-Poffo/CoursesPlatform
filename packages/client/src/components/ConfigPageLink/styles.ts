import styled from "styled-components";

export const Btn = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: var(--background);
  box-shadow: 3px 3px 10px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  a {
    display: flex;
    align-items: center;
  }
`