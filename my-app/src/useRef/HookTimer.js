import React,{useState,useEffect,useRef} from 'react'

function HookTimer() {
    const [timer,setTimer] = useState(0)
    const intervalRef = useRef() // clearing interval timer from an react handler
    // let interval  -- we can create interval  as let a variable or else use useREf hook
    useEffect(()=>{
      intervalRef.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        },1000)

        return() => {//unmounting
            clearInterval(intervalRef.current)
        }
    },[])


    return (
        <>
            Hook Timer : {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </>
    )
}

export default HookTimer;
