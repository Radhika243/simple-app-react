import {useEffect} from 'react'

function UseDocumentTitle(count) {
    // we need to include the code for updating the document title

    useEffect(()=>{
        document.title = `you clicked ${count} times`
    },[count])
}

export default UseDocumentTitle;
//useDocumentTitle -- > custom hook