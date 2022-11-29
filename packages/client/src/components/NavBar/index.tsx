import { Nav } from "./styles"
import List from "./List"

import UserPerfilButton from "../UserPerfilButton"

export default function NavBar() {
  return (
    <>
      <Nav>
        <List links={[{ name: "Home", to: "/" }, { name: "Your Courses", to: "/YourCourses" }, { name: "Prices", to: "/Prices" }, { name: "Contact", to: "/Contact" }]} />

        <UserPerfilButton />
      </Nav>
    </>
  )
}