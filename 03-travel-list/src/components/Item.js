function Item({
    id,
    description,
    quantity,
    packed,
    onDeleteItem,
    onToggleItem,
}) {
    return (
        <li>
            <input
                type='checkbox'
                checked={packed}
                onChange={() => {
                    onToggleItem(id);
                }}
            />
            <span
                onClick={() => onToggleItem(id)}
                style={{
                    cursor: 'pointer',
                    textDecoration: packed ? 'line-through' : 'none',
                }}
            >
                {quantity} {description}
            </span>
            <button onClick={() => onDeleteItem(id)}>❌</button>
        </li>
    );
}

export default Item;
