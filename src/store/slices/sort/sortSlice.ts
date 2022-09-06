import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SortSliceState {
    minValueVoteAv: number;
    maxValueVoteAv: number;
    sendRequest: boolean;
    disabledBtn: boolean;
    minReleaseYear: number;
    maxReleaseYear: number;
}

const initialState: SortSliceState = {
    minValueVoteAv: 1,
    maxValueVoteAv: 10,
    sendRequest: false,
    disabledBtn: true,
    minReleaseYear: 1874,
    maxReleaseYear: new Date().getFullYear()
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setMin: (state, action: PayloadAction<number>) => {
            state.minValueVoteAv = action.payload
            state.disabledBtn = false
        },

        setMax: (state, action: PayloadAction<number>) => {
            state.maxValueVoteAv = action.payload
            state.disabledBtn = false
        },

        changeSendRequest: (state, action: PayloadAction<boolean>) => {
            state.sendRequest = action.payload
        },

        changeDisabledBtn: (state, action) => {
            state.disabledBtn = action.payload
        },

        resetBtn: (state) => {
            state.minValueVoteAv = 1
            state.maxValueVoteAv = 10
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
    resetBtn

} = sortSlice.actions;

export default sort