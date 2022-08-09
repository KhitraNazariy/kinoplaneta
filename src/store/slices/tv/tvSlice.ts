import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ITopRatedTv} from "../../../types/ITopRatedTv";
import {fetchTopRatedTv} from "./asyncActions";

interface TvSliceState {
    responseTopRatedTv: ITopRatedTv;
    status: string;
    error: string | null;
}

const initialState: TvSliceState = {
    responseTopRatedTv: {} as ITopRatedTv,
    status: '',
    error: null
}

const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTopRatedTv.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchTopRatedTv.fulfilled, (state, action: PayloadAction<ITopRatedTv>) => {
            state.status = 'success';
            state.responseTopRatedTv = action.payload
        });
        builder.addCase(fetchTopRatedTv.rejected, (state, {payload}) => {
            state.status = 'error';
            if (payload) {
                state.error = payload.message
            }
        })
    }
});

const tv = tvSlice.reducer

export default tv