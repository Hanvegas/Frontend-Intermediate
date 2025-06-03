import { createSlice } from "@reduxjs/toolkit"

const apiSlice = createSlice({
      name: "api",
      initialState: {
            topRating: [],
            trending: []
      },
      reducers: {
            setTopRating: (state, action) => {
                  state.topRating = action.payload
            },
            setTrending: (state, action) => {
                  state.trending = action.payload
            }
      }
})

export const { setTopRating, setTrending } = apiSlice.actions
export default apiSlice.reducer