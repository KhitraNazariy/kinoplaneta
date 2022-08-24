import {createAsyncThunk} from "@reduxjs/toolkit";

import {ITopRatedTv} from "../../../types/ITopRatedTv";
import {tvService} from "../../../services";
import {IPopularTv} from "../../../types/IPopularTv";
import {IAiringTodayTv} from "../../../types/IAiringTodayTv";
import {IOnTheAirTv} from "../../../types/IOnTheAirTv";
import {ITvDetails} from "../../../types/ITvDetails";
import {IRecommendationTv} from "../../../types/IRecommendationTv";
import {ICreditsTv} from "../../../types/ICreditsTv";

type FetchTodosError = {
    message: string;
};

export const fetchTopRatedTv = createAsyncThunk<ITopRatedTv, {page: number}, {rejectValue: FetchTodosError}>(
    'tv/fetchTopRatedTv',
    async ({page}, {rejectWithValue}) => {
        try {
            return await tvService.getTopRated(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
);

export const fetchPopularTv = createAsyncThunk<IPopularTv, {page: number}, {rejectValue: FetchTodosError}>(
    'tv/fetchPopularTv',
    async ({page}, {rejectWithValue}) => {
        try {
            return await tvService.getPopularTv(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)

export const fetchAiringTodayTv = createAsyncThunk<IAiringTodayTv, {page: number}, {rejectValue: FetchTodosError}>(
    'tv/fetchAiringTodayTv',
    async ({page}, {rejectWithValue}) => {
        try {
            return await tvService.getAiringToday(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)

export const fetchOnTheAirTv = createAsyncThunk<IOnTheAirTv, {page: number}, {rejectValue: FetchTodosError}>(
    'tv/fetchOnTheAirTv',
    async ({page}, {rejectWithValue}) => {
        try {
            return await tvService.getOnTheAir(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)

export const fetchTvDetails = createAsyncThunk<ITvDetails, {id: string | undefined}, {rejectValue: FetchTodosError}>(
    'movie/fetchTvDetails',
    async ({id}, {rejectWithValue}) => {
        try {
            return await tvService.getTvDetails(id)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)

export const fetchRecommendationsTv = createAsyncThunk<IRecommendationTv, {id: string | undefined}, {rejectValue: FetchTodosError}>(
    'movie/fetchRecommendationsTv',
    async ({id}, {rejectWithValue}) => {
        try {
            return await tvService.getRecommendationsTv(id)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)

export const fetchCreditsTv = createAsyncThunk<ICreditsTv, {id: string | undefined}, {rejectValue: FetchTodosError}>(
    'movie/fetchCreditsTv',
    async ({id}, {rejectWithValue}) => {
        try {
            return await tvService.getTvCredits(id)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)