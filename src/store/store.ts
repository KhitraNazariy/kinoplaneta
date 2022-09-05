import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

import movie from "./slices/movie/movieSlice";
import tv from "./slices/tv/tvSlice";
import person from "./slices/person/personSlice";
import sort from "./slices/sort/sortSlice";

const store = configureStore({
    reducer: {
        movie,
        tv,
        person,
        sort
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch