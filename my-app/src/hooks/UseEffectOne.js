import React,{useState,useEffect} from 'react'

function UseEffectOne() {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    //This function gets executed after every render of the component
    //The title of the document will be shown based on the browser window document
    //useEffect is placed inside the component because it can get both the states and props value without redeclaring it again
    useEffect (()=>{
        console.log(`useEffect -- updating docs title`)
        document.title = `You clicked ${count} times`
    },[count])
    //2nd parameter count is added to render the useEffect conditinally like onclick of a button , it should not render when we start to write some words on input text
    //So better to add count value as a second parameter to optimize

    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(prevState => prevState + 1)}>Click {count} times</button>
        </>
    )
}

export default UseEffectOne;
