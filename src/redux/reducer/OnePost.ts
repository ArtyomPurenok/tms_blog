import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { postRequest } from "../../thunkAction/postRequest";

export type TypeTabs = {
    post: any
    isLoading: boolean
}

const initialState: TypeTabs = {
    post: null,
    isLoading: false
}

const Post = createSlice({
    name: 'One post',
    initialState,
    reducers: {},
    extraReducers: {
        [postRequest.pending]: (state: any) => {
            state.isLoading = true;
        },
        [postRequest.fulfilled]: (state: any, action: PayloadAction<any>) => {
            state.post = action.payload;
            state.isLoading = false;
        },
        [postRequest.rejected]: (state: any) => {
            state.isLoading = false;
        },
    },
})


export const {} = Post.actions
export default Post.reducer