import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPopularPerson} from "../../../types/IPopularPerson";
import {personService} from "../../../services";

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