import { GetServerSideProps } from "next"
import { useContext } from "react"
import { AuthContext } from "../contexts/Auth/AuthContext"

import { parseCookies } from "nookies"
import { getAPIClient } from "../services/axios"

export default function Home() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Hello {user?.userName}</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const { ['courses.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: "/SignIn",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}