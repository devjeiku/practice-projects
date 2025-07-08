import { useState } from 'react';
import Item from './Item';

export default function Accordion({ data }) {
    const [currentOpen, setCurrentOpen] = useState(null);
    return (
        <div className='accordion'>
            {data.map((item, i) => (
                <Item
                    key={item.title}
                    title={item.title}
                    num={i}
                    currentOpen={currentOpen}
                    onOpen={setCurrentOpen}
                >
                    {item.text}
                </Item>
            ))}
        </div>
    );
}
