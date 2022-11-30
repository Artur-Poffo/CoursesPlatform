import { Nav } from "./styles"
import List from "./List"

import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

import UserPerfilButton from "../UserPerfilButton"

export default function NavBar() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <>
      <Nav isAuthenticated={isAuthenticated} >
        <List links={[{ name: "Home", to: "/" }, { name: "Your Courses", to: "/YourCourses" }, { name: "Prices", to: "/Prices" }, { name: "Contact", to: "/Contact" }]} />

        <UserPerfilButton />
      </Nav>
    </>
  )
}