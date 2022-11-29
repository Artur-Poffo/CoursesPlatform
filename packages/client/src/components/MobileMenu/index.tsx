import { Btn } from "./styles"
import ListMobile from "./ListMobile"
import { useState } from "react"

const MobileMenu: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Btn onClick={() => setShow(!show)} >
        <div />
        <div />
        <div />
      </Btn>

      <ListMobile setShow={setShow} show={show} links={[{ name: "Home", to: "/" }, { name: "Your Courses", to: "/YourCourses" }, { name: "Prices", to: "/Prices" }, { name: "Contact", to: "/Contact" }, { name: "Profile", to: "/Profile" }]} />
    </>
  )
}

export default MobileMenu