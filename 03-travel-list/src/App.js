import { useState } from 'react';

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((prev) => [...prev, item]);
    }

    function handleDeleteItem(id) {
        setItems((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <div className='app'>
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} />
            <Stats />
        </div>
    );
}

function Logo() {
    return <h1>🌴Far Away💼</h1>;
}

function Form({ onAddItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };

        console.log(newItem);

        onAddItems(newItem);

        setDescription('');
        setQuantity(1);
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                value={quantity}
                onChange={(e) => {
                    setQuantity(Number(e.target.value));
                }}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type='text'
                placeholder='Item...'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}

function PackingList({ items, onDeleteItem }) {
    return (
        <div className='list'>
            <ul>
                {items.map((item) => (
                    <Item key={item.id} {...item} onDeleteItem={onDeleteItem} />
                ))}
            </ul>
        </div>
    );
}

// function PackingList() {
//     return (
//         <div className='list'>
//             <ul>
//                 {initialItems.map((item) => (
//                     <Item item={item} />
//                 ))}
//             </ul>
//         </div>
//     );
// }

function Item({ id, description, quantity, packed, onDeleteItem }) {
    return (
        <li>
            <span style={packed ? { textDecoration: 'line-through' } : {}}>
                {quantity} {description}
            </span>
            <button onClick={() => onDeleteItem(id)}>❌</button>
        </li>
    );
}

// function Item({ item }) {
//     return (
//         <li>
//             <span>
//                 {' '}
//                 {item.quantity} {item.description}
//             </span>
//         </li>
//     );
// }

function Stats() {
    return (
        <footer className='stats'>
            <em>
                💼 You have X items on your list, and you already packed X (X%)
            </em>
        </footer>
    );
}
