import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ITopRatedTv} from "../../../types/ITopRatedTv";
import {fetchPopularTv, fetchTopRatedTv} from "./asyncActions";
import {IPopularTv} from "../../../types/IPopularTv";

interface TvSliceState {
    responseTopRatedTv: ITopRatedTv;
    responsePopularTv: IPopularTv;
    status: string;
    error: string | null;
}

const initialState: TvSliceState = {
    responseTopRatedTv: {} as ITopRatedTv,
    responsePopularTv: {} as IPopularTv,
    status: '',
    error: null
}

const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTopRatedTv.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchTopRatedTv.fulfilled, (state, action: PayloadAction<ITopRatedTv>) => {
            state.status = 'success';
            state.error = null;
            state.responseTopRatedTv = action.payload
        });
        builder.addCase(fetchTopRatedTv.rejected, (state, {payload}) => {
            state.status = 'error';
            if (payload) {
                state.error = payload.message
            }
        })

        builder.addCase(fetchPopularTv.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchPopularTv.fulfilled, (state, action: PayloadAction<IPopularTv>) => {
            state.status = 'success';
            state.error = null
            state.responsePopularTv = action.payload
        });
        builder.addCase(fetchPopularTv.rejected, (state, {payload}) => {
            state.status = 'error';
            if (payload) {
                state.error = payload.message
            }
        })
    }
});

const tv = tvSlice.reducer

export default tv