import { useContext } from "react"
import { AuthContext } from "../contexts/Auth/AuthContext"

export default function Home() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Hello {user?.userName}</h1>
    </div>
  )
}
