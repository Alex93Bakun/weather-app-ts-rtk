import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../types/types';
import { AxiosResponse } from 'axios';

type CurrentWeather = {
    weather: Weather[];
    isLoading: boolean;
    response: WeatherResponse;
};

type WeatherResponse = {
    status: number;
    message: string;
};

const initialState: CurrentWeather = {
    weather: [],
    isLoading: false,
    response: {
        status: 0,
        message: '',
    },
};

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.weather.push(action.payload.data);
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            };
        },
        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            };
        },
        clearState() {
            return initialState;
        },
        updateCityWeather(state, action: PayloadAction<AxiosResponse<Weather>>) {
            const updatedWeather = action.payload.data;

            const idx = state.weather.findIndex((st) => {
                return st.id === updatedWeather.id;
            });

            state.weather[idx] = updatedWeather;
        },
    },
});

export default currentWeatherSlice.reducer;
