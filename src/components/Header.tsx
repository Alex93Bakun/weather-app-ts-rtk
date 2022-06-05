import React, { FC } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

const Header: FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <HomeLink to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Weather
                        </Typography>
                    </HomeLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
