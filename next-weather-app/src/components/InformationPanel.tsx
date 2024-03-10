import React from 'react';
import CityPicker from '@/components/CityPicker';
import weatherCodeToString, { WeatherCode } from '@/lib/weatherCodeToString';

// Define params props
type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

const InformationPanel = () => {
    return (
        <div>InformationPanel</div>
    )
}

export default InformationPanel