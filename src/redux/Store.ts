import {configureStore} from "@reduxjs/toolkit";
import newPostsReduser from '../../src/redux/reducer/NewPost';
import stateTabs from '../../src/redux/reducer/StateTabs';
import favorites from '../../src/redux/reducer/favorites';



export const store = configureStore({
    reducer: {
        data: newPostsReduser,
        tabs: stateTabs,
        // stateFavorite: favorites,
    }
})