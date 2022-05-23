import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



interface ThemeState {
    user: any | null
}

type User = {
    name: string
}

type SignUpPayload = {
    name: string
    email: string
    password: string
}

const initialState: ThemeState = {
    user: null,
}

export const themeSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp: (state, action: PayloadAction<SignUpPayload>) => {
            state.user = action.payload
        },
    },
})


export const {signUp} = themeSlice.actions

export default themeSlice.reducer