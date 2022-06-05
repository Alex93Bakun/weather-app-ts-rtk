import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
import { Weather } from '../store/types/types';
import { useNavigate } from 'react-router-dom';

const CardComponent: FC<Weather> = ({
    name,
    main,
    weather,
    sys,
    updateCityWeatherHandler,
    index,
}) => {
    const navigate = useNavigate();

    const icon = weather[0].icon;
    const alt = weather[0].main;

    const getDetailWeatherHandler = (name: string) => {
        navigate(`${name}`);
    };

    return (
        <Card sx={{ maxWidth: 345, width: '325px' }} onClick={() => getDetailWeatherHandler(name)}>
            <CardActionArea>
                <Box
                    display="flex"
                    sx={{
                        height: 100,
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{
                            width: 100,
                            height: 100,
                        }}
                        image={`http://openweathermap.org/img/w/${icon}.png`}
                        alt={alt}
                    />
                    <Box
                        flexGrow={1}
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                        justifyContent="flex-end"
                    >
                        <Typography fontSize="30px" padding="16px">
                            {Math.round(main.temp)}°C
                        </Typography>
                        <Typography fontSize="14px" paddingRight="16px">
                            Feels like {Math.round(main.feels_like)}°C.
                        </Typography>
                    </Box>
                </Box>
                <CardContent
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {name}, {sys.country}
                    </Typography>
                    <Button
                        variant="text"
                        onClick={(e) => {
                            e.stopPropagation();
                            updateCityWeatherHandler(index);
                        }}
                    >
                        Update
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardComponent;
