import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { featchData } from "../../thunkAction/AddPost";

interface IResults {
    id: number
    image: string
    text: string
    date: string
    lesson_num: number
    title: string
    author: number
    like?: boolean
    dislike?: boolean
    bookmark?: boolean
}

type Post = {
    count: number,
    next: string,
    previous: boolean,
    results: IResults
}
interface IPostsState {
    data: Post | null
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
        [featchData.pending]: (state: IPostsState) => {
            state.isLoading = true;
        },
        [featchData.fulfilled]: (state: IPostsState, action: PayloadAction<Post>) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [featchData.rejected]: (state: IPostsState) => {
            state.isLoading = false;
        },
    },
})

export const {addPostsArray} = NewPostsReduser.actions
export default NewPostsReduser.reducer