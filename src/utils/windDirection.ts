export const windDirection = (wind: number): string => {
    switch (true) {
        case wind > 0 && wind <= 22.5: {
            return 'N';
        }
        case wind > 22.5 && wind <= 45: {
            return 'NNE';
        }
        case wind > 45 && wind <= 67.5: {
            return 'NE';
        }
        case wind > 67.5 && wind <= 90: {
            return 'ENE';
        }
        case wind > 90 && wind <= 112.5: {
            return 'E';
        }
        case wind > 112.5 && wind <= 135: {
            return 'ESE';
        }
        case wind > 135 && wind <= 157.5: {
            return 'SE';
        }
        case wind > 157.5 && wind <= 180: {
            return 'SSE';
        }
        case wind > 180 && wind <= 202.5: {
            return 'S';
        }
        case wind > 202.5 && wind <= 225: {
            return 'SSW';
        }
        case wind > 225 && wind <= 247.5: {
            return 'SW';
        }
        case wind > 247.5 && wind <= 270: {
            return 'WSW';
        }
        case wind > 270 && wind <= 292.5: {
            return 'W';
        }
        case wind > 292.5 && wind <= 315: {
            return 'WNW';
        }
        case wind > 315 && wind <= 337.5: {
            return 'NW';
        }
        case wind > 337.5 && wind <= 360: {
            return 'NNW';
        }
        default: {
            return '';
        }
    }
};
