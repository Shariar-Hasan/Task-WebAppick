import React from 'react';

interface PropsType {
    isBrand?: boolean;
    className?: string;
    children?: React.ReactNode;
}
const Button = ({ isBrand, className, children }: PropsType) => {
    let styleClass = '';
    if (isBrand) {
        styleClass += 'bg-brand';
    }

    return (
        <button
            className={`px-6 py-2 rounded-md text-white ${styleClass} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
