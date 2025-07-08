import Item from './Item';

export default function Accordion({ data }) {
    return (
        <div className='accordion'>
            {data.map((item, i) => (
                <Item
                    key={item.title}
                    title={item.title}
                    text={item.text}
                    num={i}
                />
            ))}
        </div>
    );
}
