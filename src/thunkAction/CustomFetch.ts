import { createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from 'jwt-decode'



export const customFetch: any  = createAsyncThunk (
    'Custom fetch',
    async ({access, formData}: any) => {  
        const parsedToken: any = jwtDecode(access);

        if (((parsedToken.exp * 1000) - Date.now()) < 0) {
            const response = await fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                },
            });
            const tokens = await response.json();
            // console.log(tokens);         
            
            if (response.ok) {
                return tokens
            }
        }else {
            const response = await fetch('https://studapi.teachmeskills.by/auth/users/', {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            });
            const userData = await response.json();

            if (response.ok) {
                return userData
            }
        }

    }
    
)

//предварительный фетч. Под него будет делатся редюсер, когда токен всё время будет хранится в брайзере.