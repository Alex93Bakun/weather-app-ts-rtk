import { fireEvent, render, screen } from '@testing-library/react';
import SearchBox from '../components/SearchBox';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import React from 'react';
import { createMemoryHistory } from 'history';

test('It should keep a entered value', () => {
    const history = createMemoryHistory();

    render(
        <Router location={history.location} navigator={history}>
            <Provider store={store}>
                <SearchBox />
            </Provider>
        </Router>,
    );

    const input = screen.getByLabelText('Type city name and press Enter')
    fireEvent.change(input, { target: { value: 'Berlin' } });
    // @ts-ignore
    expect(input.value).toBe('Berlin');
});