'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import InformationPanel from '@/components/InformationPanel';
import StatCard from '@/components/StatCard';
import CalloutCard from '@/components/CalloutCard';
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
                        query MyQuery(
                            $current_weather: String
                            $timezone: String!
                            $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,uv_index_clear_sky_max,sunrise,sunset"
                            $hourly: String = "weathercode,temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,windgusts_10m,uv_index,uv_index_clear_sky,snowfall,snow_depth,showers,relativehumidity_2m"
                            $latitude: String!
                            $longitude: String!
                        ) {
                            myQuery(
                            current_weather: $current_weather
                            timezone: $timezone
                            daily: $daily
                            hourly: $hourly
                            latitude: $latitude
                            longitude: $longitude
                            ) {
                            current_weather {
                                is_day
                                temperature
                                time
                                weathercode
                                winddirection
                                windspeed
                            }
                            daily {
                                apparent_temperature_max
                                weathercode
                                uv_index_max
                                uv_index_clear_sky_max
                                time
                                temperature_2m_min
                                sunset
                                sunrise
                                apparent_temperature_min
                                temperature_2m_max
                            }
                            daily_units {
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
                            elevation
                            generationtime_ms
                            hourly {
                                apparent_temperature
                                windgusts_10m
                                uv_index_clear_sky
                                uv_index
                                time
                                temperature_2m
                                snowfall
                                snow_depth
                                showers
                                relativehumidity_2m
                                rain
                                precipitation_probability
                                precipitation
                            }
                            hourly_units {
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
                const formattedData = response.data.data.myQuery;
                console.log('Response:', formattedData);
                setWeatherData(formattedData);
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
                    {/* Left Side - Information Panel */}
                    <InformationPanel city={city} lat={lat} long={long} result={weatherData} />

                    {/* Right Side - Weather Details & Charts */}
                    <div className='flex-1 p-5 lg:p-10'>
                        <div className='p-4'>
                            <div className='pb-5'>
                                <h2 className='text-xl font-bold'>Todays Overview</h2>
                                {/* <p className='text-sm text-gray-400'>
                                    Last Updated at:{' '}
                                    {new Date(weatherData.current_weather.time).toLocaleString()} (
                                    {weatherData.timezone})
                                </p> */}
                            </div>
                            {/* <div className='m-2 mb-10'>
                                <CalloutCard message='This is where GPT summary will go.' />
                            </div> */}
                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 m-2'>
                                <StatCard
                                    title='Temperature'
                                    metric={`${weatherData?.current_weather?.temperature.toFixed(1)}°`}
                                    color='yellow'
                                />

                                <StatCard
                                    title='Minimum Temperature'
                                    metric={`${weatherData?.daily?.temperature_2m_min[0].toFixed(1)}°`}
                                    color='green'
                                />
                                <div>
                                    <StatCard
                                        title='UV Index'
                                        metric={weatherData?.daily?.uv_index_max[0].toFixed(1)}
                                        color='red'
                                    />
                                    {Number(weatherData?.daily?.uv_index_max[0].toFixed(1)) > 5 && (
                                        <CalloutCard
                                            message='High UV Index. Please wear sunscreen.'
                                            warning
                                        />
                                    )}
                                </div>
                                <div className='flex space-x-3'>
                                    <StatCard
                                        title='Wind Speed'
                                        metric={`${weatherData?.current_weather?.windspeed.toFixed(1)}m/s`}
                                        color='cyan'
                                    />
                                    <StatCard
                                        title='Wind Direction'
                                        metric={`${weatherData?.current_weather?.winddirection.toFixed(1)}°`}
                                        color='purple'
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className='mb-5' />

                        {/* Charts */}
                        <div className='space-y-3'>
                            {/* Temp Chart */}
                            {/* Rain Chart */}
                            {/* Humidity Chart */}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default WeatherPage