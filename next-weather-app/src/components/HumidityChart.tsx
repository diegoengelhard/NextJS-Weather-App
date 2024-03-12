import React from 'react';
import Card from '@/components/Card';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

interface HumidityChartProps {
    result: {
        hourly: {
            time: string[];
            relativehumidity_2m: number[];
        };
        daily: {
            time: string[];
        };
    };
}

const HumidityChart = ({ result }: HumidityChartProps) => {
    const { hourly, daily } = result;

    // Combining hourly and daily data
    const data = daily?.time.map((time, index) => ({
        time,
        relativehumidity_2m: hourly.relativehumidity_2m[index],
    }));

    return (
        <Card>
            <h2>Humidity Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="relativehumidity_2m" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default HumidityChart