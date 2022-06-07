import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { tokens } from "../../thunkAction/Tokens"

export type TypeSignIn = {
    access: string | null
    refresh: string | null
    detail: string | null
    isLoading: boolean
    error: string | null
}

const initialState: TypeSignIn = {
    access: null,
    refresh: null,
    detail: null,
    isLoading: false,
    error: null,
}

const tokensReduser = createSlice({
    name: 'Data signIn',
    initialState,
    reducers: {},
    extraReducers: {
        [tokens.pending]: (state: any) => {
            state.isLoading = true;
        },
        [tokens.fulfilled]: (state: any, action: PayloadAction<any>) => {
            if (action.payload.access) {
                state.access = action.payload.access;
                state.refresh = action.payload.refresh;
                state.detail = null
            }
            state.detail = action.payload?.detail;
            state.error = null;
            state.isLoading = false;
        },
        [tokens.rejected]: (state: any, action: any) => {            
            state.isLoading = false;
            state.error = action.error.message;
        },
    },
})


export const {} = tokensReduser.actions
export default tokensReduser.reducer