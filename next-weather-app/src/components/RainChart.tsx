import React from 'react';
import Card from '@/components/Card';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

interface RainChartProps {
    result: {
        hourly: {
            time: string[];
            precipitation: number[];
            precipitation_probability: number[];
            rain: number[];
            showers: number[];
        };
        daily: {
            time: string[];
        };
    };
}


const RainChart = ({ result }: RainChartProps) => {
    const { hourly, daily } = result;

    // Combining hourly and daily data
    const data = daily?.time.map((time, index) => ({
        time,
        precipitation: hourly.precipitation[index],
        precipitation_probability: hourly.precipitation_probability[index],
        rain: hourly.rain[index],
        showers: hourly.showers[index]
    }));


    return (
        <Card>
            <h2>Rain Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="rain" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default RainChart