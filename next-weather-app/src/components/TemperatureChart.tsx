import React from 'react';
import Card from '@/components/Card';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

interface TempChartProps {
    result: {
        daily: {
            time: string[];
            temperature_2m_max: number[];
            uv_index_max: number[];
        };
    };
}

const TemperatureChart = ({ result }: TempChartProps) => {
    const { daily } = result;

    // Extracting data and formatting dates
    const data = daily?.time.map((time, index) => ({
        time: new Date(time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        temperature: daily.temperature_2m_max[index],
        uvIndex: daily.uv_index_max[index],
    }));

    return (
        <Card>
            <h2>Temperature and UV Index Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="uvIndex" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default TemperatureChart