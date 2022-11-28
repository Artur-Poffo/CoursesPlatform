import { createContext, useEffect, useState } from "react";
import Router from "next/router";

import api from "../../services/api";
import { setCookie, parseCookies } from "nookies"
import jwt from "jsonwebtoken"

import { SignInParams } from "../../interfaces/SignInParams";
import { SignUpParams } from "../../interfaces/SignUpParams";

import { IUser } from "../../interfaces/IUser";

interface AuthContextData {
  isAuthenticated: boolean,
  SignIn: (data: SignInParams) => Promise<void>,
  SignUp: (data: SignUpParams) => Promise<void>,
  user: IUser | null
}

export const AuthContext = createContext({} as AuthContextData)

interface Props {
  children: JSX.Element[]
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'courses.token': token } = parseCookies()

    if (token) {
      const json = jwt.decode(token) as { id: string }

      api.get(`/api/getUserData/${json.id}`)
        .then(response => setUser(response.data.user))
        .catch(err => console.log("Error on getUserData: " + err))
    }
  }, [])

  async function SignIn(data: SignInParams) {
    const res = await api.post("/api/SignIn", data)
    const { success, token, user } = await res.data

    setCookie(null, 'courses.token', token, {
      maxAge: 3600 // 1 hour
    })

    setUser(user)

    Router.push("/")
  }

  async function SignUp(data: SignUpParams) {
    const res = await api.post("/api/SignUp", data)
    const { success, msg } = await res.data

    Router.push("/SignIn")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, SignIn, SignUp, user }}>
      {children}
    </AuthContext.Provider>
  )
}