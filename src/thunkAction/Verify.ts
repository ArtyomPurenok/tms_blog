import { createAsyncThunk } from '@reduxjs/toolkit'


export const verify: any  = createAsyncThunk (
    'Verify',
    async (verifyData: any) => {
        console.log(verifyData)
        const response = await fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
            method: "POST",
            body: JSON.stringify(verifyData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const verifyDataServer = await response.json();
        console.log(verifyDataServer);
        
            return verifyDataServer


    }

)