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
    primaryReleaseDate: string;
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
    primaryReleaseDate: 'desc'
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setMin: (state, action: PayloadAction<{type: string, value: number}>) => {
            state.disabledBtn = false
            if (action.payload.type === 'rating') {
                state.minValueVoteAv = action.payload.value
            } else if (action.payload.type === 'year') {
                state.minReleaseYear = action.payload.value
            }
        },

        setMax: (state, action: PayloadAction<{type: string, value: number}>) => {
            state.disabledBtn = false
            if (action.payload.type === 'rating') {
                state.maxValueVoteAv = action.payload.value
            } else if (action.payload.type === 'year') {
                state.maxReleaseYear = action.payload.value
            }
        },

        setGenre: (state, action: PayloadAction<{id: number, name: string}>) => {
            state.disabledBtn = false
            state.genreSort = action.payload
        },

        setPrimaryReleaseDate: (state, action: PayloadAction<string>) => {
            state.disabledBtn = false
            state.primaryReleaseDate = action.payload
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
            state.primaryReleaseDate = 'desc'
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
    setPrimaryReleaseDate

} = sortSlice.actions;

export default sort