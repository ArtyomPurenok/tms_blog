import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Post = {
    id: number,
    data: string
    h1: string
    article?: string
    img: string
    type: string
    like: boolean,
    dislike: boolean,
    Bookmark: boolean,
}

interface IPostsState {
    value: Array<Post> | null
}

const initialState: IPostsState = {
    value: null,
}


const PostsReduser = createSlice({
    name:'Posts',
    initialState,
    reducers: {
        addContent: (state, action: PayloadAction<Array<Post>>) => {
            state.value = action.payload
        },
        stateBookmark: (state, action: PayloadAction<number>) => {
            if(state.value) {
                state.value = state.value.map(el => el.id === action.payload ? {...el, like: true}: el)
            }
        },
        
    }
})

export const {addContent, stateBookmark} = PostsReduser.actions
export default PostsReduser.reducer