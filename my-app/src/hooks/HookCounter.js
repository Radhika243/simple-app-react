import React,{useState} from 'react'

function HookCounter() {
    
    const [count,setCount] = useState(0) // array destructuring in ES6
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </>
    )
}

export default HookCounter;
