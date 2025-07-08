import { useState } from 'react';

export default function Item({ num, title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <>
            <div
                className={`item ${isOpen ? 'open' : ''}`}
                onClick={handleClick}
            >
                <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
                <p className='title'>{title}</p>
                <p className='icon'>
                    {isOpen ? (
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

                {isOpen && <div className='content-box'>{text}</div>}
            </div>
        </>
    );
}
