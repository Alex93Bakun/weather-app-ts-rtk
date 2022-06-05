import { createSlice } from '@reduxjs/toolkit';

type CitiesSlice = {
    cities: string[];
};

const initialState: CitiesSlice = {
    cities: ['Kyiv', 'Kharkiv', 'Lviv', 'Odesa', 'Kryvyi Rih', 'London,uk', 'New York'],
};

export const citiesSlice = createSlice({
    name: 'cities_list',
    initialState,
    reducers: {
        addCity(state, action) {
            state.cities.push(action.payload);
        },
    },
});

export default citiesSlice.reducer;
