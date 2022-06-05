import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clearState, fetchCurrentWeather } from '../store/thunks/fetchCurrentWeather';
import { useCustomDispatch, useCustomSelector } from '../hooks/store';
import Loader from '../components/Loader';
import styled from 'styled-components';
import { getTime } from '../utils/getTime';
import DetailWeatherInfo from '../components/DetailWeatherComponents/DetailWeatherInfo';
import HourlyWeather from '../components/DetailWeatherComponents/HourlyWeather/HourlyWeather';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    padding: 20px;
`;

const ThisDayContainer = styled.div`
    padding: 20px;
    max-width: 400px;
    width: 100%;
    background: #fff;
    box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
    border-radius: 20px;
`;

const ThisDayTopBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
`;

const ThisDayTopBlockTemp = styled.div`
    font-size: 96px;
    font-weight: 500;
    color: #4793ff;
`;

const ThisDayTopBlockDayName = styled.div`
    font-size: 40px;
    color: var(#{--text-color-default});
`;

const ThisDayBottomBlockElements = styled.div`
    color: #939cb0;
    font-size: 25px;
`;

const DetailWeather: FC = () => {
    const param = useParams();
    const name: string = param.name || '';
    const dispatch = useCustomDispatch();
    const { weather, isLoading } = useCustomSelector((state) => state.currentWeatherSliceReducer);

    useEffect(() => {
        dispatch(clearState());
        dispatch(fetchCurrentWeather(name));
    }, []);

    // const filteredWeather = weather.filter((w) => w.name === name);
    // setCurrentWeather(filteredWeather);

    if (weather.length === 0 || isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <Wrapper>
                <ThisDayContainer>
                    <ThisDayTopBlock>
                        <div>
                            <ThisDayTopBlockTemp>
                                {Math.round(weather[0].main.temp)}°C
                            </ThisDayTopBlockTemp>
                            <ThisDayTopBlockDayName>Today</ThisDayTopBlockDayName>
                        </div>
                        <img
                            height={140}
                            width={140}
                            src={`http://openweathermap.org/img/w/${weather[0].weather[0].icon}.png`}
                            alt={weather[0].weather[0].description}
                        />
                    </ThisDayTopBlock>
                    <div>
                        <ThisDayBottomBlockElements>
                            Time: <span>{getTime()}</span>
                        </ThisDayBottomBlockElements>
                        <ThisDayBottomBlockElements>
                            Location: <span>{weather[0].name}</span>
                        </ThisDayBottomBlockElements>
                    </div>
                </ThisDayContainer>
                <DetailWeatherInfo main={weather[0].main} wind={weather[0].wind} />
            </Wrapper>
            <HourlyWeather lon={weather[0].coord.lon} lat={weather[0].coord.lat} />
        </div>
    );
};

export default DetailWeather;
