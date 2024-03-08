'use client';
import React, { useEffect, useState } from 'react'
import { getClient } from '@/apollo-client';
import FETCH_WEATHER from '@/graphql/queries/fetchWeather.queries';

// Define params props
type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

const WeatherPage = ({ params: { city, lat, long } }: Props) => {
    const client = getClient();

    const [weatherData, setWeatherData] = useState<Root | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await client.query({
                    query: FETCH_WEATHER,
                    variables: {
                        latitude: lat,
                        longitude: long,
                        timezone: 'GMT'
                    }
                });
                console.log(response);
                if (!response || !response.data) {
                    throw new Error('No data returned from query');
                }

                const result: Root = response.data.myQuery;
                console.log(result);

                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [lat, long]);

    return (
        <div>Welcome to {city} </div>
    )
}

export default WeatherPage