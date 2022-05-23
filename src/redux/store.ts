import { configureStore } from "@reduxjs/toolkit";
import themeReaducer from './reducer/theme';
import {postReducer} from '../features/posts'
import { authReduser } from "../features/auth";


export const store = configureStore({
    reducer: {
        theme: themeReaducer,
        posts: postReducer,
        auth: authReduser,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch