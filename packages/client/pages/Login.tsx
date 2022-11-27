import { Container } from "../styles/pages/Login"
import DefaultForm from "../components/DefaultForm"

const Login: React.FC = () => {
  return (
    <>
      <Container>
        <DefaultForm title="Sign In" Inputs={[{ name: "email", label: "Email", type: "email", placeholder: "Email" }, { name: "password", label: "Password", type: "password", placeholder: "Password" }]} />
      </Container>
    </>
  )
}

export default Login