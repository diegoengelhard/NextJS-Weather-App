'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import InformationPanel from '@/components/InformationPanel';
import Spinner from '@/components/Spinner';

// Define params props
type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

// Define env variables
const API_URI = process.env.NEXT_PUBLIC_API_URI;
const STEPZEN_KEY = process.env.NEXT_PUBLIC_STEPZEN_KEY;

const WeatherPage = ({ params: { city, lat, long } }: Props) => {
    const [weatherData, setWeatherData] = useState<Root>({} as Root);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.post(API_URI || '', {
                    query: `
                        query myQuery($current_weather: String, $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,uv_index_clear_sky_max,sunrise,sunset", $hourly: String = "weathercode,temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,windgusts_10m,uv_index,uv_index_clear_sky,snowfall,snow_depth,showers,relativehumidity_2m", $latitude: String!, $longitude: String!, $timezone: String!) {
                            myQuery(
                            current_weather: $current_weather
                            daily: $daily
                            hourly: $hourly
                            latitude: $latitude
                            longitude: $longitude
                            timezone: $timezone
                            ) {
                            current_weather {
                                interval
                                is_day
                                temperature
                                time
                                weathercode
                                winddirection
                                windspeed
                            }
                            daily {
                                apparent_temperature_max
                                apparent_temperature_min
                                sunrise
                                sunset
                                temperature_2m_max
                                temperature_2m_min
                                time
                                uv_index_clear_sky_max
                                uv_index_max
                                weathercode
                            }
                            hourly {
                                apparent_temperature
                                precipitation
                                precipitation_probability
                                rain
                                relativehumidity_2m
                                showers
                                snow_depth
                                snowfall
                                temperature_2m
                                time
                                uv_index
                                uv_index_clear_sky
                                windgusts_10m
                            }
                            latitude
                            longitude
                            timezone
                            timezone_abbreviation
                            utc_offset_seconds
                            }
                        }
                    `,
                    variables: {
                        current_weather: "true",
                        latitude: lat,
                        longitude: long,
                        timezone: "GMT",
                    }
                }, {
                    headers: {
                        'Authorization': `apikey ${STEPZEN_KEY}`,
                        'Content-Type': 'application/json'
                    }
                });

                console.log('Response:', response.data.data.myQuery);
                setWeatherData(response.data.data.myQuery);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, [city, lat, long]);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex flex-col min-h-screen md:flex-row">
                    {/* Information Panel */}
                    <InformationPanel city={city} lat={lat} long={long} result={weatherData} />

                    {/* Right Side */}
                    <div>Welcome to {city} </div>
                </div>
            )}
        </>
    )
}

export default WeatherPage