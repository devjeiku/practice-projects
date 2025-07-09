export default function Bill({ bill, onHandleBill }) {
    return (
        <div>
            <span>How much was the bill?</span>
            <input
                type='text'
                value={bill}
                onChange={(e) => onHandleBill(Number(e.target.value))}
            />
        </div>
    );
}
