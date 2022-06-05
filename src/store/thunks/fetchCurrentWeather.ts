import { AppDispatch } from '../store';
import { currentWeatherSlice } from '../slices/currentWeatherSlice';
import { WeatherService } from '../../services/WeatherService';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
        const res = await WeatherService.getCurrentWeather(payload);
        if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
        } else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
        }
    } catch (e) {
        console.log(e);
    }
};

export const clearState = () => async (dispatch: AppDispatch) => {
    dispatch(currentWeatherSlice.actions.clearState());
};

export const updateCityWeather = (payload: string) => async (dispatch: AppDispatch) => {
    const res = await WeatherService.getCurrentWeather(payload);
    dispatch(currentWeatherSlice.actions.updateCityWeather(res));
};
