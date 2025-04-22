import React, { useEffect } from 'react'
import { getTopRating } from '../../services/api/getTopRating'
import { getTrending } from '../../services/api/getTrending'
import { useDispatch, useSelector } from 'react-redux'
import { setTopTrending, setTrending } from '../store/redux/apiSlice'

const useChillData = () => {
      const dispatch = useDispatch()

      const trending = useSelector((state) => state.api.trending)
      const topRating = useSelector((state) => state.api.topRating)
      
      useEffect(() => {
            getTrending().then((data) => dispatch(setTrending(data)))
            getTopRating().then((data) => dispatch(setTopTrending(data)))
      }, [dispatch])

      return { trending, topRating }
}
export default useChillData