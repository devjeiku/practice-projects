export default function Output({ total, bill, averageTip }) {
    return (
        <>
            <div style={{ margin: '20px 0px' }}>
                <div>
                    <strong>{`You pay $${total} ($${bill} + $${averageTip} tip)`}</strong>
                </div>
            </div>
        </>
    );
}
