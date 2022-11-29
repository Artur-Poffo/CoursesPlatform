import { Container, Image } from "./styles"
import Link from "next/link"

import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

const UserPerfilButton: React.FC = () => {
  const { user, isAuthenticated } = useContext(AuthContext)

  return (
    <Container isAuthenticated={isAuthenticated} >
      <Link href={"/Profile"} >
        <Image img={user?.perfilImage} />
      </Link>
    </Container>
  )
}

export default UserPerfilButton