import styled from "styled-components";

interface PerfilImage {
  img: string | undefined
}

interface Props {
  isAuthenticated: boolean
}

export const Container = styled.div<Props>`
  display: ${props => props.isAuthenticated ? "block" : "none"};
  width: 53px;
  height: 53px;
  border: 1px solid var(--primary);
  padding: 5px;
  border-radius: 50%;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    padding: 0;
  }
`

export const Image = styled.div<PerfilImage>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${props => props.img ? `url(${props.img})` : "var(--secondary)"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`