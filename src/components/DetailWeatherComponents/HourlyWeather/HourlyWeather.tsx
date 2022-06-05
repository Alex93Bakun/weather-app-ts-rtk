import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface IHourlyWeatherProps {
    lon: number;
    lat: number;
}

type THourleWeather = {
    temp: number;
    dt: number;
    weather: [{ icon: string }];
};

const HourlyWeather: FC<IHourlyWeatherProps> = ({ lon, lat }) => {
    const [hourlyWeather, setHourlyWeather] = useState<THourleWeather[]>([]);

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=52bd84c502b64a2423919bfa44589376&exclude=minutely&units=metric`,
            )
            .then((r) => {
                setHourlyWeather(r.data.hourly.slice(0, 12));
            });
    }, []);

    const convertDate = (timestamp: number): string[] => {
        const myDate = new Date(timestamp * 1000);
        return myDate.toLocaleString().split(',');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', columnGap: '15px' }}>
            {hourlyWeather.map((hw) => {
                return (
                    <div
                        style={{
                            background: '#fff',
                            width: '160px',
                            borderRadius: '20px',
                            height: '160px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <img
                                src={`http://openweathermap.org/img/w/${hw.weather[0].icon}.png`}
                                alt="icon"
                            />
                        </div>
                        <div style={{ alignSelf: 'center', fontSize: '30px', color: '#4793ff' }}>
                            {Math.round(hw.temp)}°C
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingBottom: '10px',
                                color: '#939cb0',
                            }}
                        >
                            <span>{convertDate(hw.dt)[0]}</span>
                            <span>{convertDate(hw.dt)[1]}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HourlyWeather;
