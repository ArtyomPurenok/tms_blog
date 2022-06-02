import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { signUp } from "../../thunkAction/SignUp";

export type TypeSignUp = {
    dataSignUp: any
    isLoading: boolean
}

const initialState: TypeSignUp = {
    dataSignUp: null,
    isLoading: false
}

const signUpData = createSlice({
    name: 'Data signUp',
    initialState,
    reducers: {},
    extraReducers: {
        [signUp.pending]: (state: any) => {
            state.isLoading = true;
        },
        [signUp.fulfilled]: (state: any, action: PayloadAction<any>) => {
            state.dataSignUp = action.payload;
            state.isLoading = false;
        },
        [signUp.rejected]: (state: any) => {
            state.isLoading = false;
        },
    },
})


export const {} = signUpData.actions
export default signUpData.reducer