import React from 'react'
import { Card, Metric, Text, Color } from '@tremor/react';

interface StatCardProps {
    title: string;
    metric: string;
    color: string;
}

const colorClasses: { [key: string]: string } = {
    red: 'bg-red-400',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
    blue: 'bg-blue-200',
    cyan: 'bg-cyan-200',
    // add more colors if needed
  };

const StatCard = ({ title, metric, color }: StatCardProps) => {
    return (
        <>
            <div className="shadow-md rounded-md p-4 relative w-full">
                <div className={`absolute top-0 left-0 w-full h-2 ${colorClasses[color]}`}></div>
                <Text>{title}</Text>
                <Metric>{metric}</Metric>
            </div>
        </>
    )
}

export default StatCard