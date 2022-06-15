import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TypeTabs = {
    state: number
}

const initialState: TypeTabs = {
    state: 0,
}

const StateTabs = createSlice({
    name: 'State Tabs',
    initialState,
    reducers: {
        tabsValue: (state, action: PayloadAction<number>) => {
            state.state = action.payload
        }
    }
})


export const {tabsValue} = StateTabs.actions
export default StateTabs.reducer