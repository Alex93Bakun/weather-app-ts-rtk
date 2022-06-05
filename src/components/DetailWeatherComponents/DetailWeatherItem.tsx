import React, { FC } from 'react';
import { Item } from './DetailWeatherInfo';
import { IndicatorSvgSelector } from '../../assets/icons/indicators/IndicatorSvgSelector';
import styled from 'styled-components';

interface IDetailWeatherItemProps {
    item: Item;
}

const ItemContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    &:last-of-type {
        margin-bottom: 0;
    }
`;

const Indicator = styled.div`
    margin-right: 20px;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
    border-radius: 50%;
`;

const IndicatorText = styled.div`
    font-size: 14px;
    color: #939cb0;
`;

const DetailWeatherItem: FC<IDetailWeatherItemProps> = ({ item }) => {
    const { icon_id, name, value } = item;

    return (
        <ItemContainer>
            <Indicator>
                <IndicatorSvgSelector id={icon_id} />
            </Indicator>
            <IndicatorText>{name}</IndicatorText>
            <IndicatorText>{value}</IndicatorText>
        </ItemContainer>
    );
};

export default DetailWeatherItem;
