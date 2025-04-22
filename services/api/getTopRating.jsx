import axios from "axios"

export const getTopRating = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/top-rating`)
      return res.data
}

export const addTopRating = async (movie) => {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/top-rating`, movie)
      return res.data
}

export const editTopRating = async (id, editMovie) => {
      const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/top-rating/${id}`, editMovie)
      return res.data
}

export const deleteTopRating = async (id) => {
      const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/top-rating/${id}`)
      return res.data
}