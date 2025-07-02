const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: true },
    { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
    return (
        <div className='app'>
            <Logo />
            <Form />
            <PackingList items={initialItems} />
            <Stats />
        </div>
    );
}

function Logo() {
    return <h1>🌴Far Away💼</h1>;
}

function Form() {
    return (
        <form className='add-form'>
            <h3>What do you need for your 😍 trip?</h3>
            <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <input type='text' placeholder='Item...' />
            <button>Add</button>
        </form>
    );
}

function PackingList({ items }) {
    return (
        <div className='list'>
            <ul>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        description={item.description}
                        quantity={item.quantity}
                        packed={item.packed}
                    />
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

function Item({ key, description, quantity, packed }) {
    return (
        <li>
            <span style={packed ? { textDecoration: 'line-through' } : {}}>
                {quantity} {description}
            </span>
            <button>❌</button>
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
        <footer>
            <em>
                💼 You have X items on your list, and you already packed X (X%)
            </em>
        </footer>
    );
}
