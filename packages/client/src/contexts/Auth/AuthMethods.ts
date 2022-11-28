import Router from "next/router";

import api from "../../services/api";
import nookies from "nookies"

import { SignInParams } from "../../interfaces/SignInParams";
import { SignUpParams } from "../../interfaces/SignUpParams";

export async function SignIn(data: SignInParams) {
  const res = await api.post("/api/SignIn", data)
  const { success, token, user } = await res.data

  nookies.set(null, 'courses.token', token, {
    maxAge: 3600 // 1 hour
  })

  Router.push("/")
}

export async function SignUp(data: SignUpParams) {
  const res = await api.post("/api/SignUp", data)
  const { success, msg } = await res.data

  Router.push("/SignIn")
}

export async function GetUserData() {
  const res = await api.get("/api/getUserData/:id")
  const { success, msg } = await res.data

  Router.push("/SignIn")
}