import React, { useEffect, useState } from 'react'
import { getTopRating } from '../../services/api/getTopRating'
import { getTrending } from '../../services/api/getTrending'

const useChillData = () => {
      const [trending, setTrending] = useState([])
      const [topRating, setTopRating] = useState([])

      useEffect(() => {
            getTrending().then(setTrending)
            getTopRating().then(setTopRating)
      }, [])

      return { trending, topRating }
}

export default useChillData