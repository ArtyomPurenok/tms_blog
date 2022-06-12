import {configureStore, combineReducers} from "@reduxjs/toolkit"
import {
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
     PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import newPostsReduser from '../../src/redux/reducer/NewPost'
import stateTabs from '../../src/redux/reducer/StateTabs'
import Post from '../../src/redux/reducer/OnePost'
import signUpData from '../../src/redux/reducer/DataSignUp'
import verifyData from '../../src/redux/reducer/DataVerify'
import tokensReduser from '../../src/redux/reducer/TokensReduser'
import userReduser from '../../src/redux/reducer/userReduser'

const rootReduser = combineReducers({
    tokens: tokensReduser,
    user: userReduser,
})


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReduser = persistReducer(persistConfig, rootReduser)

export const store = configureStore({
    reducer: {
        data: newPostsReduser,
        tabs: stateTabs,
        post: Post,
        signUp: signUpData,
        verify: verifyData,
        tokens: persistedReduser,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)