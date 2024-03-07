'use client';
import React from 'react'

// Define params props
type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

const WeatherPage = ({ params: { city, lat, long } }: Props) => {
    return (
        <div>Welcome to {city} </div>
    )
}

export default WeatherPage