import {configureStore} from "@reduxjs/toolkit";
import PostsReduser from './reducer/PostServer'



export const store = configureStore({
    reducer: {
        posts: PostsReduser,
    }
})