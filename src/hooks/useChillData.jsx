import React, { useEffect } from 'react'
import { getTopRating, addTopRating, editTopRating, deleteTopRating } from '../../services/api/getTopRating'
import { getTrending } from '../../services/api/getTrending'
import { useDispatch, useSelector } from 'react-redux'
import { setTopRating, setTrending } from '../store/redux/apiSlice'

const useChillData = () => {
      const dispatch = useDispatch()

      const trending = useSelector((state) => state.api.trending)
      const topRating = useSelector((state) => state.api.topRating)

      useEffect(() => {
            getTrending().then((data) => dispatch(setTrending(data)))
            getTopRating().then((data) => dispatch(setTopRating(data)))
      }, [dispatch])

      const handleAddTopRating = async () => {
            const movie = {
                  title: "Minecraft",
                  image: "https://res.cloudinary.com/dvwmxszdy/image/upload/v1745001312/Minecraft_iideka.webp",
                  topTen: true,
                  newEpisode: false,
            }
            await addTopRating(movie)
            const updatedData = await getTopRating()
            dispatch(setTopRating(updatedData))
            alert("Film berhasil ditambahkan")
      }

      const handleUpdateTopRating = async () => {
            const movie = {
                  title: "Spider-Man: Homecoming",
                  image: "https://res.cloudinary.com/dvwmxszdy/image/upload/v1745000899/Spideman-Homecoming_hnmmzv.webp",
                  topTen: true,
                  newEpisode: false,
            }
            await editTopRating(11, movie)
            const updatedData = await getTopRating()
            dispatch(setTopRating(updatedData))
            alert("Film berhasil diupdate")
      }

      const handleDeleteTopRating = async () => {
            await deleteTopRating(11)
            const updatedData = await getTopRating()
            dispatch(setTopRating(updatedData))
            alert("Film berhasil dihapus")
      }

      return { trending, topRating, handleAddTopRating, handleUpdateTopRating, handleDeleteTopRating }
}
export default useChillData