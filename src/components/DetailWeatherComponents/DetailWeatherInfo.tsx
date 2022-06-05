import React, { FC } from 'react';
import DetailWeatherItem from './DetailWeatherItem';

import cloud from '../../assets/images/cloud.png';
import styled from 'styled-components';
import { windDirection } from '../../utils/windDirection';

const DetailWeatherInfoContainer = styled.div`
    position: relative;
    padding: 40px;
    max-width: 750px;
    width: 100%;
    box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
    border-radius: 20px;
    background: #fff;
`;

const CloudImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;
`;

export interface Item {
    icon_id: string;
    name: string;
    value: string;
}

interface IDetailWeatherInfoProps {
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
}

const DetailWeatherInfo: FC<IDetailWeatherInfoProps> = ({ main, wind }) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Temperature: ',
            value: `${Math.round(main.temp)}°C - fells like ${Math.round(main.feels_like)}°`,
        },
        {
            icon_id: 'pressure',
            name: 'Pressure: ',
            value: `${main.pressure} mm`,
        },
        {
            icon_id: 'precipitation',
            name: 'Humidity: ',
            value: `${main.humidity}%`,
        },
        {
            icon_id: 'wind',
            name: 'Wind: ',
            value: `${Math.round(wind.speed)} km/h ${windDirection(wind.deg)}`,
        },
    ];

    return (
        <DetailWeatherInfoContainer>
            <div>
                {items.map((item: Item) => (
                    <DetailWeatherItem key={item.icon_id} item={item} />
                ))}
            </div>
            <CloudImg src={cloud} alt="cloud" />
        </DetailWeatherInfoContainer>
    );
};

export default DetailWeatherInfo;
