import React, { FC, useEffect } from 'react';

import CardComponent from '../components/CardComponent';
import Loader from '../components/Loader';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox';
import api from '../axios';
import { useCustomDispatch, useCustomSelector } from '../hooks/store';
import {
    clearState,
    fetchCurrentWeather,
    updateCityWeather,
} from '../store/thunks/fetchCurrentWeather';
import { Weather } from '../store/types/types';

const CardContainer = styled.div`
    padding: 0 15px;
    display: flex;
    column-gap: 35px;
    row-gap: 20px;
    flex-wrap: wrap;
`;

interface IHomeProps {
    cities: string[];
}

const Home: FC<IHomeProps> = ({ cities }) => {
    const dispatch = useCustomDispatch();
    const { weather, isLoading } = useCustomSelector((state) => state.currentWeatherSliceReducer);

    useEffect(() => {
        dispatch(clearState());
        cities.forEach((city) => {
            dispatch(fetchCurrentWeather(city));
        });
    }, [cities]);

    const updateStateHandler = (index: number, state: Weather) => {
        const newWeather = [...weather];
        newWeather[index] = state;
        dispatch(updateCityWeather(newWeather[index].name));
    };

    const updateCityWeatherHandler = async (cityIndex: number) => {
        const { data } = await api.get(`/weather?q=${cities[cityIndex]}&units=metric`);
        updateStateHandler(cityIndex, data);
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <SearchBox />
            <CardContainer>
                {weather.map((item: any, i: React.Key | null | undefined) => {
                    console.log(item);
                    return (
                        <CardComponent
                            key={i}
                            {...item}
                            updateCityWeatherHandler={updateCityWeatherHandler}
                            index={i}
                        />
                    );
                })}
            </CardContainer>
        </>
    );
};

export default Home;
