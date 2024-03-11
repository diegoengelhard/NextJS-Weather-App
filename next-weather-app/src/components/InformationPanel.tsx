import React from 'react';
import CityPicker from '@/components/CityPicker';
import Image from 'next/image';
import weatherCodeToString, { WeatherCode } from '@/lib/weatherCodeToString';

// Define params props

interface InformationPanelProps {
    city: string;
    lat: string;
    long: string;
    result: Root;
}

const InformationPanel = ({ city, lat, long, result }: InformationPanelProps) => {
    return (
        <div className='bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white p-10'>
            {/* Selected City */}
            <div className='pb-5'>
                <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
                <p className='text-xs text-gray-400 mt-2'>
                    Long/Lat: {long}, {lat}
                </p>
            </div>

            {/* Select New City */}
            <CityPicker />

            {/* Local Weather Information */}
            <hr className='my-10' />
            <div className='mt-5 items-center flex justify-between space-x-10'>
                <div>
                    <p className='text-xl'>
                        {new Date().toLocaleString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                    <p className='font-extralight'>
                        Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                    </p>
                </div>
                <p className='text-xl font-bold uppercase'>
                    {new Date().toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                </p>
            </div>
            <hr className='mt-10 mb-5' />

            {/* Weather Information */}
            <div className='flex items-center justify-between'>
                {/* <div>
                    <Image
                        src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString(
                            result?.current_weather?.weathercode as WeatherCode
                        )?.icon
                            }.png`}
                        alt={
                            weatherCodeToString(
                                result?.current_weather?.weathercode as WeatherCode
                            )!.label
                        }
                        width={75}
                        height={75}
                    />
                    <div className='flex items-center justify-between space-x-10'>
                        <p className='text-6xl font-semibold'>
                            {result?.current_weather?.temperature.toFixed(1)}°C
                        </p>
                        <p className='text-right font-extralight'>
                            {
                                weatherCodeToString(
                                    result?.current_weather?.weathercode as WeatherCode
                                )?.label
                            }
                        </p>
                    </div>
                </div> */}
            </div>

            {/* Sunrise & Sunset */}
            <div className='space-y-2 py-5'>
                <div className='flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                    <div className='flex-1 flex justify-between items-center'>
                        <p className='font-extralight'>Sunrise</p>
                        <p className='uppercase text-2xl'>
                            {new Date(result?.daily?.sunrise[0]).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}
                        </p>
                    </div>
                </div>
                <div className='flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>

                    <div className='flex-1 flex justify-between items-center'>
                        <p className='font-extralight'>Sunset</p>
                        <p className='uppercase text-2xl'>
                            {new Date(result?.daily?.sunset[0]).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationPanel