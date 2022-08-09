import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITopRatedTv} from "../../../types/ITopRatedTv";
import {tvService} from "../../../services";
import {IPopularTv} from "../../../types/IPopularTv";

type FetchTodosError = {
    message: string;
};

export const fetchTopRatedTv = createAsyncThunk<ITopRatedTv, undefined, {rejectValue: FetchTodosError}>(
    'tv/fetchTopRatedTv',
    async (_, {rejectWithValue}) => {
        try {
            return await tvService.getTopRated()
        } catch (e) {
            return rejectWithValue({message: 'Error'})
        }
    }
);

export const fetchPopularTv = createAsyncThunk<IPopularTv, undefined, {rejectValue: FetchTodosError}>(
    'tv/fetchPopularTv',
    async (_, {rejectWithValue}) => {
        try {
            return await tvService.getPopularTv()
        } catch (e) {
            return rejectWithValue({message: 'Error'})
        }
    }
)