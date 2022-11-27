import { createContext, useState } from "react";
import Router from "next/router";

import api from "../services/api";
import nookies from "nookies"

interface IUser {
  userName: string
  email: string
  about: string
  perfilImage: string
  courses: Array<string>
}

interface SignInParams {
  email: string
  password: string
}

interface AuthContextData {
  isAuthenticated: boolean,
  SignIn: (data: SignInParams) => Promise<void>,
  user: IUser | null
}

export const AuthContext = createContext({} as AuthContextData)

interface Props {
  children: JSX.Element[]
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const isAuthenticated = !!user

  async function SignIn(data: SignInParams) {
    const res = await api.post("/api/SignIn", data)
    const { success, token, user } = await res.data

    nookies.set(null, 'courses.token', token, {
      maxAge: 3600 // 1 hour
    })

    setUser(user)

    Router.push("/")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, SignIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}