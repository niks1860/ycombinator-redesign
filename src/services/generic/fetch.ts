import axios from "axios"
import { API_BASE_URL } from "config"

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

export default service
