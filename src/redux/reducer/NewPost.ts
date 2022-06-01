import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { featchData } from "../../thunkAction/AddPost";

export interface IResults {
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
export interface IPostsState {
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
        [featchData.fulfilled]: (state: IPostsState, action: PayloadAction<Post>) => {
            state.arrObject = action.payload.results;
            state.data = action.payload;
            state.isLoading = false;
        },
        [featchData.rejected]: (state: IPostsState) => {
            state.isLoading = false;
        },
    },
    reducers: {
        bookmark: (state: IPostsState, action: PayloadAction<number>) => {
            if (state != null) {
                state.arrObject = state.arrObject?.map((el: IResults) => el.id === action.payload ? {...el, bookmark: !el.bookmark}: el)
            }
        },
        like: (state: IPostsState, action: PayloadAction<number>) => {
            if (state != null) {
                state.arrObject = state.arrObject?.map((el: IResults) => el.id === action.payload ? {...el, like: !el.like}: el)
            }
        },
        dislike: (state: IPostsState, action: PayloadAction<number>) => {
            if (state != null) {
                state.arrObject = state.arrObject?.map((el: IResults) => el.id === action.payload ? {...el, dislike: !el.dislike}: el)
            }
        },
    },
})

export const {addPostsArray, bookmark, like, dislike} = newPostsReduser.actions
export default newPostsReduser.reducer
