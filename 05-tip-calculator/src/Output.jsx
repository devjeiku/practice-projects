export default function Output({ total, bill, averageTip }) {
    return (
        <>
            <div style={{ margin: '20px 0px' }}>
                <h3>
                    <strong>{`You pay $${total} ($${bill} + $${averageTip.toFixed(
                        2
                    )} tip)`}</strong>
                </h3>
            </div>
        </>
    );
}
