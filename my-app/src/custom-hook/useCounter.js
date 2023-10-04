import {useState} from 'react'

function UseCounter() {
    let initialCount = 0
    const [count,setCount] = useState(initialCount)

    const increment =() =>{
        setCount(prevState => prevState + 1)
    }

    const decrement =() =>{
        setCount(prevState => prevState - 1)
    }

    const reset =() =>{
        setCount(initialCount)
    }

    return  [count,increment,decrement,reset]
}

export default UseCounter;
