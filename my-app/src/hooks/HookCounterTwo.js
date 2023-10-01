import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count,setCount] = useState(initialCount)

    const incrementFive = (prevState) =>{
        for(let i=0;i<5;i++){
            // setCount(count +1)  // Without using the prevState variable, It will not implement the counter to increase 5, it will be only increased to 1(not 5)
            //So using prevstate as argument to monitor prevState and the function increases the counter to 5
            setCount(prevState => prevState + 1)
        }
    }

    return (
        <>
            Count : {count} <br/>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            {/* <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button> */}
            {/* Using PrevState */}
             <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={incrementFive}>Incremet 5</button>

        </>
    )
}

export default HookCounterTwo;