import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { verify } from "../../thunkAction/Verify";

export type TypeVerify = {
    dataVerify: any
    isLoading: boolean
}

const initialState: TypeVerify = {
    dataVerify: null,
    isLoading: false
}

const verifyData = createSlice({
    name: 'Data verify',
    initialState,
    reducers: {},
    extraReducers: {
        [verify.pending]: (state: any) => {
            state.isLoading = true;
        },
        [verify.fulfilled]: (state: any, action: PayloadAction<any>) => {
            state.dataVerify = action.payload;
            state.isLoading = false;
        },
        [verify.rejected]: (state: any) => {
            state.isLoading = false;
        },
    },
})


export const {} = verifyData.actions
export default verifyData.reducer