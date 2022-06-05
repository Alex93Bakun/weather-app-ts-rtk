import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import userEvent from '@testing-library/user-event';
import React from 'react';
import CardComponent from '../components/CardComponent';

const item: {
    dt: number;
    coord: { lon: number; lat: number };
    weather: [{ icon: string; description: string; main: string }];
    name: string;
    main: { temp: number; humidity: number; pressure: number; feels_like: number };
    id: number;
    sys: { country: string };
    wind: { deg: number; speed: number };
} = {
    coord: {
        lon: 19.9167,
        lat: 50.0833,
    },
    weather: [
        {
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d',
        },
    ],
    main: {
        temp: 24.59,
        feels_like: 24.28,
        pressure: 1018,
        humidity: 45,
    },
    wind: {
        speed: 4.63,
        deg: 20,
    },
    dt: 1654435659,
    sys: {
        country: 'PL',
    },
    id: 3094802,
    name: 'Krakow',
};

test('card component rendering/navigating', async () => {
    const history = createMemoryHistory();

    render(
        <Router location={history.location} navigator={history}>
            <Provider store={store}>
                <CardComponent key={0} {...item} updateCityWeatherHandler={() => {}} index={0} />
            </Provider>
        </Router>,
    );
    const user = userEvent.setup();
    expect(screen.getByText('Krakow, PL')).toBeInTheDocument();

    await user.click(screen.getByText('Krakow, PL'));
    expect(history.location.pathname).toBe('/Krakow');
});
