import React from 'react';
import Card from '@/components/Card';

interface CalloutCardProps {
    message: string;
    warning?: boolean;
}

const CalloutCard = ({ message, warning }: CalloutCardProps) => {
    const ExclamationIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-2 text-red-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
    );

    const CheckCircleIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    );

    return (
        <>
            <div className='mt-4'>
                {warning ? (
                    <Card className='flex bg-red-100'>
                        <ExclamationIcon />
                        <p className="text-base font-medium text-red-700">{message}</p>
                    </Card>
                ) : (
                    <Card className='flex bg-green-200'>
                        <CheckCircleIcon />
                        <p className="text-lg font-medium text-green-800">{message}</p>
                    </Card>

                )}
            </div>
        </>
    )
}

export default CalloutCard