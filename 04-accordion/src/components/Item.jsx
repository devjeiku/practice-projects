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
                    {isActive ? (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            class='lucide lucide-plus-icon lucide-plus'
                        >
                            <path d='M5 12h14' />
                            <path d='M12 5v14' />
                        </svg>
                    ) : (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            class='lucide lucide-minus-icon lucide-minus'
                        >
                            <path d='M5 12h14' />
                        </svg>
                    )}
                </p>
                <div className={`content-box ${isActive ? 'show' : ''}`}>
                    {text}
                </div>
            </div>
        </>
    );
}
