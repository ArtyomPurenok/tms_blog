import { createAsyncThunk } from '@reduxjs/toolkit'

// type Data = {
//     name: string
//     email: string
//     password: string
// }

export const signUp: any  = createAsyncThunk (
    'SignUP request',
    async (formData: any) => {
        const response = await fetch('https://studapi.teachmeskills.by/auth/users/', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        const signUpData = await response.json();
        console.log(signUpData);

        if (response.ok) {
            return signUpData
        }
   

    }

)