import { createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from 'jwt-decode'



export const customFetch = createAsyncThunk (
    'Custom fetch',
    async ({tokens, formData}: any) => {  
        const parsedToken: any = jwtDecode(tokens.access);

        if (((parsedToken.exp * 1000) - Date.now()) < 0) {
            const response = await fetch('https://studapi.teachmeskills.by/auth/jwt/refresh/', {
                method: "POST",
                body: JSON.stringify(tokens.access),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                },
            });
            const newAccess = await response.json();        
            
            if (response.ok) {
                return newAccess
            }
        }else {
            const response = await fetch('https://studapi.teachmeskills.by/auth/users/', {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
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