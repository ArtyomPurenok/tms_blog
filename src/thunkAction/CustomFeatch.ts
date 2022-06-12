import { type AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from 'jwt-decode'

type TypeTokens = {
    tokens: {
        access: string
        refresh: string
    }
}

export const customFetch: any = createAsyncThunk (
    'Custom fetch',
    async (tokens: any) => {  

        const parsedToken: any = jwtDecode(tokens.access);

        if (((parsedToken.exp * 1000) - Date.now()) < 0) {
            
            const response = await fetch('https://studapi.teachmeskills.by/auth/jwt/refresh/', {
                method: "POST",
                body: JSON.stringify({refresh: tokens.refresh}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                },
            });
            const newAccess = await response.json();   
            const onluAcecc = newAccess.access

            if (response.ok) {
                return {access: onluAcecc, refresh: tokens.refresh}
            }
        }else { return {access: tokens.access, refresh: tokens.refresh}}

    }
    
)
