import reducer, { citiesSlice } from '../store/slices/citiesSlice';

const addCity = citiesSlice.actions.addCity;

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        cities: ['Kyiv', 'Kharkiv', 'Lviv', 'Odesa', 'Kryvyi Rih', 'London,uk', 'New York'],
    });
});

test('should handle a city being added to an empty list', () => {
    const previousState = { cities: [] };
    expect(reducer(previousState, addCity('Porto'))).toEqual({
        cities: ['Porto'],
    });
});

test('should handle a city being added to an existing list', () => {
    const previousState = { cities: ['Porto'] };
    expect(reducer(previousState, addCity('Madrid'))).toEqual({ cities: ['Porto', 'Madrid'] });
});
