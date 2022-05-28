import React from "react";
import { Route, Routes } from 'react-router-dom';

import Test from '../pages/Test';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Test />}/>
        </Routes>
    );
};

export default AppRoutes;