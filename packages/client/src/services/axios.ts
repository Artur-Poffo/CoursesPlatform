import axios from "axios";
import { parseCookies } from "nookies"

export function getAPIClient(ctx?: any) {
  const { 'courses.token': token } = parseCookies()

  const api = axios.create({
    baseURL: "https://coursesplatform.up.railway.app"
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}