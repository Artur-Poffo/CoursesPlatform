import { Container } from "../styles/pages/Login"
import LoginForm from "../components/LoginForm"

import { GetStaticProps } from "next"

const Login: React.FC = () => {
  return (
    <>
      <Container>
        <LoginForm />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Login