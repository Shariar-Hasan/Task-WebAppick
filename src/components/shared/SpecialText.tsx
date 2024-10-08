import React from 'react';
interface PropsType {
    children: React.ReactNode;
    isBranded?: boolean;
    isUnderLined?: boolean;
}
const SpecialText = ({ children, isBranded, isUnderLined }: PropsType) => {
    return (
        <span
            className={`inline-block relative ${
                isBranded ? 'text-brand' : ''
            } `}
        >
            {children}
            {isUnderLined ? (
                <img
                    src='/assets/title-bottom-bar.png'
                    className='title-botto m-bar absolute top-full left-[50%] -translate-x-[50%] z-1'
                />
            ) : (
                ''
            )}
        </span>
    );
};

export default SpecialText;
