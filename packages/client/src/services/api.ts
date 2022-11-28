import axios from "axios";

import { parseCookies } from "nookies"

const { 'courses.token': token } = parseCookies()

const api = axios.create({
  baseURL: "https://courseplatform.onrender.com"
})

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

export default api