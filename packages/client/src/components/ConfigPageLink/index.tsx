import { Btn } from "./styles"
import Link from "next/link"

const ConfigPageLink: React.FC = () => {
  return (
    <Btn>
      <Link href={"/Profile/Config"} >
        <i className="fa-solid fa-gear"></i>
      </Link>
    </Btn>
  )
}

export default ConfigPageLink