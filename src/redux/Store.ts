import {configureStore} from "@reduxjs/toolkit"

import newPostsReduser from '../../src/redux/reducer/NewPost'
import stateTabs from '../../src/redux/reducer/StateTabs'
import Post from '../../src/redux/reducer/OnePost'
import signUpData from '../../src/redux/reducer/DataSignUp'
import verifyData from '../../src/redux/reducer/DataVerify'




export const store = configureStore({
    reducer: {
        data: newPostsReduser,
        tabs: stateTabs,
        post: Post,
        signUp: signUpData,
        verify: verifyData,
    }
})