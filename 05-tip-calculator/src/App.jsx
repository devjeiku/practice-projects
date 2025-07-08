import { useState } from 'react';

function App() {
    const [bill, setBill] = useState(0);
    const [myTip, setMyTip] = useState(0);
    const [friendTip, setFriendTip] = useState(0);

    // const finalTip = bill * tip;
    // const finalFriendTip = bill * friendTip;
    // const totalTip = (finalTip + finalFriendTip) / 2;

    // const total = bill + totalTip;

    let total;

    const myTipFinal = bill * myTip;
    const friendTipFinal = bill * friendTip;

    let average;

    if (friendTip > 0) average = (myTipFinal + friendTipFinal) / 2;
    else average = myTipFinal;

    total = bill + average;

    function handleReset() {
        setBill(0);
        setMyTip(0);
        setFriendTip(0);
    }

    return (
        <>
            <div>
                <div>
                    <span>How much was the bill?</span>
                    <input
                        type='text'
                        value={bill}
                        onChange={(e) => setBill(Number(e.target.value))}
                    />
                </div>

                <div>
                    <span>How did you like the service?</span>
                    <select
                        value={myTip}
                        onChange={(e) => setMyTip(Number(e.target.value))}
                    >
                        <option value={0}>Dissatisfied (0%)</option>
                        <option value={0.05}>It was okay (5%)</option>
                        <option value={0.1}>It was good (10%)</option>
                        <option value={0.2}>Absolutely Amazing! (20%)</option>
                    </select>
                </div>

                <div>
                    <span>How did your friend like the service?</span>
                    <select
                        value={friendTip}
                        onChange={(e) => setFriendTip(Number(e.target.value))}
                    >
                        <option value={0}>Dissatisfied (0%)</option>
                        <option value={0.05}>It was okay (5%)</option>
                        <option value={0.1}>It was good (10%)</option>
                        <option value={0.2}>Absolutely Amazing! (20%)</option>
                    </select>
                </div>

                {bill > 0 && (
                    <div>
                        <div>{`You pay $${total} ($${bill} + $${average} tip)`}</div>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
