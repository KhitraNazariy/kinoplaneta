import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {HomePage, NotFoundPage, PopularMoviePage} from "./pages";

const App: FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movie-popular'} element={<PopularMoviePage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;