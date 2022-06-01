import { createAsyncThunk } from '@reduxjs/toolkit'

export const postRequest: any  = createAsyncThunk (
    'One post from server',
    async (id) => {
        const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`);
        const onePost = await response.json();
        console.log(onePost);
        
        return onePost
    }

)


