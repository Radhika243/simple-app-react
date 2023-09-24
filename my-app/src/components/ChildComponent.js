import React from 'react'

function ChildComponent(props) {
    

    return (
        <>
           <button onClick={props.greetHandler}>Greet Parent</button> 
           <button onClick={()=>props.greetHandler('child')}>Greet Parent1</button> 
        </>
    )
}

export default ChildComponent;
