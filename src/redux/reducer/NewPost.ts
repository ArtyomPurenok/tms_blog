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

export type Post = {
    count: number,
    next: string,
    previous: boolean,
    results: IResults
}
interface IPostsState {
    data: Post | null
    arrObject: any
    isLoading: boolean
}

const initialState: IPostsState = {
    data: null,
    arrObject: null,
    isLoading: false
}

const newPostsReduser: any = createSlice({
    name: 'New posts',
    initialState,
    extraReducers: {
        [featchData.pending]: (state: IPostsState) => {
            state.isLoading = true;
        },
        [featchData.fulfilled]: (state: IPostsState, action: any) => {
            state.arrObject = action.payload.results;
            state.data = action.payload;
            state.isLoading = false;
        },
        [featchData.rejected]: (state: IPostsState) => {
            state.isLoading = false;
        },
    },
    reducers: {
        bookmark: (state: any, action: PayloadAction<number>) => {
            if (state != null) {
                state.arrObject = state.arrObject?.map((el: any) => el.id === action.payload ? {...el, bookmark: !el.bookmark}: el)
            }
        },
        like: (state: any, action: PayloadAction<number>) => {
            if (state != null) {
                state.arrObject = state.arrObject?.map((el: any) => el.id === action.payload ? {...el, like: !el.like}: el)
            }
        },
        dislike: (state: any, action: PayloadAction<number>) => {
            if (state != null) {
                state.arrObject = state.arrObject?.map((el: any) => el.id === action.payload ? {...el, dislike: !el.dislike}: el)
            }
        },
    },
})

export const {addPostsArray, bookmark, like, dislike} = newPostsReduser.actions
export default newPostsReduser.reducer
