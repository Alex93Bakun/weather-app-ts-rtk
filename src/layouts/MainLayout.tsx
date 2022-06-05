import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import { Box, Container } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
`;

const MainLayout: FC = () => {
    return (
        <Wrapper>
            <Header />
            <Container maxWidth="xl">
                <Box>
                    <Outlet />
                </Box>
            </Container>
        </Wrapper>
    );
};

export default MainLayout;
