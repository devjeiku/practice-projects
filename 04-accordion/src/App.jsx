import './styles.css';

const faqs = [
    {
        title: 'Where are these chairs assembled?',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
    },
    {
        title: 'How long do I have to return my chair?',
        text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
    },
    {
        title: 'Do you ship to countries outside the EU?',
        text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
    },
];

export default function App() {
    return (
        <div>
            <Accordion faqs={faqs} />
        </div>
    );
}

function Accordion({ faqs }) {
    return (
        <div>
            {faqs.map((item) => (
                <Item title={item.title} text={item.text} />
            ))}
        </div>
    );
}

function Item({ title, text }) {
    return (
        <>
            <div>
                <span>{title}</span>
            </div>
            <div>
                <span>{text}</span>
            </div>
        </>
    );
}
