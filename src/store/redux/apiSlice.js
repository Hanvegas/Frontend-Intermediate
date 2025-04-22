import { createSlice } from "@reduxjs/toolkit"

const apiSlice = createSlice({
      name: "api",
      initialState: {
            topRating: [],
            trending: []
      },
      reducers: {
            setTopTrending: (state, action) => {
                  state.topRating = action.payload
            },
            setTrending: (state, action) => {
                  state.trending = action.payload
            }
      }
})

export const { setTopTrending, setTrending } = apiSlice.actions
export default apiSlice.reducer