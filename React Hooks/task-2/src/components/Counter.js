export default function Counter({
    count
}) {
    return (
        <>
            <h3>Counter</h3>
            {count > 10
                ? <p style={{ color: 'red' }}>{count}</p>
                : <p style={{ color: 'blue' }}>{count}</p>
            }
        </>
    );
}