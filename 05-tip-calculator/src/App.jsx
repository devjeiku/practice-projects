import { useState } from 'react';
import Bill from './Bill';
import TipRating from './TipRating';

function App() {
    const [bill, setBill] = useState(0);
    const [myTip, setMyTip] = useState(0);
    const [friendTip, setFriendTip] = useState(0);

    let total;

    const myTipCalculated = bill * myTip;
    const friendTipCalculated = bill * friendTip;

    let averageTip;

    if (friendTip > 0 && myTip > 0)
        averageTip = (myTipCalculated + friendTipCalculated) / 2;
    else if (friendTip > 0) averageTip = friendTipCalculated;
    else averageTip = myTipCalculated;

    total = bill + averageTip;

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
                        <div>{`You pay $${total} ($${bill} + $${averageTip} tip)`}</div>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
