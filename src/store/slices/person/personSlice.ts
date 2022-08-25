import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IPopularPerson} from "../../../types/IPopularPerson";
import {fetchPopularPerson} from "./asyncActions";

interface PersonSliceState {
    responsePopularPerson: IPopularPerson;
    status: string;
    error: string | null
}

const initialState: PersonSliceState = {
    responsePopularPerson: {} as IPopularPerson,
    status: '',
    error: null
}

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPopularPerson.pending, (state) => {
            state.error = null;
            state.status = 'loading'
        })
        builder.addCase(fetchPopularPerson.fulfilled, (state, action: PayloadAction<IPopularPerson>) => {
            state.error = null;
            state.status = 'success';
            state.responsePopularPerson = action.payload
        })
        builder.addCase(fetchPopularPerson.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        })
    }
});

const person = personSlice.reducer

export default person