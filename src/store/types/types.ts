export type Weather = {
    id: number;
    coord: {
        lon: number;
        lat: number;
    };
    name: string;
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
    };
    weather: [
        {
            description: string;
            icon: string;
            main: string;
        },
    ];
    sys: {
        country: string;
    };
    wind: {
        speed: number;
        deg: number;
    };
    updateCityWeatherHandler: (index: number) => void;
    index: number;
    dt: number;
};
