import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { customFetch } from "../../thunkAction/CustomFeatch"

export type TypeSignIn = {
    access: string | null
    refresh: string | null
    detail: string | null
    isLoading: boolean
    error: string | null
    // data: any
}

const initialState: TypeSignIn = {
    access: null,
    refresh: null,
    detail: null,
    isLoading: false,
    error: null,
    // data: null
}

const tokensReduser = createSlice({
    name: 'Data signIn',
    initialState,
    reducers: {},
    extraReducers: {
        [customFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [customFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {           

            if (action.payload.access) {                
                state.access = action.payload?.access;
                state.refresh = action.payload?.refresh;
                state.detail = null
            }
            state.detail = action.payload?.detail;
            state.error = null;
            state.isLoading = false;
        },
        [customFetch.rejected]: (state: any, action: any) => {            
            state.isLoading = false;
            state.error = action.error.message;
        },
    },
})


export const {} = tokensReduser.actions
export default tokensReduser.reducer