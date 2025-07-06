import { useState } from 'react';
import Item from './Item';

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    if (sortBy === 'input') sortedItems = items;

    if (sortBy === 'description')
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed')
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    function handleChange(e) {
        setSortBy(e.target.value);
    }

    return (
        <div className='list'>
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        {...item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>

            {items.length ? (
                <div className='actions'>
                    <select value={sortBy} onChange={handleChange}>
                        <option value='input'>Sort by input order</option>
                        <option value='description'>Sort by description</option>
                        <option value='packed'>Sort by packed status</option>
                    </select>

                    <button onClick={onClearList}>Clear List</button>
                </div>
            ) : null}
        </div>
    );
}

export default PackingList;
