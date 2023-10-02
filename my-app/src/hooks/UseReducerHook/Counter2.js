import React,{useState} from 'react';

function Counter2() {
    let initialCount = 0;
    const [count,setCount] = useState(initialCount)

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState-1)}>Decrement</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </>
    )
}

export default Counter2;
