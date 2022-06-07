import { createAsyncThunk } from '@reduxjs/toolkit'


export const signInFetch: any  = createAsyncThunk (
    'SignIn request',
    async (formData: any) => {       
        const response = await fetch('https://studapi.teachmeskills.by/auth/users/', {
            headers: {
                Authorization: `Bearer ${formData}`,
            },
        });
        const signIn = await response.json();

        if (response.ok) {
            return signIn
        }
   

    }
    
)