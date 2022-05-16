import { configureStore } from "@reduxjs/toolkit";
import themeReaducer from './reducer/theme'


export const store = configureStore({
    reducer: {
        theme: themeReaducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch