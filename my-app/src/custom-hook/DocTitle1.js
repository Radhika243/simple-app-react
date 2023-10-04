import React,{useState} from 'react'
import UseDocumentTitle from './useDocumentTitle';

function DocTitle1() {
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

export default DocTitle1;
//useDocumentTitle -- > custom hook
