import { AppDispatch } from '../store';
import { citiesSlice } from '../slices/citiesSlice';

export const addCity = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(citiesSlice.actions.addCity(payload));
    } catch (e) {
        console.log(e);
    }
};
