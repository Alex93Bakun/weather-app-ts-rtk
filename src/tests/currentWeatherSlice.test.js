import reducer, { currentWeatherSlice } from '../store/slices/currentWeatherSlice';

const fetchCurrentWeather = currentWeatherSlice.actions.fetchCurrentWeather;
const clearState = currentWeatherSlice.actions.clearState;

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        weather: [],
        isLoading: false,
        response: {
            status: 0,
            message: '',
        },
    });
});

test('should handle a start fetching weather', () => {
    const previousState = {
        weather: [],
        isLoading: false,
        response: {
            status: 0,
            message: '',
        },
    };
    expect(reducer(previousState, fetchCurrentWeather())).toEqual({
        weather: [],
        isLoading: true,
        response: {
            status: 0,
            message: '',
        },
    });
});

test('should handle a clear state', () => {
    const previousState = {
        weather: [
            {
                coord: {
                    lon: 30.5167,
                    lat: 50.4333,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                base: 'stations',
                main: {
                    temp: 19.35,
                    feels_like: 18.93,
                    temp_min: 19.35,
                    temp_max: 19.35,
                    pressure: 1018,
                    humidity: 61,
                    sea_level: 1018,
                    grnd_level: 1002,
                },
                visibility: 10000,
                wind: {
                    speed: 3.32,
                    deg: 41,
                    gust: 3.61,
                },
                clouds: {
                    all: 100,
                },
                dt: 1654432403,
                sys: {
                    country: 'UA',
                    sunrise: 1654393765,
                    sunset: 1654452220,
                },
                timezone: 10800,
                id: 703448,
                name: 'Kyiv',
                cod: 200,
            },
        ],
        isLoading: false,
        response: {
            status: 200,
            message: 'OK',
        },
    };
    expect(reducer(previousState, clearState())).toEqual({
        weather: [],
        isLoading: false,
        response: {
            status: 0,
            message: '',
        },
    });
});
