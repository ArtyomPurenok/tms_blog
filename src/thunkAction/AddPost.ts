import { createAsyncThunk } from '@reduxjs/toolkit'

export const featchData: any  = createAsyncThunk (
    'data from serwer',
    async () => {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=12&offset=0');
        const dataFromFeatch = await response.json();
        return dataFromFeatch
    }

)
