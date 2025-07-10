export default function Bill({ bill, onHandleBill }) {
    function handleChange(e) {
        const value = e.target.value;

        if (value === '') {
            onHandleBill('');
            return;
        }

        const number = Number(value);

        if (!isNaN(number)) {
            onHandleBill(number);
        }
    }

    return (
        <div>
            <label>How much was the bill?</label>
            <input
                type='text'
                value={bill}
                onChange={handleChange}
                placeholder='Bill value'
            />
        </div>
    );
}
