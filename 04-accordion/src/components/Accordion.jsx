import Item from './Item';

export default function Accordion({ faqs }) {
    return (
        <div>
            {faqs.map((item) => (
                <Item title={item.title} text={item.text} />
            ))}
        </div>
    );
}
