import { Box, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useCustomDispatch } from '../hooks/store';
import { addCity } from '../store/thunks/addCity';
import { getUnique } from '../utils/getUnique';

const Container = styled.div`
    width: 60%;
    margin: 40px auto;
`;

const SearchBox: FC = () => {
    const [query, setQuery] = useState<any>('');
    const dispatch = useCustomDispatch();

    function selectCityHandler(e: React.KeyboardEvent<HTMLDivElement>): void {
        if (e.key === 'Enter' && query.length > 0) {
            const lsData = localStorage.getItem('cities');
            if (lsData) {
                const parsedData = JSON.parse(lsData);
                parsedData.push(query);
                localStorage.setItem('cities', JSON.stringify(getUnique(parsedData)));
            }
            dispatch(addCity(query));
            setQuery('');
        }
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { value } = e.target;
        setQuery(value);
    }

    return (
        <Container>
            <Box
                sx={{
                    width: '100%',
                    bgcolor: '#fff',
                }}
            >
                <TextField
                    fullWidth
                    label="Type city name and press Enter"
                    onChange={(e) => onChangeHandler(e)}
                    onKeyDown={(e) => selectCityHandler(e)}
                    value={query}
                />
            </Box>
        </Container>
    );
};

export default SearchBox;
