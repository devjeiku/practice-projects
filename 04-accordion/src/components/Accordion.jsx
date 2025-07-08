import { useState } from 'react';
import Item from './Item';

export default function Accordion({ data }) {
    return (
        <div className='accordion'>
            {data.map((item, i) => (
                <Item key={i} title={item.title} text={item.text} num={i} />
            ))}
        </div>
    );
}
