import axios from "axios"

export const getTrending = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/trending`)
      return res.data
}