import { useState } from 'react';

export default function Item({ num, title, text }) {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive((prev) => !prev);
    }

    return (
        <>
            <div className={`item ${isActive ? 'open' : ''}`}>
                <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
                <p className='title'>{title}</p>
                <p className='icon' onClick={handleClick}>
                    {isActive ? '+' : '-'}
                </p>
                <div className={`content-box ${isActive ? 'show' : ''}`}>
                    {text}
                </div>
            </div>
        </>
    );
}
