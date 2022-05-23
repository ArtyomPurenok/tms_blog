import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



interface AuthState {
    user: any | null
    isLoading: string
    error: string | null
}

type User = {
    name: string
}

type SignUpPayload = {
    name: string
    email: string
    password: string
}

const initialState: AuthState = {
    user: null,
    isLoading: 'idle',
    error: null,
}

export const themeSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp: state => {
            if (state.isLoading === 'idle') {
                state.isLoading = 'pending'
            }
        },
        signUpSuccess (state, action: any) {
            if (state.isLoading === 'pending') {
                state.isLoading = 'idle'
                state.user = action.payload
            }
        },
        signUpFailure (state, action: any) {
                state.isLoading = 'idle'
                state.error = action.payload
        },
    },
})


export const {signUpSuccess, signUp, signUpFailure} = themeSlice.actions

export default themeSlice.reducer