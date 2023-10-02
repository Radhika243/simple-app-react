import React,{useState,useMemo} from 'react'


//If we need to cache a function --> useCallback
//If we need to cache the result of a invoked function --> useMemo
function CounterMemo() {
    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)

    const incrementOne = () =>{
        setCounter1(counter1 + 1)
    }

    const incrementTwo = () =>{
        setCounter2(counter2 + 1)
    }

    const isEven = () =>{
        return counter1 % 2 === 0
    }
    useMemo(() =>{
        isEven()
    },[counter1])


    const isOdd = () =>{
        return counter2 % 2 !== 0
    }




    return (
        <>
            <div>
            <h2>Counter 1 - {counter1}</h2>
            <button onClick={incrementOne}>Increment</button><br></br>
            <span>{isEven() ? 'Even' : 'odd'}</span>
            </div>
            <div>
            <h2> Counter 2 - {counter2}</h2>
            <button onClick={incrementTwo}>Increment</button><br></br>
            <span>{isOdd () ? 'Odd' : 'Even'}</span>
            </div>
        </>
    )
}

export default CounterMemo;
