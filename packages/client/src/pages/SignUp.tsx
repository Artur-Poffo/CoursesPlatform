import { Container } from "../styles/pages/SignUp"
import SignUpForm from "../components/SignUpForm"

import { GetStaticProps } from "next"

const SignUp: React.FC = () => {
  return (
    <>
      <Container>
        <SignUpForm />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default SignUp