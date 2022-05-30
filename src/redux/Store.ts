import {configureStore} from "@reduxjs/toolkit";
import PostsReduser from './reducer/PostServer';
import NewPostsReduser from '../../src/redux/reducer/NewPost';
import stateTabs from '../../src/redux/reducer/StateTabs';



export const store = configureStore({
    reducer: {
        data: NewPostsReduser,
        tabs: stateTabs,
    }
})