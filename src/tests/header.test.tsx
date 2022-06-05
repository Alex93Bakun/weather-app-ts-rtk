import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { store } from '../store/store';

import Header from '../components/Header';

test('header rendering/navigating', async () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Provider store={store}>
                <Header />
            </Provider>
        </Router>,
    );
    const user = userEvent.setup();
    expect(screen.getByText(/weather/i)).toBeInTheDocument();

    await user.click(screen.getByText(/weather/i));
    expect(history.location.pathname).toBe('/');
});
