import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { signInFetch } from "../../thunkAction/signInFetch";

export type TypeSignUp = {
    id: number | null
    email: string | null
    userName: string | null
    isLoading: boolean
}

const initialState: TypeSignUp = {
    id: null,
    email: null,
    userName: null,
    isLoading: false,
}

const signInReduser = createSlice({
    name: 'Data signIn',
    initialState,
    reducers: {},
    extraReducers: {
        [signInFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [signInFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {           
            state.id = action.payload?.results[0].id;
            state.email = action.payload?.results[0].email;
            state.userName = action.payload?.results[0].username;
            state.isLoading = false;
        },
        [signInFetch.rejected]: (state: any) => {
            state.isLoading = false;
        },
    },
})


export const {} = signInReduser.actions
export default signInReduser.reducer