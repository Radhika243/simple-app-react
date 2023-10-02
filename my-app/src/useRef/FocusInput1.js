import React,{useEffect,useRef} from 'react'

function FocusInput1() {
    //This is how we can use Ref attributes to modify the DOM nodes according to our requirements
    const inputRef = useRef(null)

    useEffect(()=>{
        //need to focus input element
        inputRef.current.focus()
    },[]) // componentDidMount fashion

    return (
        <>
            <input type='text' ref={inputRef}></input>
        </>
    )
}

export default FocusInput1;