import React from 'react'
import { Metric, Text, Color } from '@tremor/react';
import Card from '@/components/Card';

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
            <Card>
                <div className={`absolute top-0 left-0 w-full h-2 ${colorClasses[color]}`}></div>
                <Text>{title}</Text>
                <Metric>{metric}</Metric>
            </Card>
        </>
    )
}

export default StatCard