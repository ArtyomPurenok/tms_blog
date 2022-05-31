import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

export const favorites = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        stateBookmark: (state, action: PayloadAction<number>) => {
            if (state.data != null) {
                console.log(state.data)
            }
        }
    }
})


export const {stateBookmark} = favorites.actions
export default favorites.reducer