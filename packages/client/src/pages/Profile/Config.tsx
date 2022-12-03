import { Container, Title, Form, InputsLabels } from "../../styles/pages/Config"

import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"

import { useForm } from "react-hook-form"

import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

const Config: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const { UpdateUser, user } = useContext(AuthContext)

  async function handleUpdate(data: any) {
    UpdateUser(data)
  }

  return (
    <Container>
      <Title>User Configs:</Title>

      <Form onSubmit={handleSubmit(handleUpdate)} >
        <InputsLabels>
          <div>
            <label htmlFor="userName">UserName:</label>
            <input required defaultValue={user?.userName} {...register("userName")} type="text" name="userName" placeholder="New UserName" />
          </div>
          <div>
            <label htmlFor="about">Bio:</label>
            <input defaultValue={user?.about} {...register("about")} type="text" name="about" placeholder="New Bio" />
          </div>
          <div>
            <label htmlFor="perfilImage">Perfil Image:</label>
            <input required defaultValue={user?.perfilImage} {...register("perfilImage")} type="text" name="perfilImage" placeholder="New URL Perfil Image" />
          </div>
          <div>
            <label htmlFor="headerImage">Header Image:</label>
            <input required defaultValue={user?.headerImage} {...register("headerImage")} type="text" name="headerImage" placeholder="New URL Header Image" />
          </div>
        </InputsLabels>

        <button type="submit" >Save</button>
      </Form>
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

export default Config