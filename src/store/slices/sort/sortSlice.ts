import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SortSliceState {
    minValueVoteAv: number;
    maxValueVoteAv: number;
    sendRequest: boolean;
}

const initialState: SortSliceState = {
    minValueVoteAv: 1,
    maxValueVoteAv: 10,
    sendRequest: false
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setMin: (state, action: PayloadAction<number>) => {
            state.minValueVoteAv = action.payload
        },

        setMax: (state, action: PayloadAction<number>) => {
            state.maxValueVoteAv = action.payload
        },

        changeSendRequest: (state, action: PayloadAction<boolean>) => {
            state.sendRequest = action.payload
        }
    },
    extraReducers: () => {

    }
});

const sort = sortSlice.reducer

export const {setMin, setMax, changeSendRequest} = sortSlice.actions;

export default sort