import { Container, Header, Card, ProfileImage, ProfileDesc } from "../../styles/pages/Profile"

import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"

import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

import ConfigPageLink from "../../components/ConfigPageLink"

const Profile: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <Container>
      <Header HeaderImage={user?.headerImage}>
        <ConfigPageLink />
      </Header>

      <Card>
        <div>
          <ProfileImage ProfileImage={user?.perfilImage} />
          <h1>{user?.userName}</h1>
        </div>

        <ProfileDesc>
          <p>{user?.about ? user.about : "Add a Biography to your user to see it here..."}</p>
        </ProfileDesc>
      </Card>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['courses.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: "/SignIn",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Profile