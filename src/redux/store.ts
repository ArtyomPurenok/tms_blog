import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

import themeReaducer from './reducer/theme';
import {postReducer} from '../features/posts'
import { authReduser } from "../features/auth";
import {signUpSaga} from '../sagas/signUpSagas';
const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
    reducer: {
        theme: themeReaducer,
        posts: postReducer,
        auth: authReduser,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch