import React from 'react'
import FilmCardDesktop from '../components/Movie/FilmCard/FilmCardDesktop'
import useChillData from '../hooks/useChillData'
import useCRUDTopRating from '../hooks/useCRUDTopRating'
import { useMediaQuery } from 'react-responsive'
import FilmCardMobile from '../components/Movie/FilmCard/FilmCardMobile'

const CRUD = () => {
      const { topRating } = useChillData()
      const { addData, editData, deleteData } = useCRUDTopRating()

      const isMobile = useMediaQuery({ maxWidth: 1023 })
      const isDesktop = useMediaQuery({ minWidth: 1024 })
      return (
            <>
                  <div>
                        {isMobile && <FilmCardMobile data={topRating} /> }
                        {isDesktop && <FilmCardDesktop data={topRating} /> }
                  </div>
                  <div className='flex justify-between p-20'>
                        <button onClick={addData} className='py-2 px-4 bg-green-400 rounded cursor-pointer'>Add</button>
                        <button onClick={editData} className='py-2 px-4 bg-yellow-400 rounded cursor-pointer'>Update</button>
                        <button onClick={deleteData} className='py-2 px-4 bg-red-400 rounded cursor-pointer'>Delete</button>
                  </div>
            </>
      )
}

export default CRUD