import FilmCardDesktop from '../components/Movie/FilmCard/FilmCardDesktop'
import useChillData from '../hooks/useChillData'
import { useMediaQuery } from 'react-responsive'
import FilmCardMobile from '../components/Movie/FilmCard/FilmCardMobile'
import Navbar from '../components/Navbar'

const CRUD = () => {
      const { topRating, handleAddTopRating, handleUpdateTopRating, handleDeleteTopRating } = useChillData()

      const isMobile = useMediaQuery({ maxWidth: 1023 })
      const isDesktop = useMediaQuery({ minWidth: 1024 })
      return (
            <>
                  <Navbar />
                  <div>
                        {isMobile && <FilmCardMobile data={topRating} />}
                        {isDesktop && <FilmCardDesktop data={topRating} />}
                  </div>
                  <div className='grid grid-cols-3 gap-10 p-20'>
                        <div className='flex justify-center'>
                              {topRating.length >= 11 ? "" : <button onClick={handleAddTopRating} className='py-2 px-4 bg-green-400 rounded cursor-pointer w-30'>Add</button>}
                        </div>
                        <div className='flex justify-center'>
                              <button onClick={handleUpdateTopRating} className='py-2 px-4 bg-yellow-400 rounded cursor-pointer w-30'>Update</button>
                        </div>
                        <div className='flex justify-center'>
                              <button onClick={handleDeleteTopRating} className='py-2 px-4 bg-red-400 rounded cursor-pointer w-30'>Delete</button>
                        </div>
                  </div>
            </>
      )
}

export default CRUD