import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {HomePage} from "./pages";

const App: FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;