import { addTopRating, editTopRating, deleteTopRating } from '../../services/api/getTopRating'

const useCRUDTopRating = () => {
      const addData = () => {
            const movie = {
                  title: "Minecraft",
                  image: "https://res.cloudinary.com/dvwmxszdy/image/upload/v1745001312/Minecraft_iideka.webp",
                  topTen: true,
                  newEpisode: false,
            }
            addTopRating(movie)
      }

      const editData = () => {
            const editMovie = {
                  title: "Spider-Man: Homecoming",
                  image: "https://res.cloudinary.com/dvwmxszdy/image/upload/v1745000899/Spideman-Homecoming_hnmmzv.webp",
                  topTen: true,
                  newEpisode: true,
            }
            editTopRating(11, editMovie)
      }

      const deleteData = () => {
            deleteTopRating(11)
      }

      return { addData, editData, deleteData }
}

export default useCRUDTopRating