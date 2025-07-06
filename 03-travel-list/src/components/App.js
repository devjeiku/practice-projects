import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
    { id: 3, description: 'Charger', quantity: 1, packed: false },
];

function App() {
    const [items, setItems] = useState(initialItems);

    function handleAddItems(item) {
        setItems((prev) => [...prev, item]);
    }

    function handleDeleteItem(id) {
        const itemToDelete = items.find((item) => item.id === id);

        const confirmed = window.confirm(
            `Are you sure you want to delete ${itemToDelete.quantity} ${itemToDelete.description}?`
        );

        if (confirmed)
            setItems((prev) => prev.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function handleClearList() {
        const confirmed = window.confirm(
            'Are you sure you want to delete all items?'
        );

        if (confirmed) setItems([]);
    }

    return (
        <div className='app'>
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
