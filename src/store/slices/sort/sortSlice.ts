import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SortSliceState {
    minValueVoteAv: number;
    maxValueVoteAv: number;
    sendRequest: boolean;
    disabledBtn: boolean;
    isResetBtn: boolean;
    minReleaseYear: number;
    maxReleaseYear: number;
    genreSort: {
        id: number | null;
        name: string;
    }
    sortBy: {
        name: string;
        query: string;
    }
}

const initialState: SortSliceState = {
    minValueVoteAv: 1,
    maxValueVoteAv: 10,
    sendRequest: false,
    disabledBtn: true,
    isResetBtn: false,
    minReleaseYear: 1874,
    maxReleaseYear: new Date().getFullYear(),
    genreSort: {
        name: '',
        id: null
    },
    sortBy: {
        name: 'Популярні',
        query: 'popularity.desc'
    }
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setMin: (state, action: PayloadAction<{ type: string, value: number }>) => {
            state.disabledBtn = false
            if (action.payload.type === 'rating') {
                state.minValueVoteAv = action.payload.value
            } else if (action.payload.type === 'year') {
                state.minReleaseYear = action.payload.value
            }
        },

        setMax: (state, action: PayloadAction<{ type: string, value: number }>) => {
            state.disabledBtn = false
            if (action.payload.type === 'rating') {
                state.maxValueVoteAv = action.payload.value
            } else if (action.payload.type === 'year') {
                state.maxReleaseYear = action.payload.value
            }
        },

        setGenre: (state, action: PayloadAction<{ id: number, name: string }>) => {
            state.disabledBtn = false
            state.genreSort = action.payload
        },

        setSortBy: (state, action: PayloadAction<{name: string, query: string}>) => {
            state.disabledBtn = false
            state.sortBy = action.payload
        },

        changeSendRequest: (state, action: PayloadAction<boolean>) => {
            state.sendRequest = action.payload
        },

        changeDisabledBtn: (state, action) => {
            state.disabledBtn = action.payload
        },

        resetBtn: (state, action) => {
            state.isResetBtn = !state.disabledBtn
            state.isResetBtn = action.payload
            state.genreSort = {id: null, name: ''}
            state.sortBy = {
                name: 'Популярні',
                query: 'popularity.desc'
            }
        }
    },
    extraReducers: () => {

    }
});

const sort = sortSlice.reducer

export const {
    setMin,
    setMax,
    changeSendRequest,
    changeDisabledBtn,
    resetBtn,
    setGenre,
    setSortBy

} = sortSlice.actions;

export default sort