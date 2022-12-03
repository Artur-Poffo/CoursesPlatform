import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: var(--primary);
  margin: 10vh 0 50px 0;
`

export const Form = styled.form`
  width: 400px;
  padding: 50px 0;
  background-color: var(--background);
  box-shadow: 0px 3px 10px #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 0 0 40px 0;
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: var(--primary);
  }

  button {
    width: 50%;
    color: var(--textLight);
    background-color: var(--primary);
    padding: 8px 60px;
    border-radius: 20px;
    cursor: pointer;
    transition: all .4s;

    &:hover {
      transform: translateY(-4px);
    }
  }

  a {
    margin-top: 20px;
    font-weight: bold;
    color: var(--primary);
    text-decoration: underline;
  }
`

export const InputsLabels = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;

    label {
      padding: 0px 10px;
      color: var(--text);
      font-weight: bolder;
    }

    input {
      color: var(--text);
      width: 100%;
      padding: 12px;
      background-color: var(--background);
      border: 1px solid #1b1b1b;
      border-radius: 20px;
      transition: all .3s ease;

      &:focus {
        border: 1px solid var(--primary);
      }
    }
  }
`