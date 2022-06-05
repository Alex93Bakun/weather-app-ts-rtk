import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import './index.css';
import { useCustomDispatch, useCustomSelector } from './hooks/store';
import { getUnique } from './utils/getUnique';
import { addCity } from './store/thunks/addCity';

const Home = React.lazy(() => import('./Pages/Home'));
const DetailWeather = React.lazy(() => import('./Pages/DetailWeather'));

const App = () => {
    const dispatch = useCustomDispatch();
    const { cities } = useCustomSelector((state) => state.citiesSliceReducer);

    if (!localStorage.hasOwnProperty('cities')) {
        localStorage.setItem('cities', JSON.stringify(getUnique(cities)));
    }

    const cityList = JSON.parse(localStorage.getItem('cities') || '');

    if (cities.length < cityList.length) {
        for (let i = 0; i < cityList.length; i++) {
            if (cities.indexOf(cityList[i]) === -1) {
                dispatch(addCity(cityList[i]));
            }
        }
    }

    return (
        <Routes data-testid="router">
            <Route path="/" element={<MainLayout />}>
                <Route
                    path=""
                    element={
                        <Suspense fallback={<div>loading...</div>}>
                            <Home cities={cities} />
                        </Suspense>
                    }
                />
                <Route
                    path="/:name"
                    element={
                        <Suspense fallback={<div>loading...</div>}>
                            <DetailWeather />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
};

export default App;
