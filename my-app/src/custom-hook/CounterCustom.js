import React from 'react'
import UseCounter from './useCounter';

function CounterCustom() {
    // let initialCount = 0
    // const [count,setCount] = useState(initialCount)

    // const increment =() =>{
    //     setCount(prevState => prevState + 1)
    // }

    // const decrement =() =>{
    //     setCount(prevState => prevState - 1)
    // }

    // const reset =() =>{
    //     setCount(initialCount)
    // }

   const [count,increment,decrement,reset] = UseCounter()



    return (
        <>
        <h2>count = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default CounterCustom;
