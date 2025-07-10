import { useState } from 'react';
import Bill from './Bill';
import TipRating from './TipRating';
import Output from './Output';
import Reset from './Reset';

export default function TipCalculator() {
    const [bill, setBill] = useState(0);
    const [myTip, setMyTip] = useState(0);
    const [friendTip, setFriendTip] = useState(0);

    let total;

    // const myTipCalculated = bill * myTip;
    // const friendTipCalculated = bill * friendTip;

    // let averageTip;

    // if (friendTip > 0 && myTip > 0)
    //     averageTip = (myTipCalculated + friendTipCalculated) / 2;
    // else if (friendTip > 0) averageTip = friendTipCalculated;
    // else averageTip = myTipCalculated;

    const tips = [myTip, friendTip].filter((tip) => tip > 0);
    const averageTip =
        tips.length > 0
            ? Math.round(
                  tips.reduce((sum, tip) => sum + bill * tip, 0) / tips.length
              )
            : 0;

    total = Math.round(bill + averageTip);

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
                    <span>How did you like the service?</span>
                </TipRating>

                <TipRating tip={friendTip} onHandleTip={setFriendTip}>
                    <span>How did your friend like the service?</span>
                </TipRating>

                {bill > 0 && (
                    <>
                        <Output
                            total={total}
                            bill={bill}
                            averageTip={averageTip}
                        />
                        <Reset onReset={handleReset} />
                    </>
                )}
            </div>
        </>
    );
}
