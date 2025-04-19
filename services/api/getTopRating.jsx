import axios from "axios"

export const getTopRating = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/top-rating`)
      return res.data
}