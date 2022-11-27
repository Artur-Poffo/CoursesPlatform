import axios from "axios";

const api = axios.create({
  baseURL: "https://courseplatform.onrender.com"
})

export default api