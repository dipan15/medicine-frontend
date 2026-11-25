import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'

// This file is not required in this project. Routes handled differently.
function AppRouter() {
    return (
        <BrowserRouter>
            <App></App>
            {/* Route Definitions */}
            <Routes>
                <Route path='/' element={App} />
                <Route path='/create' />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter