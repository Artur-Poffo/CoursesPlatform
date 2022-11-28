import { createContext, useState } from "react";

import { SignIn, SignUp } from "./AuthMethods"
import { SignInParams } from "../../interfaces/SignInParams";
import { SignUpParams } from "../../interfaces/SignUpParams";

interface AuthContextData {
  isAuthenticated: boolean,
  SignIn: (data: SignInParams) => Promise<void>,
  SignUp: (data: SignUpParams) => Promise<void>,
}

export const AuthContext = createContext({} as AuthContextData)

interface Props {
  children: JSX.Element[]
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const isAuthenticated = false

  return (
    <AuthContext.Provider value={{ isAuthenticated, SignIn, SignUp }}>
      {children}
    </AuthContext.Provider>
  )
}