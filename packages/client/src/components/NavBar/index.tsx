import { Nav } from "./styles"
import List from "./List"

export default function NavBar() {
  return (
    <>
      <Nav>
        <List links={[{ name: "Courses", to: "/" }, { name: "Your Courses", to: "/YourCourses" }, { name: "Prices", to: "/Prices" }, { name: "Contact", to: "/Contact" }]} />
      </Nav>
    </>
  )
}