import { Form, InputsLabels } from "./styles"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

interface Iinputs {
  label: string
  type: string
  placeholder: string
  name: string
}

interface Props {
  title: string
  Inputs: Array<Iinputs>
}

interface DataForm {
  email: string
  password: string
}

const DefaultForm: React.FC<Props> = ({ title, Inputs }) => {
  const { register, handleSubmit } = useForm()
  const { SignIn } = useContext(AuthContext)

  async function handleSignIn(data: any) {
    await SignIn(data)
  }

  return (
    <Form onSubmit={handleSubmit(handleSignIn)} >
      <h3>{title}</h3>

      <InputsLabels>
        {Inputs.map((input, index) => {
          return (
            <div key={index} >
              <label htmlFor={input.name} >{input.label}</label>
              <input {...register(input.name)} type={input.type} name={input.name} placeholder={input.placeholder} />
            </div>
          )
        })}
      </InputsLabels>

      <button type="submit" >Sign In</button>
    </Form>
  )
}

export default DefaultForm