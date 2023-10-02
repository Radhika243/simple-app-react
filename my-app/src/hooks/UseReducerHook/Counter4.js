import React,{useReducer} from 'react'
/// These are the changes for REDUX users

const initialState = {
    firstCounter : 0,
    secondCounter : 10
}
//2nd step
//action ---> instruction to reducer function, based on the action specified the reducer function performs necessary state transactions
const reducer = (currentState,action) =>{
    //return newState
    switch(action.type){
        case 'increment':
            return {...currentState,firstCounter : currentState.firstCounter + action.value}
            break;
        case 'decrement':
            return {...currentState,firstCounter : currentState.firstCounter - action.value}
            break;
        case 'increment2':
            return {...currentState,secondCounter : currentState.secondCounter + action.value}
            break;
        case 'decrement2':
            return {...currentState,secondCounter : currentState.secondCounter - action.value}
            break;
        case 'reset':
            return initialState
            break;
        default:
            return currentState
    }

}
function Counter4() {
   

    //value --> to display in JSX and we need the way to use reducer function in JSX
    const [count,dispatch] =  useReducer(reducer,initialState) //2nd step
    //below is 3rd step
    return (
        <>
            <div>COUNTER 1 : {count.firstCounter}</div>
            <div>COUNTER 2: {count.secondCounter}</div>
            <button onClick={() => dispatch({type :'increment',value : 5})}>Increment</button>
            <button onClick={() => dispatch({type :'decrement',value : 5})}>Decrement</button>
            <button onClick={() => dispatch({type :'increment2',value : 5})}>Increment 2</button>
            <button onClick={() => dispatch({type :'decrement2',value : 5})}>Decrement 2</button>
            <button onClick={() => dispatch({type :'reset',value : 1})}>Reset</button>
        </>
    )
}

export default Counter4;