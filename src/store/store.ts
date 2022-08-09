import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

import movie from "./slices/movie/movieSlice";
import tv from "./slices/tv/tvSlice";

const store = configureStore({
    reducer: {
        movie,
        tv
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch