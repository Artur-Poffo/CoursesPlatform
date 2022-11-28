import { Form, InputsLabels } from "./styles"
import { useForm } from "react-hook-form"
import Link from "next/link"

import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

const DefaultForm: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const { SignUp } = useContext(AuthContext)

  async function handleSignUp(data: any) {
    await SignUp(data)
  }

  return (
    <Form onSubmit={handleSubmit(handleSignUp)} >
      <h3>Sign Up</h3>

      <InputsLabels>
        <div>
          <label htmlFor="userName">Username:</label>
          <input required {...register("userName")} type="text" name="userName" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input required {...register("email")} type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input required {...register("password")} type="password" name="password" placeholder="Password" />
        </div>
      </InputsLabels>

      <button type="submit" >Sign Up</button>
      <Link href={"/SignIn"} >Sign In</Link>
    </Form>
  )
}

export default DefaultForm