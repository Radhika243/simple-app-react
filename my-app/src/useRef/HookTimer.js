import React,{useState,useEffect} from 'react'

function HookTimer() {
    const [timer,setTimer] = useState(0)
    let interval
    useEffect(()=>{
       interval = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        },1000)

        return() => {
            clearInterval(interval)
        }
    },[timer])


    return (
        <>
            Hook Timer : {timer}
            <button onClick={() => clearInterval(interval)}>Clear Timer</button>
        </>
    )
}

export default HookTimer;
