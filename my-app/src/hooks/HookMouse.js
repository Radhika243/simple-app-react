import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = e =>{
        console.log(`Mouse event`)
        setX(e.clientX)
        setY(e.clientY)
    }

        //Inorder to render the useEffect only once at the initial time , we need to use [] as a 2nd parameter for UseEffect otherwise UseEffect and mouse event will come on console repeatedly (mimicing the componentDidMount)
    useEffect (()=>{
        console.log(`useEffect called`)
        window.addEventListener('mouseover',logMousePosition)

        //return a clean up component or umnounting code
        return () =>{
            console.log(`component umount or clean up`)
            window.removeEventListener('mouseover',logMousePosition)
        }

    },[])
    return (
        <>
        <br></br>
            Hooks X - {x} Y - {y}
        </>
    )
}

export default HookMouse;
