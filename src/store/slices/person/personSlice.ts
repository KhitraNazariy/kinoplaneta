import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IPopularPerson} from "../../../types/IPopularPerson";
import {fetchCombinedCredits, fetchPersonDetails, fetchPopularPerson} from "./asyncActions";
import {IPersonDetails} from "../../../types/IPersonDetails";
import {ICombinedCredits} from "../../../types/ICombinedCredits";

interface PersonSliceState {
    responsePopularPerson: IPopularPerson;
    responseDetailsPerson: IPersonDetails;
    responseCombineCredits: ICombinedCredits;
    status: string;
    error: string | null
}

const initialState: PersonSliceState = {
    responsePopularPerson: {} as IPopularPerson,
    responseDetailsPerson: {} as IPersonDetails,
    responseCombineCredits: {} as ICombinedCredits,
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

        builder.addCase(fetchPersonDetails.pending, (state) => {
            state.error = null;
            state.status = 'loading'
        })
        builder.addCase(fetchPersonDetails.fulfilled, (state, action: PayloadAction<IPersonDetails>) => {
            state.error = null;
            state.status = 'success';
            state.responseDetailsPerson = action.payload
        })
        builder.addCase(fetchPersonDetails.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        })

        builder.addCase(fetchCombinedCredits.pending, (state) => {
            state.error = null;
            state.status = 'loading'
        })
        builder.addCase(fetchCombinedCredits.fulfilled, (state, action: PayloadAction<ICombinedCredits>) => {
            state.error = null;
            state.status = 'success';
            state.responseCombineCredits = action.payload
        })
        builder.addCase(fetchCombinedCredits.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message
            }
        })
    }
});

const person = personSlice.reducer

export default person