import Reac from "react";
import { type AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from 'jwt-decode'
import { useSelector } from "react-redux";

type TypeTokens = {
    tokens: {
        access: string
        refresh: string
    }
}

export const customFetch: any = createAsyncThunk (
    'Custom fetch',
    async (tokens: any) => {  

//         //check refresh
//         const parsedRefreshToken: any = jwtDecode(tokens.refresh);
// console.log(tokens);

//         if (((parsedRefreshToken.exp * 1000) - Date.now()) < 0) {
//             const response = await fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
//                 method: "POST",
//                 body: JSON.stringify(tokens.user),
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json;charset=utf-8'
//                 },
//             });
//             const test = response.json();
//             console.log(test);                                                       not delite
            
//         }

        //check access
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
            const onluAcecc = newAccess.access;
            console.log(newAccess);
            if (newAccess.detail) {
                
            }


            if (response.ok) {
                console.log('token okey');               
                return {access: onluAcecc, refresh: tokens.refresh}
            }
        }else { return {access: tokens.access, refresh: tokens.refresh}}

    }
    
)