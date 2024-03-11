import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="shadow-md rounded-md p-4 relative w-full">
            {children}
        </div>
    )
}

export default Card;