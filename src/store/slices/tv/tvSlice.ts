import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ITopRatedTv} from "../../../types/ITopRatedTv";
import {
    fetchAiringTodayTv,
    fetchOnTheAirTv,
    fetchPopularTv,
    fetchRecommendationsTv,
    fetchTopRatedTv,
    fetchTvDetails
} from "./asyncActions";
import {IPopularTv} from "../../../types/IPopularTv";
import {IAiringTodayTv} from "../../../types/IAiringTodayTv";
import {IOnTheAirTv} from "../../../types/IOnTheAirTv";
import {ITvDetails} from "../../../types/ITvDetails";
import {IRecommendationTv} from "../../../types/IRecommendationTv";

interface TvSliceState {
    responseTopRatedTv: ITopRatedTv;
    responsePopularTv: IPopularTv;
    responseAiringToday: IAiringTodayTv;
    responseOnTheAirTv: IOnTheAirTv;
    responseTvDetails: ITvDetails;
    responseRecommendationsTv: IRecommendationTv;
    status: string;
    error: string | null;
}

const initialState: TvSliceState = {
    responseTopRatedTv: {} as ITopRatedTv,
    responsePopularTv: {} as IPopularTv,
    responseAiringToday: {} as IAiringTodayTv,
    responseOnTheAirTv: {} as IOnTheAirTv,
    responseTvDetails: {} as ITvDetails,
    responseRecommendationsTv: {} as IRecommendationTv,
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
        });

        builder.addCase(fetchAiringTodayTv.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchAiringTodayTv.fulfilled, (state, action: PayloadAction<IAiringTodayTv>) => {
            state.status = 'success';
            state.error = null
            state.responseAiringToday = action.payload
        });
        builder.addCase(fetchAiringTodayTv.rejected, (state, {payload}) => {
            state.status = 'error';
            if (payload) {
                state.error = payload.message
            }
        })

        builder.addCase(fetchOnTheAirTv.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchOnTheAirTv.fulfilled, (state, action: PayloadAction<IOnTheAirTv>) => {
            state.status = 'success';
            state.error = null
            state.responseOnTheAirTv = action.payload
        });
        builder.addCase(fetchOnTheAirTv.rejected, (state, {payload}) => {
            state.status = 'error';
            if (payload) {
                state.error = payload.message
            }
        })

        builder.addCase(fetchTvDetails.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchTvDetails.fulfilled, (state, action: PayloadAction<ITvDetails>) => {
            state.status = 'success';
            state.error = null
            state.responseTvDetails = action.payload
        });
        builder.addCase(fetchTvDetails.rejected, (state, {payload}) => {
            state.status = 'error';
            if (payload) {
                state.error = payload.message
            }
        })

        builder.addCase(fetchRecommendationsTv.pending, (state) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(fetchRecommendationsTv.fulfilled, (state, action: PayloadAction<IRecommendationTv>) => {
            state.status = 'success';
            state.error = null
            state.responseRecommendationsTv = action.payload
        });
        builder.addCase(fetchRecommendationsTv.rejected, (state, {payload}) => {
            state.status = 'error';
            if (payload) {
                state.error = payload.message
            }
        })
    }
});

const tv = tvSlice.reducer

export default tv