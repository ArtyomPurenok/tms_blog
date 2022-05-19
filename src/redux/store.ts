import { configureStore } from "@reduxjs/toolkit";
import themeReaducer from './reducer/theme';
import {postReducer} from '../features/posts'


export const store = configureStore({
    reducer: {
        theme: themeReaducer,
        posts: postReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch