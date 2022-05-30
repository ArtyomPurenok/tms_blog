import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { featchData } from "../../thunkAction/AddPost";


interface IPostsState {
    data: any
    isLoading: boolean
}

const initialState: IPostsState = {
    data: null,
    isLoading: false
}

const NewPostsReduser: any = createSlice({
    name: 'New posts',
    initialState,
    reducers: {},
    extraReducers: {
        [featchData.pending]: (state: any) => {
            state.isLoading = true;
        },
        [featchData.fulfilled]: (state: any, action: any) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [featchData.rejected]: (state: any) => {
            state.isLoading = false;
        },
    },
})

export const {addPostsArray} = NewPostsReduser.actions
export default NewPostsReduser.reducer