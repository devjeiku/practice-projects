import { useState } from 'react';
import Bill from './Bill';
import TipRating from './TipRating';

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
                <Bill bill={bill} onHandleBill={setBill} />

                <TipRating tip={myTip} onHandleTip={setMyTip}>
                    How did you like the service?
                </TipRating>

                <TipRating tip={friendTip} onHandleTip={setFriendTip}>
                    How did your friend like the service?
                </TipRating>

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
