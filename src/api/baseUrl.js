import axios from "axios"

const api = axios.create({
  baseURL: "https://localhost:3000" // Twój podstawowy URL API
})

export default api
