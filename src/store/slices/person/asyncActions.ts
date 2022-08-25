import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPopularPerson} from "../../../types/IPopularPerson";
import {personService} from "../../../services";
import {IPersonDetails} from "../../../types/IPersonDetails";
import {ICombinedCredits} from "../../../types/ICombinedCredits";

interface FetchTodosError {
    message: string;
}

export const fetchPopularPerson = createAsyncThunk<IPopularPerson, {page: number}, {rejectValue: FetchTodosError}>(
    'person/fetchPopularPerson',
    async ({page}, {rejectWithValue}) => {
        try {
            return await personService.getPopular(page)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)

export const fetchPersonDetails = createAsyncThunk<IPersonDetails, {id: string | undefined}, {rejectValue: FetchTodosError}>(
    'person/fetchPersonDetails',
    async ({id}, {rejectWithValue}) => {
        try {
            return await personService.getDetails(id)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)

export const fetchCombinedCredits = createAsyncThunk<ICombinedCredits, {id: string | undefined}, {rejectValue: FetchTodosError}>(
    'person/fetchCombinedCredits',
    async ({id}, {rejectWithValue}) => {
        try {
            return await personService.getCombinedCredits(id)
        } catch (e) {
            return rejectWithValue({message: 'Сервер не відповідає'})
        }
    }
)