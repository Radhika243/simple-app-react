import React,{useState} from 'react'
import UseDocumentTitle from './useDocumentTitle';

//insread of repeating the code for document title change, it's better to create a custom hook to handle the same code

function DocTitle2() {
    const [count,setCount] = useState(0)

    // useEffect(()=>{
    //     document.title = `you clicked ${count} times`
    // },[count])

    UseDocumentTitle(count)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment count - {count}</button>
        </>
    )
}

export default DocTitle2;
//useDocumentTitle -- > custom hook
