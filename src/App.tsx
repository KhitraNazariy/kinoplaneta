import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {
    AiringTodayTvPage,
    HomePage, LoginPage,
    MovieDetailsPage,
    MovieDiscoverPage,
    MoviesSelectedPage,
    NotFoundPage,
    NowPlayingMoviePage,
    OnTheAirTvPage,
    PersonDetailsPage,
    PopularMoviePage,
    PopularPersonPage,
    PopularTvPage,
    RegisterPage,
    TopRatedMoviePage,
    TopRatedTvPage,
    TvDetailsPage,
    TvDiscoverPage,
    TvsSelectedPage,
    UpcomingMoviePage
} from "./pages";

const App: FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movie-popular'} element={<PopularMoviePage/>}/>
                    <Route path={'movie-now-playing'} element={<NowPlayingMoviePage/>}/>
                    <Route path={'movie-upcoming'} element={<UpcomingMoviePage/>}/>
                    <Route path={'movie-top-rated'} element={<TopRatedMoviePage/>}/>
                    <Route path={'movie-discover'} element={<MovieDiscoverPage/>}/>
                    <Route path={'movie/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'tv-popular'} element={<PopularTvPage/>}/>
                    <Route path={'tv-airing-today'} element={<AiringTodayTvPage/>}/>
                    <Route path={'tv-on-the-air'} element={<OnTheAirTvPage/>}/>
                    <Route path={'tv-top-rated'} element={<TopRatedTvPage/>}/>
                    <Route path={'tv-discover'} element={<TvDiscoverPage/>}/>
                    <Route path={'tv/:id'} element={<TvDetailsPage/>}/>
                    <Route path={'person-popular'} element={<PopularPersonPage/>}/>
                    <Route path={'person/:id'} element={<PersonDetailsPage/>}/>
                    <Route path={'selected-movie'} element={<MoviesSelectedPage/>}/>
                    <Route path={'selected-tv'} element={<TvsSelectedPage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;