import styled from "styled-components";

interface IHeader {
  HeaderImage: string | undefined
}

interface IProfileImage {
  ProfileImage: string | undefined
}

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--contrast);
  color: var(--text);
`

export const Header = styled.div<IHeader>`
  width: 100vw;
  height: 50vh;
  padding: 10px 15px;
  background: ${props => props.HeaderImage ? `url(${props.HeaderImage})` : "var(--secondary)"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const Card = styled.div`
  width: 100vw;
  height: max-content;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`

export const ProfileImage = styled.div<IProfileImage>`
  width: 120px;
  height: 120px;
  border: 1px solid var(--primary);
  border-radius: 50%;
  background: ${props => props.ProfileImage ? `url(${props.ProfileImage})` : "var(--primary)"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const ProfileDesc = styled.div`
  max-width: 960px;
  padding: 15px;

  p {
    letter-spacing: .5px;
    line-height: 1.6;
    font-size: 1.25rem;
    margin: 20px 0;
  }
`