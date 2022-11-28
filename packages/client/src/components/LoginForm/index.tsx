import { Form, InputsLabels } from "./styles"
import { useForm } from "react-hook-form"
import Link from "next/link"

import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

const DefaultForm: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const { SignIn } = useContext(AuthContext)

  async function handleSignIn(data: any) {
    await SignIn(data)
  }

  return (
    <Form onSubmit={handleSubmit(handleSignIn)} >
      <h3>Sign In</h3>

      <InputsLabels>
        <div>
          <label htmlFor="email">Email</label>
          <input required {...register("email")} type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input required {...register("password")} type="password" name="password" placeholder="Password" />
        </div>
      </InputsLabels>

      <button type="submit" >Sign In</button>
      <Link href={"/SignUp"} >Sign Up</Link>
    </Form>
  )
}

export default DefaultForm